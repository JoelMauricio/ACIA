import { Formik, Field, Form } from 'formik';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import * as yup from 'yup';

const CourseInfo_Form = ({key}) => {
  const supabase = useSupabaseClient();

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
      if(confirm('¿Desea guardar los cambios?')) //Guardar registro en la base de datos 
      { 
        try
        {
         const {error} = await supabase
         .from('Asig_Test')
         .insert([
         {nombre: values.courseName, codigo_asignatura: values.courseCode, creditos : values.courseCredits, id_area : values.courseArea }])
 
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
      <Form className="w-full max-w-lg" >
      <div className= " mb-3 font-bold px-2 ">
        <h1>Información de la asignatura</h1>
      </div>

      <div className="flex flex-wrap mb-3 md:w-1/2 px-2 ">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="courseName">Nombre </label>
        <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="courseName" name="courseName" placeholder="Asignatura..." />
      </div>

      <div className="flex flex-wrap md:w-1/2 mb-3 px-2">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="courseCode">Código</label>
        <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="courseCode" name="courseCode" placeholder="ABC123..." />
      </div>

      <div className="flex flex-wrap md:w-1/2 mb-3 px-2">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="courseCredits">No. Créditos</label>
        <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="courseCredits" name ="courseCredits" placeholder="No. créditos..." />
      </div>

      <div className="flex flex-wrap w-full md:w-1/2 mb-6 px-2">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="courseArea">Area Académica</label>
          <Field className= "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="courseArea" name="courseArea"as="select">
          <option value="0"></option>
          <option value="1">Ingeniería</option>
          <option value="2">Economía y negocios</option>
          <option value="3">Ciencias de la Salud</option>
          <option value="4">Ciencias Basicas y Ambientales</option>
          <option value="5">Ciencias Sociales y Humanidades</option>
          </Field>
      </div>

      <button className= "bg-purBlue text-white font-bold py-2 px-6 rounded" type="submit">Guardar</button>
      </Form>
    </Formik>
  )
};

//Validacion de entradas
const validateSchema = yup.object().shape({
  courseName: yup.string().trim().required(),
  courseCode : yup.string().length(6),
  courseCredits : yup.number().positive().integer().lessThan(7).required(),
  courseArea : yup.string().required(),
});

export default CourseInfo_Form;