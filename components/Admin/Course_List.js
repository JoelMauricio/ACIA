import AddCourse from '@/components/Admin/Course_AddCourse';
import { useState, useEffect } from "react";
import EditCourse from '@/components/Admin/Course_EditCourse';
import Edit_iconv2 from '@/public/edit_iconv2.svg'
import { fetchAll } from "@/components/hooks/fetchFile";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const CourseList = ({ }) => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [areas, setAreas] = useState([]);
    const [search, setSearch] = useState('');
    const { fetchCourses, fetchAreas } = fetchAll();

    useEffect(() => {
        fetchCourses().then((data) => {
            setCourses(data)
            setFilteredCourses(data)
        })

        fetchAreas().then((data) => {
            setAreas(data)
        })
    }, [])

    const FilterData = (e) => { //Filtrar por nombre o codigo de asignatura 
        const keyword = e.target.value.trimStart();
        if (keyword !== '') {
            const normalizedKeyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const results = courses.filter((data) => {
                const normalizedDataName = data.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                const normalizedDataCode = data.codigo_asignatura.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                return normalizedDataName.includes(normalizedKeyword.toLowerCase()) || normalizedDataCode.startsWith(normalizedKeyword.toLowerCase());
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
                <h2 className="px-1 text-italics text-sm font-bold ">Buscar Asignatura</h2>
                <input className="input mr-8 shadow appearance-none border-2 border-mainBlack rounded-md w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" value={search} onChange={FilterData} placeholder="Nombre o código de asignatura..." />
                <Popup trigger={<button className="bg-purBlue text-white font-bold py-2 px-4 rounded ">Crear Asignatura</button>} closeOnDocumentClick={false} modal contentStyle={{ background: 'transparent', border: 'none' }} >
                    {close => (
                        <div className="modal h-full w-full bg-white2 dark:bg-darkBD2 p-4 rounded-lg">
                            <AddCourse areaOptions={areas} close={close} />
                        </div>
                    )}
                </Popup>
            </div>

            {/*Crear tarjetas de las asignaturas obtenidas*/}
            <div className="bg-transparent w-full rounded-sm max-h-fit overflow-auto pr-2 ">
                <div className="flex flex-wrap gap-2 max-h-full">
                    {filteredCourses.map((course, key) => (
                        <div key={key} className="bg-white2 dark:bg-darkBD2 rounded-md grid grid-flow-col justify-between min-h-[45px] h-[90px] w-full shadow-[rgba(35,_37,_40,_0.18)_0px_3px_8px] py-2">
                            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                                <span className="ml-4 text-purBlue max-w-[100px] min-w-[100px]">{course.Area_Academica.nombre}</span>
                                <div className="w-[2px] h-[60%] bg-slate-300 justify-end mx-2" />
                                <span>{course.codigo_asignatura} - {course.nombre}</span>
                            </div>

                            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                                <div className="w-[2px] h-[60%] bg-slate-300" />
                                <Popup trigger={<button className="w-[30px] h-[30px]"> <Edit_iconv2 className="h-full w-full fill-red fill-" /></button>} closeOnDocumentClick={false} modal contentStyle={{ background: 'transparent', border: 'none' }}>
                                    {close => (
                                        <div className="modal h-full w-full bg-white2 dark:bg-darkBD2 p-4 rounded-lg">
                                            <EditCourse key={course.id_asignatura} course_id={course.id_asignatura} name={course.nombre} area_id={course.id_area} code={course.codigo_asignatura} credits={course.creditos} areaOptions={areas} close={close} />
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>

}
export default CourseList