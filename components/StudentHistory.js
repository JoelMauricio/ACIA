import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Event_Card from "./EventCard";
import Radial from "./Radial";

const AcademicHistory = () => {
    const section_format = 'bg-boneWhite shadow-md w-full rounded-sm h-1/2 max-h-1/2 px-4 py-2 overflow-hidden dark:bg-[#323232]'

    return <>
        <div className='h-auto m-6 bg-transparent flex flex-col gap-1'>
            <h2 className="text-[1.5rem] font-bold text-mainBlack dark:text-purBlue">Historial Académico </h2>
            <div className="w-full rounded-sm h-1/2 max-h-1/2 py-4 overflow-hidden">
                <div className="flex h-full gap-x-4 ">
                    <div className="h-full basis-1/2 shadow-md dark:bg-[#323232]"></div>
                    <Radial current={2} texto={"Indice Trimestral"} />
                    <Radial current={3.5} texto={"Indice General"} />
                </div>
            </div>
            <div className={section_format}>
                <span className="font-semibold text-[18px] dark:text-boneWhite">Reporte</span>
                <div className="flex w-full h-5/6 bg-grid mt-2 dark:bg-[#4B4A4A]">
                </div>
            </div>
        </div>
    </>
}

export default AcademicHistory;