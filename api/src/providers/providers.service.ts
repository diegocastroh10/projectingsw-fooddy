import { BadRequestException, Injectable } from '@nestjs/common';
import { UnauthorizedException, ForbiddenException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';

import { CreateProviderDto } from './dto/create-provider.dto';
import { AuthenticateProviderDto } from "./dto/authenticate-provider.dto";
import { RecoverProviderDto } from "./dto/recover-provider.dto";
import { UpdateProviderDto } from './dto/update-provider.dto';

import { Provider } from './models/provider.model';
import * as bcrypt from 'bcrypt';
import * as jose from 'jose';
import { join } from 'path';
import { of } from "rxjs";
import { getReasonPhrase, ReasonPhrases, StatusCodes } from 'http-status-codes';

@Injectable()
export class ProvidersService {
    constructor(
        private configService: ConfigService,
        @InjectModel(Provider)
        private readonly providerModel: typeof Provider,
    ) { }

    async create(createProviderDto: CreateProviderDto) {
        try {
            const salt = await bcrypt.genSalt();
            const password = createProviderDto.password;
            const hash = await bcrypt.hash(password, salt);
            const properties = {}
            await this.providerModel.create({
                name: createProviderDto.name.toUpperCase(),
                tin: createProviderDto.tin,
                email: createProviderDto.email,
                phone: createProviderDto.phone,
                nationality: createProviderDto.nationality,
                address: createProviderDto.address,
                birthday: createProviderDto.birthday,
                password: hash,
                properties: properties
            })
            return ({
                status: StatusCodes.CREATED,
                send: ReasonPhrases.CREATED,
            })
        }
        catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                throw new BadRequestException('Sequelize Unique Constraint Error')
            }
            else if (error.name === 'SequelizeValidationError') {
                throw new BadRequestException('Sequelize Validation Error')
            }
            else {
                throw new InternalServerErrorException()
            }
        }
    }

    async authenticate(authenticateProviderDto: AuthenticateProviderDto) {
        try {
            const account = await this.providerModel.findOne({
                where: { email: authenticateProviderDto.email },
            });
            if (account) {
                const isMatch = await bcrypt.compare(authenticateProviderDto.password, account.password);
                if (isMatch) {
                    const jwtKey = this.configService.get<string>('jwt.key');
                    const algorithm = this.configService.get<string>('jwt.alg');
                    const expirationTime = this.configService.get<string>('jwt.exp');
                    const secret = new TextEncoder().encode(jwtKey);
                    const jwt = await new jose.SignJWT({
                        id: account.id,
                        name: account.name,
                        tin: account.tin,
                        nationality: account.nationality,
                        birthday: account.birthday,
                        email: account.email,
                        phone: account.phone,
                        address: account.address,
                        properties: account.properties,
                        type: 'provider',
                    })
                        .setProtectedHeader({ alg: algorithm })
                        .setExpirationTime(expirationTime)
                        .sign(secret);

                    return ({
                        status: StatusCodes.OK,
                        send: ReasonPhrases.OK,
                        data: {
                            token: jwt
                        }
                    })
                }
                else {
                    throw new UnauthorizedException()
                }
            }
            else {
                throw new ForbiddenException()
            }
        }
        catch (error) {
            if (error.status === StatusCodes.UNAUTHORIZED) {
                throw new UnauthorizedException()
            }
            if (error.status === StatusCodes.FORBIDDEN) {
                throw new ForbiddenException()
            }
            throw new InternalServerErrorException()
        }
    }

    async recover(recoverDto: RecoverProviderDto) {
        try {
            const provider = await this.providerModel.findOne({
                where: { email: recoverDto.email },
            });
            if (provider) {
                const salt = await bcrypt.genSalt();
                const password = recoverDto.password;
                const hash = await bcrypt.hash(password, salt);
                await provider.update({
                    password: hash,
                })
                await provider.save();
                return ({
                    status: StatusCodes.OK,
                    send: ReasonPhrases.OK,
                })
            }
            else {
                throw new BadRequestException()
            }
        }
        catch (error) {
            if (error.status === StatusCodes.BAD_REQUEST) {
                throw new BadRequestException()
            }
            throw new InternalServerErrorException()
        }
    }

    async getData(headers: Headers) {
        try {
            const jwt = headers['authorization'].split(" ")[1];
            const jwtKey = this.configService.get<string>('jwt.key');
            const secret = new TextEncoder().encode(jwtKey);
            const { payload } = await jose.jwtVerify(jwt, secret);
            const account = await this.providerModel.findOne({
                where: { id: payload.id },
            });
            const provider = {
                id: account.id,
                name: account.name,
                tin: account.tin,
                nationality: account.nationality,
                birthday: account.birthday,
                email: account.email,
                phone: account.phone,
                address: account.address,
                properties: account.properties,
            }
            return ({
                status: StatusCodes.OK,
                send: ReasonPhrases.OK,
                data: provider
            })
        }
        catch (error) {
            throw new InternalServerErrorException()
        }
    }

    async update(headers: Headers, accountDto: UpdateProviderDto) {
        try {
            const salt = await bcrypt.genSalt();
            const password = accountDto.password;
            const hash = password ? await bcrypt.hash(password, salt) : undefined;
            const jwt = headers['authorization'].split(" ")[1];
            const jwtKey = this.configService.get<string>('jwt.key');
            const secret = new TextEncoder().encode(jwtKey);
            const { payload } = await jose.jwtVerify(jwt, secret);
            const provider = await this.providerModel.findOne({
                where: { id: payload.id },
            });
            await provider.update({
                name: accountDto.name ? accountDto.name.toUpperCase() : payload.name,
                tin: accountDto.tin,
                nationality: accountDto.nationality,
                birthday: accountDto.birthday,
                email: accountDto.email ? accountDto.email : payload.email,
                phone: accountDto.phone ? accountDto.phone : payload.phone,
                address: accountDto.address,
                password: hash===undefined ? payload.password : hash,
                properties: accountDto.properties,
                isActive: accountDto.isActive
            })
            await provider.save();
            return ({
                status: StatusCodes.OK,
                send: ReasonPhrases.OK,
            })
        }
        catch (error) {
            console.log(error)
            throw new InternalServerErrorException()
        }
    }

    async updatePhoto(headers: Headers, file: Express.Multer.File) {
        try {
            const jwt = headers['authorization'].split(" ")[1];
            const jwtKey = this.configService.get<string>('jwt.key');
            const secret = new TextEncoder().encode(jwtKey);
            const { payload } = await jose.jwtVerify(jwt, secret);
            if (file && file.mimetype.split('/')[0] === 'image' && file.size < 10000000) {
                const fs = require("fs");
                const location = this.configService.get<string>('files.images.providers');
                const path = location + 'provider_' + payload.id + '_' + file.originalname;
                fs.writeFile(path, file.buffer, (err) => {
                    if (err) throw err;
                });
                const provider = await this.providerModel.findOne({
                    where: { id: payload.id },
                });
                const properties = provider.properties;
                properties["photo"] = 'provider_' + payload.id + '_' + file.originalname;
                await provider.update({
                    properties: JSON.stringify(properties),
                });
                await provider.save();
                return ({
                    status: StatusCodes.OK,
                    send: ReasonPhrases.OK,
                })
            }
            else {
                throw new BadRequestException();
            }
        }
        catch (error) {
            if (error.status === StatusCodes.BAD_REQUEST) {
                throw new BadRequestException();
            }
            throw new InternalServerErrorException()
        }
    }

    async getPhoto(res: any, filename: string) {
        try {
            const location = this.configService.get<string>('files.images.providers');
            return of(res.sendFile(location + filename, function (error) {
                if (error) {
                    res.status(StatusCodes.NOT_FOUND)
                    res.send({
                        status: error.statusCode,
                        send: getReasonPhrase(error.statusCode),
                    })
                }
            }));
        }
        catch (error) {
            throw new InternalServerErrorException()
        }
    }
}