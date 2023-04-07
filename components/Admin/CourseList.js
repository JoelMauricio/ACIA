import CreateCourse from './CreateCourse';
import CourseCard from './CourseCard';
import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const CourseList = ({ }) => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [search, setSearch] = useState('');
    const supabase = useSupabaseClient();
    useEffect(() => { fetchCourses(); }, []);

    const fetchCourses = async () => { //GET Asignaturas
        try {
            const { data, error } = await supabase
                .from('Asignatura')
                .select('id_asignatura, nombre, codigo_asignatura, creditos, id_area, Area_Academica(nombre)').order('codigo_asignatura');
            if (error) throw error;
            setCourses(data);
            setFilteredCourses(data);
        }
        catch (error) {
            alert(error.message);
        }
    };

    const FilterData = (e) => { //Filtrar por nombre o codigo de asignatura 
        const keyword = e.target.value.trimStart();
        if (keyword !== '') {
            const normalizedKeyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const results = courses.filter((data) => {
                const normalizedDataName = data.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                const normalizedDataCode = data.codigo_asignatura.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                return normalizedDataName.startsWith(normalizedKeyword.toLowerCase()) || normalizedDataCode.startsWith(normalizedKeyword.toLowerCase());
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
                <input className="input mr-8 shadow appearance-none border-2 border-mainBlack rounded-md w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" value={search} onChange={FilterData} placeholder="Nombre o código de asignatura..." />
                <Popup trigger={<button className="bg-purBlue text-white font-bold py-2 px-4 rounded ">Crear Asignatura</button>} closeOnDocumentClick={false} modal>
                    {close => (
                        <div className="modal">
                            <CreateCourse />
                            <button className="bg-red text-white font-bold px-4 mx-1 mb-2 rounded" onClick={close}>&times;</button>
                        </div>
                    )}
                </Popup>
            </div>

            <div className="bg-transparent w-full rounded-sm max-h-fit overflow-auto pr-2 ">
                <div className="flex flex-wrap gap-2 max-h-full">
                    {filteredCourses.map((course) => ( //Crear tarjetas de las asignaturas obtenidas
                        <CourseCard key={course.id_asignatura} course_id={course.id_asignatura} name={course.nombre} code={course.codigo_asignatura} area={course.Area_Academica.nombre} area_id={course.id_area} credits={course.creditos} />
                    ))}
                </div>
            </div>

        </div>
    </>

}
export default CourseList