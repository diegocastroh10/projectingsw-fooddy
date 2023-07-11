'use client';
import { useContext, useEffect } from 'react';
import HomeComponent from '@fooddy/components/HomeComponent';
import HomePage from '@fooddy/app/home/page';
import { AuthProvider, AuthContext } from '@fooddy/contexts/authContext';

const Navigator = () => {

  const { jwt, authLoad } = useContext(AuthContext);

  useEffect( () => {
      (async () => {
        const storedToken = localStorage.getItem('@Token');
        console.log("JWT EN CONTEXT:", jwt);
        console.log("JWT EN STORAGE:", storedToken);
        authLoad();
        if(storedToken != ""){
        }
      })();
  }, [jwt])

  return(
    <>
      { !(jwt !== "") ? <HomeComponent/> : <HomePage/> }
    </>
  );
}

const App = () => {
  return (
    <AuthProvider>
      <Navigator/>
    </AuthProvider>
  );
}

export default App;