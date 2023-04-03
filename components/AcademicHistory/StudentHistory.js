import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Event_Card from "../Main/EventCard";
import Radial from "./Radial";

const AcademicHistory = () => {
    const section_format = 'bg-boneWhite shadow-md w-full rounded-sm h-1/2 max-h-1/2 px-4 py-2 overflow-hidden '

    return <>
        <div className='h-auto m-6 bg-transparent flex flex-col gap-1'>
            <h2 className="text-[1.5rem] font-bold text-mainBlack">Historial Académico </h2>
            <div className="w-full rounded-sm h-1/2 max-h-1/2 py-4 overflow-hidden">
                <div className="flex h-full gap-x-4 ">
                    <div className="h-full basis-1/2 shadow-md"></div>
                    <Radial current={3.8} texto={"Indice Trimestral"} />
                    <Radial current={3.5} texto={"Indice General"} />
                </div>
            </div>
            <div className={section_format}>
                <span className="font-semibold text-[18px]">Reporte</span>
                <div className="h-full overflow-hidden overflow-y-auto px-2">
                    <div className="flex w-full h-full bg-grid mt-2">
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AcademicHistory;