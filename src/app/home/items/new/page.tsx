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
      <h1>Agregar producto</h1>
      <Items/>
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