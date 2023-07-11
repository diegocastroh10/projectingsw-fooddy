'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter()
  return (
 
      <div className="min-h-screen py-40">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
            <h1 className="text-3xl mb-3 text-orange-400">Bienvendo a</h1>
            <div className='items-center text-center'>
              <Image 
                src="/fooddy_orange.png" 
                width={300} 
                height={160} 
                alt='logo'
              />
              <p className='p-5'>Presiona el botón para ingresar con tu cuenta</p>
              <button onClick={() => router.push('/home/login')}
                className="h-11 px-6 bg-black text-white rounded-md"
                type='submit'
              >
                Iniciar sesión
              </button>           
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2  className="text-3xl mb-4">Registrame</h2>
            <p className="mb-4">
              Si no tienes cuenta puedes registrarte aquí
            </p>
            <button onClick={() => router.push('/home/register')} 
              className="h-11 px-6 bg-black text-white rounded-md"
              type='submit'
            >
              Crear cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}