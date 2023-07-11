'use client';
import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Authenticate } from '@fooddy/app/api/requests/items.requests';
import { useRouter } from 'next/navigation';

interface Values {
  email: string;
  password: string;
}

export default function Login() {
    const router = useRouter();
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                setTimeout(async () => {
                    let response = await Authenticate(values);
                    console.log("RESPONSE IS", response);
                    if (response.status == 200){
                        console.log(response.data.token);
                        localStorage.setItem('@Token', response.data.token); // Guardar el token en el almacenamiento local
                        setSubmitting(false);
                        router.push('/');
                    } // Redireccionar a la nueva página (ajusta la ruta según tus necesidades)
                }, 500);
            }}
        >
        <Form className='space-y-6'>
            <div className="flex flex-col gap-1">
                <label htmlFor="email">Correo</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="Ej: fooddy@gmail.com"
                    className="h-11 px-4 border rounded-md"
                    type="email"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password">Contraseña</label>
                <Field 
                    id="password"
                    name="password"
                    placeholder="***********"
                    className="h-11 px-4 border rounded-md"
                    type="password"
                />
            </div>
            <div className="flex justify-end">
              <button 
                className="h-11 px-6 bg-black text-white rounded-md"
                type='submit'
              >
                Ingresar
              </button>
            </div>
        </Form>
    </Formik>
  );
};