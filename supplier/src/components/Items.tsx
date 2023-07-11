'use client';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { CreateItem } from '@fooddy/app/api/requests/items.requests';
import { useRouter } from 'next/navigation';
// import { Item } from '@fooddy/app/interfaces/item.interface';
// interface Values {
//   email: string;
//   password: string;
// }

interface Item2 {
  "title": string;
  "description": string;
  "currency": string;
  "unitCost": number;
}

const token= localStorage.getItem('@Token')!


export default function Item() {
    const router=useRouter();
  return (
        <Formik
          initialValues={{
            title: '',
            description: '',
            currency: '',
            unitCost: 0,
          }}
          onSubmit={(
            values: Item2,
            { setSubmitting }: FormikHelpers<Item2>
          ) => {
            setTimeout(async () => {
              console.log(values)
              let response = await CreateItem(values);
              alert(JSON.stringify(response, null, 2));
              setSubmitting(false);
              router.push('/home/items/');
            }, 500);
          }}
        >
          <Form className='space-y-6'>
            <div className="flex flex-col gap-1">
              <label htmlFor="title">Nombre</label>
              <Field
                id="title"
                name="title"
                type="text"
                className="h-11 px-4 border rounded-md"
                placeholder="Nombre del producto"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="description">Descripción</label>
              <Field
                id="description"
                name="description"
                type="text"
                placeholder="Descripción del producto"
                className="h-11 px-4 border rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1">
            <label htmlFor="currency">Divisa</label>
              <Field
                id="currency"
                name="currency"
                type="text"
                placeholder="Tipo de moneda"
                className="h-11 px-4 border rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="unitCost">Precio</label>
              <Field
                id="unitCost"
                name="unitCost"
                placeholder="Costo unitario"
                className="h-11 px-4 border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button 
                className="h-11 px-6 bg-black text-white rounded-md"
                type='submit'
              >
                Registrar
              </button>
            </div>
          </Form>
        </Formik>
  );
};