'use client';
import { useEffect, useState } from 'react';
import { StoreData } from '@fooddy/app/interfaces/provider.interface';

const Server = "https://api.fooddy.cl";

// REQUEST GETDATA PROVIDER
const linkGetDataProvider = "providers/getData";
const urlGetDataProvider = `${Server}/${linkGetDataProvider}`;

function StoreDetails() {
  const [provider, setProvider] = useState<StoreData>();
  const token = localStorage.getItem('@Token'); // Obtener el token del localStorage

  useEffect(() => {
    // Realizar la solicitud a la API para obtener los items
    // Aquí puedes usar axios u otras librerías para hacer la solicitud

    // Ejemplo de solicitud utilizando fetch
    fetch(urlGetDataProvider, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}` // Incluir el token en el encabezado de la solicitud
    }
    })
      .then(response => response.json())
      .then(responseData => {
        setProvider(responseData.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!provider) {
    return <div>Cargando datos de la tienda...</div>;
  }

  return (
    <div>
      <h1>Detalles de la tienda</h1>
      <p>Nombre: {provider.name}</p>
      <p>Dirección: {provider.address}</p>
      <p>Teléfono: {provider.phone}</p>
    </div>
  );
};

export default StoreDetails;
