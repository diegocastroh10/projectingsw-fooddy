const Server = "http://localhost:3000";

const linkCreateProvider = "providers/create";
const urlCreateProvider = `${Server}/${linkCreateProvider}`;

const linkUpdateProvider = "providers/update";
const urlUpdateProvider = `${Server}/${linkUpdateProvider}`;


type CreateProvider = {
    name: string;
    tin: string;
    email: string;
    address: string;
    phone: number;
    password: string;
}

export const createProvider = async (providerData:CreateProvider) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(providerData),
      };
      const response = await fetch(urlCreateProvider, requestOptions);
      if (response.ok) {
        // El proveedor se creó correctamente
        return response.json();
      } else {
        // Ocurrió un error en la solicitud
        throw new Error('Error al crear el proveedor');
      }
    } catch (error) {
      console.error('Error al crear el proveedor:', error);
      throw error;
    }
  };

  export const updateProvider = async (providerData: CreateProvider) => {
    try {
      const token = localStorage.getItem('@Token'); // Obtener el token del localStorage
  
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}` // Incluir el token en el encabezado de la solicitud
        },
        body: JSON.stringify(providerData),
      };
      const response = await fetch(urlUpdateProvider, requestOptions);
      if (response.ok) {
        // El proveedor se actualizó correctamente
        return response.json();
      } else {
        // Ocurrió un error en la solicitud
        throw new Error('Error al actualizar el proveedor');
      }
    } catch (error) {
      console.error('Error al actualizar el proveedor:', error);
      throw error;
    }
  };
  
  
