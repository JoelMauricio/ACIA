import CourseInfo_Form from './CourseInfo_Form';
import AdminCourseCard from './Course_Card_Admin';
import SearchBar from '../General/SearchBar';
import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from 'next/router';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const UserList = ({ name, email }) => {
    const [courses, setCourses] = useState([]);
    const supabase = useSupabaseClient();
    useEffect(() => {fetchCourses();}, []); 

    const fetchCourses = async () =>{
        try 
        {
        let { data, error } = await supabase
            .from('Asig_Test')
            .select('id, nombre, codigo_asignatura, Area_Academica(nombre)');
        if (error) throw error;
        console.log(data);
        setCourses(data);
        } 
        catch (error) 
        {
        alert(error.message);
        }
    };

    return <>
        <div className='m-6 bg-transparent flex flex-col gap-5 overflow-hidden '>

            <h2 className="text-[1.5rem] font-bold grow-0">Administrar Asignaturas</h2>

            <div className='space-x-3'>
                <span className="text-black font-bold">Buscar Asignatura </span>
                <SearchBar />
                <span />
                <Popup trigger={<button className="bg-purBlue text-white font-bold py-2 px-4 rounded">Crear Asignatura</button>} closeOnDocumentClick={false} modal>
                {close => (
                    <div className="modal">
                        <button className="bg-red text-white font-bold px-4 mx-1 mb-2 rounded" onClick={close}>&times;</button>
                        <CourseInfo_Form/>
                    </div>
                )}
                </Popup>
            </div>

            <div className="bg-boneWhite w-full rounded-sm h-1/2 max-h-1/2  overflow-hidden">
                <div className="flex flex-wrap gap-2 max-h-full">
                    {courses.map((course, index) => (
                        <AdminCourseCard key={course.id} name={course.nombre} code = {course.codigo_asignatura} area={course.Area_Academica.nombre}/>
                    ))}
                </div>
            </div>

        </div>
    </>

}
export default UserList