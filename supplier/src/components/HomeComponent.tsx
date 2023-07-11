'use client';

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()
  return (
    <div className='bg-red-600 w-screen h-screen flex items-center'>
      <div className='text-center w-full'>
        <button onClick={() => router.push('/home/login')} className='bg-white p-2 px-4 rounded-lg'>
          Iniciar sesión
        </button>
        <button onClick={() => router.push('/home/register')} className='bg-white p-2 px-4 rounded-lg'>
          Registrarme
        </button>
      </div>
    </div>
  );
}