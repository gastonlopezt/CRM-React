import React from 'react'
import {Formik, Form, Field} from 'formik'

const Formulario = () => {


  const handleSubmit = (valores) => {
    console.log(valores)
  }

  return (
    <div className="bg-white mt-10 px-5 py-10 rouded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          notas: "",
        }}
        onSubmit={ (values) => {
          handleSubmit(values)
        }}
      >
        {() => (
          <Form className="mt-10 ">
            <div className="mb-4 ">
              <label className="text-gray-800 " htmlFor="nombre">
                Nombre
              </label>
              <Field
                id="nombre"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-200"
                placeholder="nombre cliente"
                name="nombre"
              />
            </div>
            <div className="mb-4 ">
              <label className="text-gray-800 " htmlFor="empresa">
                Empresa
              </label>
              <Field
                id="empresa"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-200"
                placeholder="Empresa del cliente"
                name="empresa"
              />
            </div>
            <div className="mb-4 ">
              <label className="text-gray-800 " htmlFor="email">
                E-mail
              </label>
              <Field
                id="email"
                type="email"
                className="mt-2 block w-full p-3 bg-gray-200"
                placeholder="Email del cliente"
                name="email"
              />
            </div>
            <div className="mb-4 ">
              <label className="text-gray-800 " htmlFor="telefono">
                Teléfono
              </label>
              <Field
                id="telefono"
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-200"
                placeholder="Teléfono del cliente"
                name="telefono"
              />
            </div>
            <div className="mb-4 ">
              <label className="text-gray-800 " htmlFor="notas">
                Notas
              </label>
              <Field
                as="textarea"
                id="notas"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-200 h-40"
                placeholder="Notas del cliente"
                name="notas"
              />
            </div>
            <input
              type="submit"
              value="Agregar Cliente"
              className="mt-5 w-full p-3 bg-blue-800 text-white uppercase font-bold text-lg"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Formulario
