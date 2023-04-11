import { Formik, Field, Form } from 'formik';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from 'react';
import * as yup from 'yup';

const AddUser = ({ cityOptions, countryOptions, close }) => {
  const supabase = useSupabaseClient()
  const label_format = "block tracking-wide text-gray-700 text-sm font-bold mb-2 "
  const field_format = "appearance-none block w-full bg-white2 dark:bg-darkGrid text-mainBlack border dark:text-grid border-gray-200 dark:border-grid rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 max-h-[75px] "
  const error_format = "mt-0.5 text-xs text-red"
  const section_format = "flex flex-wrap w-full lg:w-1/2 mb-2 px-2"
  const [filteredCities, setFilteredCities] = useState([])

  //Mostrar únicamente las ciudades pertenecientes al país selecccionado
  const handleCountry = (e) => {
    const data = cityOptions.filter(item => item.id_pais == e.target.value)
    setFilteredCities(data)
  };

  return (
    <Formik
      initialValues={{
        uName: '',
        uEmail: '',
        uDate: '',
        uCity: '',
        uCountry: '',
        uRole: '',
      }}
      validationSchema={validateSchema} //Esquema de validación
      onSubmit={async (values) => {
        if (confirm('¿Desea guardar los cambios?')) {
          try {
            const { error } = await supabase
              .from('Persona')
              .insert(              //Insertar usuario en la base de datos
                {
                  nombre: values.uName,
                  fecha_nac: values.uDate,
                  correo: values.uEmail,
                  id_pais: values.uCountry,
                  id_ciudad: values.uCity,
                  id_rol: values.uRole
                })

            if (error) throw error;
            alert("Usuario creado exitosamente.");
            window.location.reload(false);
          }
          catch (error) {
            alert(error.message);
          }

        }
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="w-full" validateOnChange="true">
          <div className=" mb-4 font-bold px-2 ">
            <h1 className="text-xl text-purBlue mb-3" >Crear Usuario</h1>
            <h2 className="text-base">Datos del usuario</h2>
          </div>
          <div className="flex flex-wrap w-full py-2">

            <div className={section_format}>
              <label className={label_format} htmlFor="uName">Nombre </label>
              <Field className={field_format} id="uName" name="uName" placeholder="Nombre y apellidos..." />
              {errors.uName && touched.uName ? (<p className={error_format}> {errors.uName} </p>) : <p className='w-full h-[18px]'></p>}
            </div>

            <div className={section_format}>
              <label className={label_format} htmlFor="uEmail">Correo Electrónico</label>
              <Field className={field_format} id="uEmail" name="uEmail" placeholder="someone@example.com" />
              {errors.uEmail && touched.uEmail ? (<p className={error_format}> {errors.uEmail} </p>) : <p className='w-full h-[18px]'></p>}
            </div>

            <div className={section_format}>
              <label className={label_format} htmlFor="uDate">Fecha de nacimmiento</label>
              <Field className={field_format} id="uDate" name="uDate" type="date" />
              {errors.uDate && touched.uDate ? (<p className={error_format}> {errors.uDate} </p>) : <p className='w-full h-[18px]'></p>}
            </div>

            <div className={section_format}>
              <label className={label_format} htmlFor="uCountry">País</label>
              <Field className={field_format} id="uCountry" name="uCountry" as="select" min="1900-01-01" onChange={e => { handleCountry(e); setFieldValue("uCountry", e.target.value) }} >
                <option value="">Seleccione...</option>
                {countryOptions.map((country, index) => <option key={index} value={country.id_pais}>{country.nombre}</option>)} {/*Crear un elemento para cada opción*/}
              </Field>
              {errors.uCountry && touched.uCountry ? (<p className={error_format}> {errors.uCountry} </p>) : <p className='w-full h-[18px]'></p>}
            </div>

            <div className={section_format}>
              <label className={label_format} htmlFor="uCity">Ciudad</label>
              <Field className={field_format} id="uCity" name="uCity" as="select">
                <option value="">Seleccione...</option>
                {filteredCities.map((city, index) => <option key={index} value={city.id_ciudad}>{city.nombre}</option>)} {/*Crear un elemento para cada opción*/}
              </Field>
              {errors.uCity && touched.uCity ? (<p className={error_format}> {errors.uCity} </p>) : <p className='w-full h-[18px]'></p>}
            </div>

            <div className={section_format}>
              <label className={label_format} htmlFor="uRole">Rol</label>
              <Field className={field_format} id="uRole" name="uRole" as="select">
                <option value="">Seleccione...</option>
                <option value="1">Administrador</option>
                <option value="2">Estudiante</option>
                <option value="3">Profesor</option>
              </Field>
              {errors.uRole && touched.uRole ? (<p className={error_format}> {errors.uRole} </p>) : <p className='w-full h-[18px]'></p>}
            </div>
          </div>
          <div className="flex items-center justify-between lg:justify-end lg:gap-4 py-2 px-2">
            <button className="bg-purBlue text-white font-bold py-2  rounded  w-[12rem] min-h-[45px] min-w-[150px] max-w-[250px]" type="submit">Guardar</button>
            <button className="bg-red text-white font-bold  py-2 rounded min-h-[45px] w-[12rem] min-w-[150px] max-w-[250px]" type="button" onClick={close}>Cancelar</button>
          </div>
        </Form>
      )}
    </Formik>
  )
};

//Validacion de entradas
const validateSchema = yup.object().shape({
  uName: yup.string().trim().matches(/^[A-Za-zÁÉÍÓÚáéíóúüñÑ()\- ]+$/, 'Introduzca un nombre utilizando letras y guiones (-).').required('¡Campo requerido!'),
  uEmail: yup.string().email('Correo electrónico incorrecto').required('¡Campo requerido!'),
  uDate: yup.date().required('¡Seleccione una fecha!'),
  uCity: yup.string().required('¡Seleccione una ciudad!'),
  uCountry: yup.string().required('¡Seleccione un país!'),
  uRole: yup.string().required('¡Seleccione un rol!'),
});

export default AddUser;
