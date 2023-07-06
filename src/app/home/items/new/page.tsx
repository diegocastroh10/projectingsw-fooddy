import LayoutSidebar from '@fooddy/components/LayoutSidebar';
import Items from '@fooddy/components/Items';

const NewProducts = () => {
  // Define los valores iniciales del formulario
//   const initialValues = {
//     title: '',
//     description: '',
//     currency: '',
//     price: 0,
//   };

  return (
    <LayoutSidebar>
            <div className="w-full flex justify-center items-center min-h-screen p-6 bg-gray-100">
                <div className="max-w-2xl w-full border p-6 ">
                    <h1 className="text-xl font-semibold text-center">Agregar producto</h1>
                    <Items />
                </div>
            </div>
      </LayoutSidebar>
  );
};


export default NewProducts;



// import LayoutSidebar from "@fooddy/components/LayoutSidebar";

// export default function Page() {

//     return (
//         <LayoutSidebar>
//             <div>Crear Producto</div>
//         </LayoutSidebar>
//     );
// }