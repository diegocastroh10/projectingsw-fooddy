'use client';
import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Authenticate } from '@fooddy/app/api/requests/items.requests';
import { useRouter } from 'next/navigation';
import LayoutSidebar from '@fooddy/components/LayoutSidebar';

interface Values {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  return (
    <LayoutSidebar>
        <main className="flex min-h-screen items-center justify-between p-24">
        <div>
            <h1>Iniciar sesión</h1>
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
            <Form>
                <div>
                <label htmlFor="email">Email</label>
                <Field
                id="email"
                name="email"
                placeholder="john@acme.com"
                type="email"
                />
                </div>
                <label htmlFor="password">Password</label>
                <Field 
                id="password"
                name="password"
                placeholder="*************"
                type="password"
                />

                <button type="submit">Submit</button>
            </Form>
            </Formik>
        </div>
        </main>
    </LayoutSidebar>
  )
}

