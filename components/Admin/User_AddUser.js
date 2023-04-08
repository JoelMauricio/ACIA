import { Formik, Field, Form} from 'formik';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import * as yup from 'yup';

const AddUser = ({}) => {
  const supabase = useSupabaseClient()
  const label_format = "block tracking-wide text-gray-700 text-sm font-bold mb-2"
  const field_format = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  const error_format = "mt-0.5 font-semibold text-xs text-red"
  const section_format = "flex flex-wrap md:w-1/2 mb-2 px-2"

  return(
    <Formik
      initialValues={{
        uName: '',
        uEmail: '',
        uDate : '',
        uCity: '',
        uCountry: '',
        uRole : '',
      }}
      validationSchema ={validateSchema} //Esquema de validación
      onSubmit={async (values) => {
      if(confirm('¿Desea guardar los cambios?')) //UPSERT en la base de
      { 
        try
        {
         const {error} = await supabase
         .from('Persona')
         .insert([
         {nombre : values.uName, fecha_nac: values.uDate, correo: values.uEmail, id_pais: values.uCountry, id_ciudad: 2, id_rol: values.uRole }])
       
         if (error) throw error;
         window.location.reload(false);
         alert("Usuario creada exitosamente.");
         console.log(JSON.stringify(values, null, 2));
        }
        catch (error) 
        {
         alert(error.message);
        }
      }
      }}
    >
      {({ errors, touched }) => (
        <Form className="max-w-xl" >
          <div className= " mb-4 font-bold px-2 ">
            <h1 className="text-xl text-purBlue mb-3" >Crear Usuario</h1>
            <h2 className = "text-base">Datos del usuario</h2>
          </div>

          <div className={section_format}>
            <label className={label_format} htmlFor="uName">Nombre </label>
            <Field className= {field_format} id="uName" name="uName" placeholder="Nombre y apellidos..." />
            {errors.uName && touched.uName ? (<p className={error_format}> {errors.uName} </p>) : null}
          </div>
    
          <div className={section_format}>
            <label className={label_format} htmlFor="uEmail">Correo Electrónico</label>
            <Field className={field_format} id="uEmail" name="uEmail" placeholder="someone@example.com"/>
            {errors.uEmail && touched.uEmail ? ( <p className={error_format}> {errors.uEmail} </p> ) : null}
          </div>

          <div className={section_format}>
            <label className={label_format} htmlFor="uDate">Fecha de nacimmiento</label>
            <Field className={field_format} id="uDate" name="uDate" type="date"/>
          </div>
    
          <div className={section_format}>
            <label className={label_format} htmlFor="uCity">Ciudad</label>
            <Field className={field_format} id="uCity" name="uCity" placeholder="Ciudad..."/>
            {errors.uCity && touched.uCity ? ( <p className={error_format}> {errors.uCity} </p> ) : null}
          </div>
    
          <div className={section_format}>
            <label className={label_format} htmlFor="uCountry">País</label>
              <Field className={field_format} id="uCountry" name ="uCountry" as="select">
              <option value=""></option>
              <option value="1">Estados  Unidos</option>
              <option value="2">China</option>
              <option value="3">Japón</option>
              <option value="4">Tailandia</option>
              <option value="5">Indonesia</option>
              <option value="6">Perú</option>
              <option value="7">República Dominicana</option>
              <option value="8">Cuba</option>
              <option value="9">Ecuador</option>
              <option value="10">Alaska</option>
              <option value="11">Chile</option>
              <option value="12">España</option>
              <option value="13">Colombia</option>
              <option value="14">México</option>
              </Field>
              {errors.uCountry && touched.uCountry ? (<p className={error_format}> {errors.uCountry} </p>) : null}
          </div>
    
          <div className={section_format}>
            <label className={label_format} htmlFor="uRole">Rol</label>
              <Field className={field_format} id="uRole" name="uRole"as="select">
              <option value=""></option>
              <option value="1">Administrador</option>
              <option value="2">Estudiante</option>
              <option value="3">Profesor</option>
              </Field>
              {errors.uRole && touched.uRole ? (<p className={error_format}> {errors.uRole} </p>) : null}
          </div>
          <button className= "bg-purBlue text-white font-bold py-2 px-8 mb-2 rounded mt-6" type="submit">Guardar</button>
        </Form>
      )}
  </Formik>
  )
};

//Validacion de entradas
const validateSchema = yup.object().shape({
  uName: yup.string().trim().matches(/^[A-Za-zÁÉÍÓÚáéíóúüñÑ()\- ]+$/, 'Introduzca un nombre utilizando letras y guiones (-).').required('¡Campo requerido!'),
  uEmail : yup.string().email('Email incorrecto').required('¡Campo requerido!'),
  uCity: yup.string().trim().matches(/^[A-Za-zÁÉÍÓÚáéíóúüñÑ()\- ]+$/, 'Introduzca un nombre utilizando letras y guiones (-).').required('¡Campo requerido!'),
  uCountry : yup.string().required('Seleccione una opción.'),
  uRole : yup.string().required('Seleccione una opción.'),
});

export default AddUser;
