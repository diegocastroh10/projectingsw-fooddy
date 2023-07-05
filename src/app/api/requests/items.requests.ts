const Server = "https://api.fooddy.cl";

//REQUEST AUTHENTICATE PROVIDER
const linkAuthenticateProvider = "providers/authenticate";
const urlAuthenticateProvider = `${Server}/${linkAuthenticateProvider}`;

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