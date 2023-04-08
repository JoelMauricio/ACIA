import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Event_Card from "../Main/EventCard";
import Radial from "./Radial";
import SearchBar from "../SearchBar";
import { useAuth } from "../hooks/loginData";
import { fetchAll } from "../hooks/fetchFile";

const AcademicHistory = () => {

    const headerClass = "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
    const bodyClass = "border text-center px-2 whitespace-nowrap"
    const { fetchGeneralIndex, fetchStudentPeriod, getPeriods, fetchReport } = fetchAll();
    const [generalIndex, setGeneralIndex] = useState()
    const [periodIndex, setPeriodIndex] = useState()
    const [options, setOption] = useState([]);
    const [reportData, setReportData] = useState([]);
    const [selectedOption, setSelectedOption] = useState();


    useEffect(() => {
        fetchGeneralIndex().then((data) => {
            var indice = 0
            data?.map((item, index) => {
                indice = item.calificacion + indice
            })
            setGeneralIndex((indice / data?.length) / 25)
        })

        fetchStudentPeriod(selectedOption).then((data) => {
            var indice = 0
            data?.map((item, index) => {
                indice = item.calificacion + indice
            })
            setPeriodIndex((indice / data?.length) / 25)
        })
    }, [generalIndex, periodIndex, reportData])

    useEffect(() => {
        getPeriods().then((data) => {
            setOption(data)
        })
    }, [options])

    const handleSelectedOption = (e) => {
        setSelectedOption(e.target.value)
    }

    const handelReport = () => {

        fetchReport(selectedOption).then((data) => {
            setReportData(data)
        }).then(() => {
            console.log(reportData)
        })

    }


    const section_format = 'bg-boneWhite shadow-md w-full rounded-sm h-1/2 px-4 py-2 overflow-hidden dark:bg-darkBD2'

    return <>
        <div className='h-auto m-6 bg-transparent flex flex-col gap-1'>
            <h2 className="text-[1.5rem] font-bold text-mainBlack dark:text-boneWhite">Historial Académico </h2>
            <div className="flex flex-col w-full h-full gap-4">
                <div className="w-full rounded-sm h-fit py-4 overflow-hidden">
                    <div className="flex w-full h-[250px] gap-x-4 ">
                        <div className="grid h-full basis-1/2 shadow-md justify-center content-center gap-2 rounded-md dark:bg-darkBD2">
                            <h2 className="font-semibold">Reporte del Historial Académico</h2>
                            <select className="p-2 rounded-[8px] m-2" onChange={(e) => handleSelectedOption(e)}>
                                <option value="">Seleccione un período</option>
                                {options?.map((option, index) => (
                                    <option key={index} className="text-[14px] font-light from-inherit text-mainBlack dark:text-boneWhite" value={option.Periodo.id_periodo} >
                                        {option.Periodo.fecha_inicio + " |    | " + option.Periodo.fecha_fin}
                                    </option>
                                ))}
                            </select>
                            <button className="bg-blue text-boneWhite rounded-md h-min-[45px] h-10" onClick={(e) => handelReport(e)}>Generar Reporte</button>
                        </div>
                        <Radial current={periodIndex} texto={"Indice Trimestral"} />
                        <Radial current={generalIndex} texto={"Indice General"} />
                    </div>
                </div>
                <div className={section_format}>
                    <div className="h-10 w-full">
                        <span className="font-semibold text-[18px]">Reporte</span>
                    </div>
                    <div className="h-full overflow-hidden overflow-y-auto px-2">
                        <div className=" w-full h-full bg-grid dark:bg-darkGrid">
                            {/* Agregar data grid view para los datos del registro de historial académico */}
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className={headerClass}>Codigo de Asignatura</th>
                                        <th className={headerClass}>Número de créditos</th>
                                        <th className={headerClass}>Nombre</th>
                                        <th className={headerClass}>Calificación</th>
                                        <th className={headerClass}>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reportData?.map((dato, index) => (
                                        <tr key={index}>
                                            <td className={bodyClass}>{dato.Asignatura.codigo_asignatura}</td>
                                            <td className={bodyClass}>{dato.Asignatura.creditos}</td>
                                            <td className={bodyClass}>{dato.Asignatura.nombre}</td>
                                            <td className={bodyClass}>{dato.calificacion}</td>
                                            <td className={bodyClass}>{dato.estado}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        </div>
                        <div className="h-14 w-full bg-transparent" /> {/* just to get the space */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AcademicHistory;