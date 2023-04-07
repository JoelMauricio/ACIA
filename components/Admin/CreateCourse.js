import { Formik, Field, Form, FormikContext } from 'formik';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import * as yup from 'yup';

const CreateCourse = ({}) => {
  const supabase = useSupabaseClient()
  const label_format = "block tracking-wide text-gray-700 text-sm font-bold mb-2"
  const field_format = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  const error_format = "mt-0.5 font-semibold text-xs text-red"
  const section_format = "flex flex-wrap md:w-1/2 mb-2 px-2"

  return(
    <Formik
      initialValues={{
        courseName: '',
        courseCode: '',
        courseCredits: '',
        courseArea: '',
      }}
      validationSchema ={validateSchema} //Esquema de validación
      onSubmit={async (values) => {
      if(confirm('¿Desea guardar los cambios?')) //UPSERT en la base de
      { 
        try
        {
         const {error} = await supabase
         .from('Asig_Test')
         .insert([
         {nombre: values.courseName, codigo_asignatura: values.courseCode, creditos: values.courseCredits, id_area: values.courseArea }])
       
         if (error) throw error;
         window.location.reload(false);
         alert("Asignatura creada exitosamente.");
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
            <h1 className="text-xl text-purBlue mb-3" >Crear Asignatura</h1>
            <h2 className = "text-base">Datos de la asignatura</h2>
          </div>

          <div className={section_format}>
            <label className={label_format} htmlFor="courseName">Nombre </label>
            <Field className= {field_format} id="courseName" name="courseName" placeholder="Asignatura..." />
            {errors.courseName && touched.courseName ? (<p className={error_format}> {errors.courseName} </p>) : null}
          </div>
    
          <div className={section_format}>
            <label className={label_format} htmlFor="courseCode">Código</label>
            <Field className={field_format} id="courseCode" name="courseCode" placeholder="ASG123..."/>
            {errors.courseCode && touched.courseCode ? ( <p className={error_format}> {errors.courseCode} </p> ) : null}
          </div>
    
          <div className={section_format}>
            <label className={label_format} htmlFor="courseCredits">No. Créditos</label>
              <Field className={field_format} id="courseCredits" name ="courseCredits" as="select">
              <option value=""></option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              </Field>
              {errors.courseCredits && touched.courseCredits ? (<p className={error_format}> {errors.courseCredits} </p>) : null}
          </div>
    
          <div className={section_format}>
            <label className={label_format} htmlFor="courseArea">Area Académica</label>
              <Field className={field_format} id="courseArea" name="courseArea"as="select">
              <option value=""></option>
              <option value="1">Ingenierías</option>
              <option value="2">Economía y negocios</option>
              <option value="3">Ciencias de la Salud</option>
              <option value="4">Ciencias Basicas y Ambientales</option>
              <option value="5">Ciencias Sociales y Humanidades</option>
              </Field>
              {errors.courseArea && touched.courseArea ? (<p className={error_format}> {errors.courseArea} </p>) : null}
          </div>
          <button className= "bg-purBlue text-white font-bold py-2 px-8 mb-2 rounded mt-6" type="submit">Guardar</button>
        </Form>
      )}
  </Formik>
  )
};

//Validacion de entradas
const validateSchema = yup.object().shape({
  courseName: yup.string().trim().matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ()\- ]+$/, 'Introduzca un nombre utilizando letras y guiones (-).').required('¡Campo requerido!'),
  courseCode : yup.string().length(6,'¡Introduzca un codigo de seis digitos!').matches(/^[a-zA-Z]{3}[0-9]{3}$/, '¡Codigo incorrecto!').required('!Campo requerido!'),
  courseCredits : yup.string().required('Seleccione una opción.'),
  courseArea : yup.string().required('Seleccione una opción.'),
});

export default CreateCourse;
