import CreateCourse from './CreateCourse';
import CourseCard from './CourseCard';
import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const CourseList = ({}) => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [search, setSearch] = useState('');
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};
    const supabase = useSupabaseClient();
    useEffect(() => {fetchCourses();}, []); 

    const fetchCourses = async () =>{ //GET Asignaturas
        try 
        {
       const { data, error } = await supabase
            .from('Asig_Test')
            .select('id, nombre, codigo_asignatura, creditos, id_area, Area_Academica(nombre)').order('codigo_asignatura');
        if (error) throw error;
        setCourses(data); 
        setFilteredCourses(data);
        } 
        catch (error) 
        {
        alert(error.message);
        }
    };

    const FilterData = (e) =>{ //Filtrar por nombre o codigo de asignatura
        const keyword = e.target.value.trimStart();
        if (keyword !== '') {
          const results = courses.filter((data) => {
            const r1 = data.nombre.toLowerCase().startsWith(keyword.toLowerCase()) 
            const r2 = data.codigo_asignatura.toLowerCase().startsWith(keyword.toLowerCase()) 
            if (r1 || r2){return true;}
            });
          setFilteredCourses(results);
        } else {
        setFilteredCourses(courses);
        }
        setSearch(keyword);
      };

    return <>
        <div className='m-6 bg-transparent flex flex-col gap-5 overflow-hidden '>
            <h1 className="text-[1.5rem] font-bold grow-0">Administrar Asignaturas</h1>
            <div>
                <h2 className="px-1 text-italics text-sm font-bold ">Buscar asignatura</h2>
                <input style = {BarStyle} type="search" value={search} onChange={FilterData} className="input mr-8" placeholder="Nombre o código de asignatura..." />
                <Popup trigger={<button className="bg-purBlue text-white font-bold py-2 px-4 rounded ">Crear Asignatura</button>} closeOnDocumentClick={false} modal>
                {close => (
                    <div className="modal">
                        <CreateCourse/>
                        <button className="bg-red text-white font-bold px-4 mx-1 mb-2 rounded" onClick={close}>&times;</button>
                    </div>
                )}
                </Popup>
            </div>
            
            <div className="bg-boneWhite w-full rounded-sm h-1/2 max-h-1/2  overflow-hidden">
                <div className="flex flex-wrap gap-2 max-h-full">
                    {filteredCourses.map((course) => ( //Crear tarjetas de las asignaturas obtenidas
                        <CourseCard key = {course.id} course_id={course.id} name={course.nombre} code={course.codigo_asignatura} area={course.Area_Academica.nombre} area_id={course.id_area} credits={course.creditos} />
                    ))}
                </div>
            </div>

        </div>
    </>

}
export default CourseList