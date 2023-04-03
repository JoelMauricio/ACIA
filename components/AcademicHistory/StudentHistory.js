import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Event_Card from "../Main/EventCard";
import Radial from "./Radial";

const AcademicHistory = () => {
    const section_format = 'bg-boneWhite shadow-md w-full rounded-sm h-2/3 px-4 py-2 overflow-hidden'

    return <>
        <div className='h-auto m-6 bg-transparent flex flex-col gap-1'>
            <h2 className="text-[1.5rem] font-bold text-mainBlack">Historial Académico </h2>
            <div className="flex flex-col w-full h-full gap-4">
                <div className="w-full rounded-sm h-fit py-4 overflow-hidden">
                    <div className="flex w-full h-[250px] gap-x-4 ">
                        <div className="grid h-full basis-1/2 shadow-md justify-center content-center gap-2 rounded-md">
                            <h2 className="font-semibold">Reporte del Historial Académico</h2>
                            <input type="text" className="border-mainBlack border-2 rounded-sm"></input>
                            <button className="bg-blue text-boneWhite rounded-sm">Generar Reporte</button>
                        </div>
                        <Radial current={3.8} texto={"Indice Trimestral"} />
                        <Radial current={3.5} texto={"Indice General"} />
                    </div>
                </div>
                <div className={section_format}>
                    <div className="h-10 w-full">
                        <span className="font-semibold text-[18px]">Reporte</span>
                    </div>
                    <div className="h-full overflow-hidden overflow-y-auto px-2">
                        <div className="flex w-full h-full bg-grid">
                            {/* Agregar data grid view para los datos del registro de historial académico */}
                        </div>
                        <div className="h-14 w-full bg-transparent" /> {/* just to get the space */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AcademicHistory;