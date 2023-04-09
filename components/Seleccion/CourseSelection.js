// import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
// import Event_Card from "../Main/EventCard";
// import Radial from "../AcademicHistory/Radial";
import SearchBar from "@/components/SearchBar";
import { fetchSignatures } from "../hooks/fetchSignature";
import Image from "next/image";
import Edit_icon from '@/public/edit_icon.svg'


const SelectionPage = () => {
    const [signatures, setSignatures] = useState([])
    const { fetchSelectionSignatures } = fetchSignatures()
    const section_format = 'bg-white2 shadow-[rgba(0,0,0,0.22)_0px_3px_8px] w-full rounded-sm h-1/2 px-4 py-2 overflow-hidden dark:bg-darkBD2'
    const headerClass = "px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
    const bodyClass = "border text-center px-2 whitespace-nowrap border-x-2 border-gray-200"

    useEffect(() => {
        if (signatures.length < 1) {
            fetchSelectionSignatures().then((data) => {
                setSignatures(data)
            })
        }
        else {
            setSignatures([])
        }

    }, [])

    const handleSignature = (index) => {
        const data = [...signatures]
        data[index].check = true

        setSignatures(data);
        console.log(signatures)
    };


    return <>
        <div className='h-auto m-6 bg-transparent flex flex-col gap-1 '>
            <h2 className="text-[1.5rem] font-bold text-mainBlac">Seleccion trimestre <span className="text-purBlue">período</span> </h2>
            <div className="flex flex-col w-full h-full gap-4">
                <div className={section_format}>
                    <div className="rounded-md grid grid-flow-col justify-between h-15 w-full content-center py-1">
                        <span className="font-semibold text-[18px] self-center">Mi seleccion:</span>
                        <button className="bg-purBlue text-boneWhite px-3 rounded-md w-[15rem] h-full min-h-[45px]">Guardar Selección</button>
                    </div>
                    <div className="h-full overflow-hidden overflow-y-auto px-2 mt-2">
                        <div className="flex  flex-col w-full h-full bg-grid overflow-y-auto dark:bg-darkGrid">
                            <table className="table-auto w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className={headerClass}>Codigo de Asignatura</th>
                                        <th className={headerClass}>Número de créditos</th>
                                        <th className={headerClass}>Nombre</th>
                                        <th className={headerClass}>Maestro</th>
                                        <th className={headerClass}>Cupos</th>
                                        <th className={headerClass}>Horario</th>
                                        <th className={headerClass}>Aula</th>
                                        <th className={headerClass}>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {signatures?.filter((dato) => dato.check).map((dato, index) => (
                                        <tr key={index}>
                                            <td className={bodyClass}>{dato?.codigo_asignatura}</td>
                                            <td className={bodyClass}>{dato?.creditos}</td>
                                            <td className={bodyClass}>{dato?.nombre_asignatura}</td>
                                            <td className={bodyClass}>{dato?.profesor}</td>
                                            <td className={bodyClass}>{dato?.cupos}</td>
                                            <td className={bodyClass}>{dato?.horario}</td>
                                            <td className={bodyClass}>{dato?.aula}</td>
                                            <td className={bodyClass}><button className="m-auto"><Edit_icon className="w-[30px] h-[30px] stroke-red" /></button></td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                        <div className="h-12 w-full bg-transparent" /> {/* just to get the space */}
                    </div>
                </div>
                <div className={section_format}>
                    <div className="grid grid-flow-col h-15 w-full justify-between content-center py-1">
                        <span className="font-semibold text-[18px] self-center">Asignaturas:</span>
                        <SearchBar text={"Buscar Asignatura"} className='h-full' />
                    </div>
                    <div className="h-full overflow-hidden overflow-y-auto px-2 mt-2">
                        <div className="w-full h-full bg-grid dark:bg-darkGrid">



                            <table className="table-auto w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className={headerClass}>Codigo de Asignatura</th>
                                        <th className={headerClass}>Número de créditos</th>
                                        <th className={headerClass}>Nombre</th>
                                        <th className={headerClass}>Maestro</th>
                                        <th className={headerClass}>Cupos</th>
                                        <th className={headerClass}>Horario</th>
                                        <th className={headerClass}>Aula</th>
                                        <th className={headerClass}>Seleccion</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {signatures?.map((dato, index) => (
                                        <tr key={index}>
                                            <td className={bodyClass}>{dato?.codigo_asignatura}</td>
                                            <td className={bodyClass}>{dato?.creditos}</td>
                                            <td className={bodyClass}>{dato?.nombre_asignatura}</td>
                                            <td className={bodyClass}>{dato?.profesor}</td>
                                            <td className={bodyClass}>{dato?.cupos}</td>
                                            <td className={bodyClass}>{dato?.horario}</td>
                                            <td className={bodyClass}>{dato?.aula}</td>
                                            <td className={bodyClass}><input type="radio" checked={dato?.checked} onChange={() => handleSignature(index)}></input></td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        </div>
                        <div className="h-12 w-full bg-transparent" /> {/* just to get the space */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SelectionPage;