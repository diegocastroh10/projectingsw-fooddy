import { ApiProperty } from '@nestjs/swagger';

export class UpdateItemPhotosDto {
    @ApiProperty({ example: 1, description: 'The item identification', required: true })
    id: number;

    @ApiProperty({
        description: 'Attachments',
        type: 'array',
        items: {
            type: 'file',
            items: {
                type: 'string',
                format: 'binary',
            },
        },
    })
    files: any[];
}