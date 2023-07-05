"use client"
import React, { useEffect, useState } from 'react';
import LayoutSidebar from '@fooddy/components/LayoutSidebar';
import { Item } from '@fooddy/app/interfaces/item.interface';
import { useRouter } from 'next/navigation';

const Server = "https://api.fooddy.cl";

// REQUEST AUTHENTICATE PROVIDER
const linkAuthenticateProvider = "items/getData";
const urlAuthenticateProvider = `${Server}/${linkAuthenticateProvider}`;

function ItemsPage() {
    const router = useRouter()
  const [items, setItems] = useState<Item[]>([]);
  const token = localStorage.getItem('@Token'); // Obtener el token del localStorage

  useEffect(() => {
    // Realizar la solicitud a la API para obtener los items
    // Aquí puedes usar axios u otras librerías para hacer la solicitud

    // Ejemplo de solicitud utilizando fetch
    fetch(urlAuthenticateProvider, {
      headers: {
        Authorization: `JWT ${token}` // Incluir el token en el encabezado de la solicitud
      }
    })
      .then(response => response.json())
      .then(responseData => {
        setItems(responseData.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleCreateProduct = () => {
    // Lógica para crear un nuevo producto
    console.log("Crear producto");
    router.push('/home/items/new/');

  };

  const handleEditProduct = (productId: number) => {
    // Lógica para editar un producto existente
    console.log("Editar producto", productId);
    router.push(`/home/items/edit/${productId}`);

  };

  const handleDeleteProduct = (productId: number) => {
    // Lógica para eliminar un producto existente
    console.log("Eliminar producto", productId);
  };

  return (
    <LayoutSidebar>
      <div>
        <h1>Items Page</h1>
        <button onClick={handleCreateProduct}>Crear producto</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Currency</th>
              <th>Unit Cost</th>
              <th>Ingredients</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.currency}</td>
                <td>{item.unitCost}</td>
                {/* <td>
                  {item.properties?.ingredients?.map((ingredient, index) => (
                    <span key={index}>{ingredient}</span>
                  ))}
                </td> */}
                <td>
                  <button onClick={() => handleEditProduct(item.id)}>Editar</button>
                  <button onClick={() => handleDeleteProduct(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutSidebar>
  );
}

export default ItemsPage;
