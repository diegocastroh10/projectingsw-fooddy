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
    <main className="min-h-screen items-center justify-between p-1">
      <div>
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
          <Form>
            <div>
            <label htmlFor="title">Nombre</label>
            <Field
              id="title"
              name="title"
              placeholder="Nombre del producto"
            />
            </div>
            <div>
            <label htmlFor="description">Descripción</label>
            <Field
              id="description"
              name="description"
              placeholder="Descripción del producto"
            />
            </div>
            <div>
            <label htmlFor="currency">Divisa</label>
            <Field
              id="currency"
              name="currency"
              placeholder="Tipo de moneda"
            />
            </div>
            <div>
            <label htmlFor="unitCost">Precio</label>
            <Field
              id="unitCost"
              name="unitCost"
              placeholder="Costo unitario"
            />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </main>
  )
}