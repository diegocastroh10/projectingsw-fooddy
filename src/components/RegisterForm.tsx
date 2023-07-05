'use client';
import { useForm } from 'react-hook-form';

type FormValues = {
    name: string;
    tin: string;
    email: string;
    phone: number;
    password: string;
    /*
    nationality: string;
    birthday: string;
    address: string;
    */
}

export default function LoginFormPage() {
    const {register, handleSubmit} = useForm<FormValues>();

    function handleFormSubmit(data: FormValues) {
        console.log({data});
    }

    return (
        <form className='space-y-6' onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex flex-col gap-1">
                <label htmlFor="name">Nombre</label>
                <input 
                    id="name"
                    type="text" placeholder="Ingresa tu nombre de usuario" 
                    className="h-11 px-4 border rounded-md"
                    {...register("name")} />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="tin">RUT</label>
                <input 
                    id="tin"
                    type="text" placeholder="Ingresa tu RUT sin punto ni guión" 
                    className="h-11 px-4 border rounded-md"
                    {...register("tin")} />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email">Correo</label>
                <input 
                    id="email"
                    type="email" placeholder="Ingresa tu correo" 
                    className="h-11 px-4 border rounded-md"
                    {...register("email")} />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="phone">Teléfono</label>
                <input 
                    id="phone"
                    type="tel" placeholder="Ingresa tu número de teléfono" 
                    className="h-11 px-4 border rounded-md"
                    {...register("phone")} />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password">Contraseña</label>
                <input 
                    id="password"
                    type="password" placeholder="Ingresa tu contraseña" 
                    className="h-11 px-4 border rounded-md"
                    {...register("password")} />
            </div>
            <div className="flex justify-end">
                <button className="h-11 px-6 bg-black text-white rounded-md">Siguiente</button>
            </div>
        </form>
    );
};