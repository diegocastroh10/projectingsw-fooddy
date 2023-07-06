'use client'
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
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        TIN:
        <input
          type="text"
          name="tin"
          value={formData.tin}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Teléfono:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Crear proveedor</button>
    </form>
  );
};

export default CreateProviderForm;
