const Server = "http://localhost:3000";

//REQUEST AUTHENTICATE PROVIDER
const linkAuthenticateProvider = "providers/authenticate";
const urlAuthenticateProvider = `${Server}/${linkAuthenticateProvider}`;


const linkCreateItem = "items/create";
const urlCreateItem = `${Server}/${linkCreateItem}`;

type AuthenticateProvider = {
    email: string;
    password: string;
}

export const Authenticate = async (data: AuthenticateProvider) => {
    try {
        const email = data.email;
        const password = data.password;

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        const res = await fetch(urlAuthenticateProvider, requestOptions);
        return await res.json();
    } catch (error) {
        return console.log(error);
    }
}

type CreateItem = {
    title: string;
    description: string;
    currency: string;
    unitCost: number;
}


export const CreateItem = async (data: CreateItem) => {
    const token = localStorage.getItem('@Token'); // Obtener el token del localStorage

  try {
      const title = data.title;
      const description = data.description;
      const currency = data.currency;
      const unitCost = data.unitCost;

      const requestOptions: RequestInit = {
          method: 'POST',
          headers:{Authorization:`JWT ${token}`,'Content-Type': 'application/json' },
          body: JSON.stringify({
              title: title,
              description: description,
              currency: currency,
              unitCost: unitCost,
          })
      };
      const res = await fetch(urlCreateItem, requestOptions);
      return await res.json();
  } catch (error) {
      return console.log(error);
  }
}