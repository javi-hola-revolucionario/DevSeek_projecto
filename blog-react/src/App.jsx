import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useForm } from "react-hook-form";


function App() {

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Formulario enviado correctamente");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Registro
        </h1>

        <div className="mb-4">
          <label className="block mb-2">Nombre</label>

          <input
            className="w-full border rounded p-2"
            {...register("nombre", {
              required: "El nombre es obligatorio",
            })}
          />

          {errors.nombre && (
            <p className="text-red-500 text-sm mt-1">
              {errors.nombre.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Correo</label>

          <input
            type="email"
            className="w-full border rounded p-2"
            {...register("correo", {
              required: "El correo es obligatorio",
            })}
          />

          {errors.correo && (
            <p className="text-red-500 text-sm mt-1">
              {errors.correo.message}
            </p>
          )}
        </div>

        <button
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;