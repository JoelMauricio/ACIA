import Edit_icon from '../public/edit_icon.svg'
import Box_CourseInfo from './Box_CourseInfo';
import SearchBar from './SearchBar';
import CourseCard from './Profile/Course_Card';
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//Agregar función para recuper la data del usuario.

const UserList = ({ name, email }) => {

    const section_format = '"bg-boneWhite w-full rounded-sm h-1/2 max-h-1/2  overflow-hidden'

    const [courses, setUsers] = useState([
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
    ]);


    return <>
        <div className='m-6 bg-transparent flex flex-col gap-5 overflow-hidden'>

            <h2 className="text-[1.5rem] font-bold grow-0">Administrar Asignaturas</h2>

            <div className='space-x-3'>
                <span className="text-black font-bold">Buscar Asignatura </span>
                <SearchBar />
                <span />
                <Popup trigger={<button className="bg-purBlue text-white font-bold py-2 px-4 rounded">Crear Asignatura</button>} closeOnDocumentClick={false} modal>
                    <Box_CourseInfo />
                </Popup>
            </div>

            <div className={section_format}>
                <div className="flex flex-wrap gap-2 ">
                    {courses.map((course, index) => (
                        <CourseCard key={index} name={course.name} area={course.academic_area} />
                    ))}
                </div>
            </div>

        </div>



    </>


}


export default UserList