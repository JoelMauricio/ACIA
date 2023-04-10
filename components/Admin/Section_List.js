import { useState, useEffect } from "react";
import Edit_iconv2 from '../../public/edit_iconv2.svg'
import AddSection from "./Section_AddSection";
import EditSection from "./Section_EditSection";
import Popup from 'reactjs-popup';
import {fetchAll} from "../hooks/fetchFile";
import 'reactjs-popup/dist/index.css';

const SectionList = () => {
    const [sections, setSections] = useState([]);
    const [filteredSections, setFilteredSections] = useState([]);
    const [search, setSearch] = useState('');
    const [courses, setCourses] = useState([]);
    const [professors, setProfessors] = useState([]);
    const [classrooms, setClassrooms] = useState([]);
    const [periods, setPeriods] = useState([]);

    const {fetchSections, fetchCoursesTrim, fetchProfessors, fetchClassrooms, fetchPeriods } = fetchAll();


    useEffect(() => { 
        fetchSections().then((data) => {
            setSections(data)
            setFilteredSections(data)                                            
        })

        fetchCoursesTrim().then((data) => {
            setCourses(data)
        })

        fetchProfessors().then((data) => {
            setProfessors(data)
        })

        fetchClassrooms().then((data) => {
            setClassrooms(data)
        })

        fetchPeriods().then((data) => {
            setPeriods(data)
        })
    }, [])

    const handleChange= (e) => {
        const data = sections.filter(item => item.id_periodo == e.target.value)
        setFilteredSections(data)
      };

    const FilterData = (e) => { //Filtrar por nombre o codigo de asignatura
        const keyword = e.target.value.trimStart();
        if (keyword !== '') {
            const normalizedKeyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const results = sections.filter((data) => {
                const normalizedDataName = data.Asignatura.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                const normalizedDataCode = data.Asignatura.codigo_asignatura.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                return normalizedDataName.includes(normalizedKeyword.toLowerCase()) || normalizedDataCode.startsWith(normalizedKeyword.toLowerCase());
            });
            setFilteredSections(results);
        }
        else {
            setFilteredSections(sections);
        }
        setSearch(keyword);
    };

    return <>
        <div className='m-6 bg-transparent flex flex-col gap-5 overflow-hidden '>
            <h1 className="text-[1.5rem] font-bold grow-0">Administrar Secciones</h1> 
            <div>  {/*Mostrar únicamente las secciones pertenecientes al periodo seleccionado*/ }
                <label className="text-base font-bold" htmlFor="period-select">Seleccione un periodo </label>
                <select className="mr-8 shadow border-2 border-mainBlack rounded-md w-[11rem] py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin" id="period-select" 
                 onChange={ e => {handleChange(e)} }>
                {periods.map((period) => <option value={period.id_periodo}>{period.nombre}</option>)}
                </select> 
            </div>
        
            <div>
                <h2 className="px-1 text-italics text-sm font-bold ">Buscar Seccion</h2>
                <input className="input mr-8 shadow appearance-none border-2 border-mainBlack rounded-md w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" value={search} onChange={FilterData} placeholder="Nombre o código de asignatura..."/>
                <Popup trigger={<button className="bg-purBlue text-white font-bold py-2 px-4 rounded ">Crear Seccion</button>} closeOnDocumentClick={false} modal contentStyle={{ background: 'transparent', border: 'none' }}>
                    {close => (
                        <div className="modal h-full w-full bg-white2 dark:bg-darkBD2 p-4 rounded-lg">
                           <AddSection periodOptions={periods} courseOptions={courses} profOptions={professors} croomOptions={classrooms} close={close}/>
                        </div>
                    )}
                </Popup>
            </div>

            {/*Crear tarjetas de las secciones */}
            <div className="bg-transparent w-full rounded-sm max-h-fit overflow-auto">
                <div className="flex flex-wrap gap-2 max-h-full pr-2 overflow-y-auto overflow-hidden">
                    {filteredSections.map((section) => ( 
                        <div className="bg-white2 dark:bg-darkBD2 rounded-md grid grid-flow-col justify-between min-h-[45px] h-[90px] w-full min-w-[550px] shadow-[rgba(35,_37,_40,_0.18)_0px_3px_8px] py-2">
                        <div className="flex w-fit gap-4 text-[18px] items-center px-2">
                            <span className="ml-4 text-purBlue max-w-[100px] min-w-[100px]">{section.Asignatura.codigo_asignatura}-{section.codigo_seccion} </span>
                            <span className="text-purBlue">{section.Aula.nombre}</span>
                            <div className="w-[2px] h-[60%] bg-slate-300 justify-end mx-2" />  
                            <span>{section.Asignatura.nombre} - {section.Persona.nombre}</span>
                            
                        </div>
                        <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                            <div className="w-[2px] h-[30px] bg-slate-300" />
            
                            <Popup trigger={<button className="w-[30px] h-[30px]"> <Edit_iconv2 className="h-full w-full fill-red" /></button>} closeOnDocumentClick={false} modal contentStyle={{ background: 'transparent', border: 'none' }}>
                                {close => (
                                    <div className="modal h-full w-full bg-white2 dark:bg-darkBD2 p-4 rounded-lg">
                                        {<EditSection key = {section.id_seccion} sec_id = {section.id_seccion} code = {section.codigo_seccion} seats = {section.cupos} time = {section.horario} 
                                        cName = {section.Asignatura.nombre} cCode={section.Asignatura.codigo_asignatura} prof_id = {section.id_profesor} room_id = {section.id_aula} 
                                        period = {section.Periodo.nombre} profOptions = {professors} croomOptions = {classrooms} close={close} />}
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
export default SectionList