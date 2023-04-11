import { Formik, Field, Form } from 'formik';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import * as yup from 'yup';

const AddSection = ({ periodOptions, courseOptions, profOptions, croomOptions, close }) => {
  const supabase = useSupabaseClient()
  const label_format = "block tracking-wide text-gray-700 text-sm font-bold mb-2 "
  const field_format = "appearance-none block w-full bg-white2 dark:bg-darkGrid text-mainBlack border dark:text-grid border-gray-200 dark:border-grid rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 max-h-[75px] "
  const error_format = "mt-0.5 text-xs text-red"
  const section_format = "flex flex-wrap w-full lg:w-1/2 mb-2 px-2"

  return (
    <Formik
      initialValues={{
        secCode: '',
        secPeriod: '',
        secCourse: '',
        secProf: '',
        secRoom: '',
        secSeats: '',
        secTime: '',
      }}
      validationSchema={validateSchema} //Esquema de validación
      onSubmit={async (values) => {
        if (confirm('¿Desea guardar los cambios?'))
          console.log(values)
        {
          try {                         //Insertar seccion en la base de datos
            const { error } = await supabase
              .from('Seccion')
              .insert([
                {
                  id_periodo: values.secPeriod,
                  id_asignatura: values.secCourse,
                  id_profesor: values.secProf,
                  id_aula: values.secRoom,
                  codigo_seccion: values.secCode.toUpperCase(),
                  cupos: values.secSeats,
                  horario: values.secTime
                }])

            if (error) throw error;
            alert("Sección creada exitosamente.");
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
            <h1 className="text-xl text-purBlue mb-3" >Crear Seccion</h1>
            <h2 className="text-base">Datos de la seccion</h2>
          </div>
          <div className="flex flex-wrap w-full py-2">

            <div className={section_format}>
              <label className={label_format} htmlFor="secCode">No. de sección </label>
              <Field className={field_format} id="secCode" name="secCode" placeholder="No de seccion..." />
              {errors.secCode && touched.secCode ? (<p className={error_format}> {errors.secCode} </p>) : <p className='w-full h-[18px]'></p>} {/*Presentar error en pantalla*/}
            </div>

            <div className={section_format}>
              <label className={label_format} htmlFor="secSeats">Cupos</label>
              <Field className={field_format} id="secSeats" name="secSeats" placeholder="No. de cupos..." />
              {errors.secSeats && touched.secSeats ? (<p className={error_format}> {errors.secSeats} </p>) : <p className='w-full h-[18px]'></p>}
            </div>

            <div className={section_format}>
              <label className={label_format} htmlFor="secTime">Horario </label>
              <Field className={field_format} id="secTime" name="secTime" placeholder="Horario..." />
              {errors.secTime && touched.secTime ? (<p className={error_format}> {errors.secTime} </p>) : <p className='w-full h-[18px]'></p>} {/*Presentar error en pantalla*/}
            </div>

            <div className={section_format}>
              <label className={label_format} htmlFor="secRoom">Aula</label>
              <Field className={field_format} id="secRoom" name="secRoom" as="select">
                <option value="">Seleccione...</option>
                {croomOptions.map((room, index) => <option key={index} value={room.id_aula}>{room.nombre}</option>)} {/*Crear un elemento para cada opción*/}
              </Field>
              {errors.secRoom && touched.secRoom ? (<p className={error_format}> {errors.secRoom} </p>) : <p className='w-full h-[18px]'></p>}
            </div>

            <div className={section_format}>
              <label className={label_format} htmlFor="secCourse">Asignatura</label>
              <Field className={field_format} id="secCourse" name="secCourse" as="select">
                <option value="">Seleccione...</option>
                {courseOptions.map((course, index) => <option key={index} value={course.id_asignatura}>{course.codigo_asignatura} - {course.nombre}</option>)} {/*Crear un elemento para cada opción*/}
              </Field>
              {errors.secCourse && touched.secCourse ? (<p className={error_format}> {errors.secCourse} </p>) : <p className='w-full h-[18px]'></p>}
            </div>

            <div className={section_format}>
              <label className={label_format} htmlFor="secProf">Profesor</label>
              <Field className={field_format} id="secProf" name="secProf" as="select">
                <option value="">Seleccione...</option>
                {profOptions.map((prof, index) => <option key={index} value={prof.id_Persona}>{prof.nombre}</option>)} {/*Crear un elemento para cada opción*/}
              </Field>
              {errors.secProf && touched.secProf ? (<p className={error_format}> {errors.secProf} </p>) : <p className='w-full h-[18px]'></p>}
            </div>
          </div>

          <div className={section_format}>
            <label className={label_format} htmlFor="secPeriod">Periodo</label>
            <Field className={field_format} id="secPeriod" name="secPeriod" as="select">
              <option value="">Seleccione...</option>
              {periodOptions.map((period, index) => <option key={index} value={period.id_periodo}>{period.nombre}</option>)} {/*Crear un elemento para cada opción*/}
            </Field>
            {errors.secPeriod && touched.secPeriod ? (<p className={error_format}> {errors.secPeriod} </p>) : <p className='w-full h-[18px]'></p>}
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

//Esquema de validación de entradas
const validateSchema = yup.object().shape({
  secCode: yup.string().length(2, '¡Introduzca un número de dos dígitos (Ej: 01)!').required('¡Campo requerido!'),
  secPeriod: yup.string().required('¡Opción requerida!'),
  secCourse: yup.string().required('¡Opción requerida!'),
  secProf: yup.string().required('¡Opción requerida!'),
  secRoom: yup.string().required('¡Opción requerida!.'),
  secSeats: yup.string().required('¡Campo requerido!'),
  secTime: yup.string().trim().required('¡Campo requerido!'),
});

export default AddSection;