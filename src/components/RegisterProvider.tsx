'use client';
import { createProvider } from '@fooddy/app/api/requests/providers.requests';
import React, { useState } from 'react';

const CreateProviderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    tin: '',
    email: '',
    phone: 0,
    password: '',
  });

   const handleInputChange = (event:any) => {
    const { name, value } = event.target;
  
    // Convertir el campo 'phone' a número utilizando parseInt
    const parsedValue = name === 'phone' ? parseInt(value, 10) : value;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parsedValue
    }));
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const response = await createProvider(formData);
      console.log(response); // Maneja la respuesta según tus necesidades (redireccionar, mostrar mensaje, etc.)
      // Restablece el formulario después de crear el proveedor
      setFormData({
        name: '',
        tin: '',
        email: '',
        phone: 0,
        password: '',
      });
    } catch (error) {
      console.error('Error al crear el proveedor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className="flex flex-col gap-1">
        <label htmlFor='name'>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder='Ej: Diego García Candia'
            className="h-11 px-4 border rounded-md"
            value={formData.name}
            onChange={handleInputChange}
          />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor='tin'>RUT</label>
          <input
            type="text"
            name="tin"
            placeholder='Ej: 12345678 (Sin dígito verificador)'
            className="h-11 px-4 border rounded-md"
            value={formData.tin}
            onChange={handleInputChange}
          />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor='email'>Correo</label>
          <input
            type="email"
            name="email"
            placeholder='Ej: fooddy@gmail.com'
            className="h-11 px-4 border rounded-md"
            value={formData.email}
            onChange={handleInputChange}
          />
      </div>
      <div className="flex flex-col gap-1">
      <label htmlFor='phone'>Teléfono (8 dígitos)</label>
        <input
          type="tel"
          name="phone"
          className="h-11 px-4 border rounded-md"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor='password'>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder='Ej: Fooddy#123'
            className="h-11 px-4 border rounded-md"
            value={formData.password}
            onChange={handleInputChange}
          />
      </div>
      <div className="flex justify-end">
        <button 
          className="h-11 px-6 bg-black text-white rounded-md"
          type='submit'
        >
          Registrar
        </button>
      </div>
    </form>
  );
};

export default CreateProviderForm;
