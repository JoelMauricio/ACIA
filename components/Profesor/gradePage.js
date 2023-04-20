import Edit_iconv2 from '@/public/edit_iconv2.svg'
import { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { fetchAll } from "../hooks/fetchFile";
import EditGrade from './EditGrade';

const GradePage = () => {
    const section_format = '"bg-boneWhite w-full rounded-sm h-2/3 overflow-hidden'
    const [sections, setSections] = useState([]);
    const [students, setStudents] = useState([]);
    const [sectionStudents, setSectionStudents] = useState([]);
    const [period, setPeriod] = useState('')
    const { fetchProfessorSections, fetchProfessorStudents } = fetchAll();

    useEffect(() => {
        fetchProfessorSections().then((data) => {
            setSections(data)
            setPeriod(data[0].Periodo.nombre)
        })

        fetchProfessorStudents().then((data) => {
            setStudents(data)
        })

    }, [])

    const handleChange = (e) => {
        const data = students.filter(item => item.id_seccion == e.target.value)
        setSectionStudents(data)
    };

    return <>
        <div className='m-6 bg-transparent flex flex-col gap-4 overflow-hidden' >
            <div className="flex">
                <span className="text-[1.5rem] font-bold grow-0">Gestionar Calificaciones</span>
                <span className="font-semibold text-[18px] md:text-[24px] text-purBlue ml-3"> {period}</span>
            </div>
            <div>
                <div className="flex h-full gap-4">
                    <div className="grid grid-flow-col h-full w-full justify-between content-center">
                        <div className="flex flex-col text-mainBlack text-[16px] font-semibold gap-4 h-full content-center dark:text-boneWhite">
                            <div className="flex gap-4 items-center flex-wrap">
                                <label className="text-base font-bold" htmlFor="period-select">Sección: </label>
                                <select className="mr-8 shadow border-2 border-mainBlack rounded-md w-[20rem] py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin" id="period-select" onChange={e => { handleChange(e) }}>
                                    <option value="">Seleccione...</option>
                                    {sections.map((section, index) => <option key={index} value={section.id_seccion}>{section.Asignatura.codigo_asignatura}-{section.codigo_seccion}-{section.Asignatura.nombre}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/*Crear tarjetas de los estudiantes inscritos en la sección */}
            <div className="bg-transparent w-full rounded-sm max-h-fit overflow-auto">
                <div className="flex flex-wrap gap-2 max-h-full pr-2 overflow-y-auto overflow-hidden">
                    {sectionStudents.map((student, index) => (
                        <div key={index} className="bg-white2 dark:bg-darkBD2 rounded-md grid grid-flow-col justify-between min-h-[45px] h-[90px] w-full min-w-[550px] shadow-[rgba(35,_37,_40,_0.18)_0px_3px_8px] py-2">
                            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                                <span className="ml-4 text-purBlue max-w-[100px] min-w-[100px]">{student.Persona.nombre} </span>
                                <div className="w-[2px] h-[60%] bg-slate-300 justify-end mx-2" />
                                <span>{student.Persona.correo}</span>
                            </div>
                            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                                <div>
                                    <span className="">Calificación: </span>
                                    <span className="text-purBlue underline decoration-2">{student.calificacion} </span>
                                </div>
                                <div className="w-[2px] h-[30px] bg-slate-300" />
                                <Popup trigger={<button className="w-[30px] h-[30px]"> <Edit_iconv2 className="h-full w-full fill-red" /> </button>} closeOnDocumentClick={false} modal contentStyle={{ background: 'transparent', border: 'none' }}>
                                    {close => (
                                        <div className="modal h-full w-full bg-white2 dark:bg-darkBD2 p-4 rounded-lg">
                                            <EditGrade sel_id={student.id_seleccion} sec_code={student.Seccion.codigo_seccion} cCode={student.Asignatura.codigo_asignatura} cName={student.Asignatura.nombre} sName={student.Persona.nombre} sGrade={student.calificacion} close={close} />
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full" />
        </div>
    </>
}

export default GradePage