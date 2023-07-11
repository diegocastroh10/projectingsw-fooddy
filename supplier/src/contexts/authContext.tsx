import { createContext, useContext, useState, ReactNode } from "react";

type AuthMethods = {
  jwt: string;
  authLoad: () => void;
  authLogin: (token:string) => void;
  authLogout: () => void;
};

const DefaultAuthMethods: AuthMethods = {
  jwt: "",
  authLoad: () => {},
  authLogin: () => {},
  authLogout: () => {},
};

type AuthChildren = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthMethods>(DefaultAuthMethods);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthChildren) => {
  const [jwt, setJwt] = useState<string>("");

  const authLoad = async () => {
      try {
          const jwtStored = localStorage.getItem('@Token');
          if (jwtStored != null) {
              setJwt(jwtStored);
          }
          return;
      } catch (error) {
          return error;
      }
  };
  const authLogin = async (token:string) => {
      try {
          console.log("WANA STORE", token)
          setJwt(token);
          return;
      } catch (error) {
          return error;
      }
  };
  const authLogout = async () => {
      try {
          localStorage.removeItem('@Token');
          setJwt("");
          return
      }
      catch (error) {
          return error;
      }
  };

  const value = {
      jwt,
      authLoad,
      authLogin,
      authLogout
  };

  return (
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider>
  );
}