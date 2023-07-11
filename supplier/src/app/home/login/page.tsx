import LayoutSidebar from '@fooddy/components/LayoutSidebar';
import LoginForm from '@fooddy/components/LoginForm';

const NewProducts = () => {

  return (
    <LayoutSidebar>
      <div className="w-full flex justify-center items-center min-h-screen p-6 bg-gray-100">
          <div className="max-w-2xl w-full border p-6 ">
              <h1 className="text-xl font-semibold text-center">Iniciar sesión</h1>
              <LoginForm />
          </div>
      </div>
    </LayoutSidebar>
  );
};


export default NewProducts;