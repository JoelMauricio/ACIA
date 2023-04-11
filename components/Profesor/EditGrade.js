import { Formik, Field, Form } from 'formik';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import * as yup from 'yup';


const EditGrade = ({ sel_id, sec_code, cCode, cName, sName, sGrade, close }) => {
  const supabase = useSupabaseClient()
  const label_format = "block tracking-wide text-gray-700 text-sm font-bold mb-2 "
  const field_format = "appearance-none block w-full bg-white2 dark:bg-darkGrid text-mainBlack border dark:text-grid border-gray-200 dark:border-grid rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 max-h-[75px] "
  const lockedField_format = "appearance-none block w-full bg-white2 dark:bg-darkGrid text-slate-500 border dark:text-gray border-slate-500 dark:border-gray rounded py-3 px-3 leading-tight focus:outline-none max-h-[75px]"
  const section_format = "flex flex-wrap w-full lg:w-1/2 mb-2 px-2"
  const error_format = "mt-0.5 text-xs text-red"
  
  return (
    <Formik
      initialValues={{
        grade : sGrade,
      }}
      validationSchema={validateSchema} //Esquema de validación
      onSubmit={async (values) => {
        if (confirm('¿Desea guardar los cambios?'))  
        console.log(values)
        {
          try {      //Actualizar calificación en la base de datos
            const { error } = await supabase
                .from('Selecciones')
                .update(
                {
                  calificacion : values.grade
                })
                .eq('id_seleccion', sel_id);

            if (error) throw error;
            alert("Calficación actualizada exitosamente.");
            window.location.reload(false);
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
            <h1 className="text-xl text-purBlue mb-3" >Calificar Estudiante</h1>
            <h2 className="text-base">Datos </h2>
          </div>
          <div className="flex flex-wrap w-full py-2">
            
            <div className={section_format}>
                <label className={label_format} htmlFor="course">Sección</label>
                <Field className={lockedField_format} id="course" name="course" value={cCode + "-" + sec_code  + " - " + cName}/>
            </div>

            <div className={section_format}>
                <label className={label_format} htmlFor="student">Estudiante</label>
                <Field className={lockedField_format} id="student" name="student" value={sName}/>
            </div>

            <div className={section_format}>
              <label className={label_format} htmlFor="grade">Calificación </label>
              <Field className={field_format} id="grade" name="grade" placeholder="Calificación..." />
              {errors.grade && touched.grade ? (<p className={error_format}> {errors.grade} </p>) : <p className='w-full h-[18px]'></p>} {/*Presentar error en pantalla*/}
            </div>
          </div>

          <div className="flex items-center justify-between lg:justify-end lg:gap-4 py-2 px-2">
            <button className="bg-purBlue text-white font-bold py-2  rounded  w-[12rem] min-h-[45px] min-w-[150px] max-w-[250px]" type="submit">Guardar</button>
            <button className="bg-red text-white font-bold  py-2 rounded min-h-[45px] w-[12rem] min-w-[150px] max-w-[250px]" type = "button" onClick={close}>Cancelar</button>
          </div>
        </Form>
      )}
    </Formik>
  )
};

const validateSchema = yup.object().shape({
    grade: yup.number('¡Introduzca un númro entre 0 y 100!').integer('¡Introduzca un númro entre 0 y 100!').positive('¡Introduzca un númro entre 0 y 100!')
    .min(0,'¡Introduzca un númro entre 0 y 100!').max(100, '¡Introduzca un númro entre 0 y 100!').required('¡Campo requerido!')
});


export default EditGrade;