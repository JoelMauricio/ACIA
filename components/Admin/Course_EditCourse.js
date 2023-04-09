import { Formik, Field, Form } from 'formik';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import * as yup from 'yup';

const EditCourse = ({course_id, name, code, credits, area_id, optionsData}) => {
  const supabase = useSupabaseClient()
  const label_format = "block tracking-wide text-gray-700 text-sm font-bold mb-2 "
  const field_format = "appearance-none block w-full bg-white2 dark:bg-darkGrid text-mainBlack border dark:text-grid border-gray-200 dark:border-grid rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 max-h-[75px] "
  const error_format = "mt-0.5 font-semibold text-xs text-red"
  const section_format = "flex flex-wrap md:w-1/2 mb-2 px-2"
  console.log("Card Data");
  console.log(optionsData);


  return (
    <Formik
      initialValues={{
        courseName: name,
        courseCode: code,
        courseCredits: credits,
        courseArea: area_id,
      }}
      validationSchema={validateSchema} //Esquema de validación
      onSubmit={async (values) => {
        if (confirm('¿Desea guardar los cambios?')) //UPDATE en la base de datos
        {
          try {
            const { error } = await supabase
              .from('Asignatura')
              .update({ nombre: values.courseName, codigo_asignatura: values.courseCode.toUpperCase(), creditos: values.courseCredits, id_area: values.courseArea })
              .eq('id_asignatura', course_id)

            if (error) throw error;
            window.location.reload(false);
            alert("Asignatura modificada exitosamente.");
            console.log(JSON.stringify(values, null, 2));
          }
          catch (error) {
            alert(error.message);
          }
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className="w-full" >
          <div className=" mb-4 font-bold px-2 ">
            <h1 className="text-xl text-purBlue mb-3" >Modificar Asignatura</h1>
            <h2 className="text-base">Datos de la asignatura</h2>
          </div>
          <div className="flex flex-wrap w-full py-2">

          <div className={section_format}>
            <label className={label_format} htmlFor="courseName">Nombre </label>
            <Field className= {field_format} id="courseName" name="courseName" placeholder="Asignatura..." />
            {errors.courseName && touched.courseName ? (<p className={error_format}> {errors.courseName} </p>) : null} {/*Presentar error en pantalla*/}
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
                {optionsData.map((area) => <option value={area.id_area}>{area.nombre_area}</option>)} {/*Crear un elemento para cada opción*/}
              </Field>
              {errors.courseArea && touched.courseArea ? (<p className={error_format}> {errors.courseArea} </p>) : <p className='w-full h-[18px]'></p>}
            </div>
          </div>
          <div className="flex items-center justify-between lg:justify-end lg:gap-4 py-2 px-2">

            <button className="bg-purBlue text-white font-bold py-2  rounded  w-[12rem] min-h-[45px] min-w-[150px] max-w-[250px]" type="submit">Guardar</button>
            <button className="bg-red text-white font-bold  py-2 rounded min-h-[45px] w-[12rem] min-w-[150px] max-w-[250px]" onClick={close}>Cancelar</button>
          </div>
        </Form>
      )}
  </Formik>
  
  )
};

//Validacion de entradas
const validateSchema = yup.object().shape({
  courseName: yup.string().trim().matches(/^[A-Za-z0-9ÁÉÍÓÚáéíóúñÑü()\- ]+$/, 'Introduzca un nombre utilizando letras y guiones (-).').required('¡Campo requerido!'),
  courseCode: yup.string().length(6, '¡Introduzca un codigo de seis digitos!').matches(/^[a-zA-Z]{3}[0-9]{3}$/, '¡Codigo incorrecto!').required('!Campo requerido!'),
  courseCredits: yup.string().required('Seleccione una opción.'),
  courseArea: yup.string().required('Seleccione una opción.'),
});

export default EditCourse;