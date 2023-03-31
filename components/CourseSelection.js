import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Event_Card from "./EventCard";
import Radial from "./Radial";

const SelectionPage = () => {
    const section_format = 'bg-boneWhite shadow-md w-full rounded-sm h-1/2 px-4 py-2 overflow-hidden'

    return <>
        <div className='h-auto m-6 bg-transparent flex flex-col gap-1 '>
            <h2 className="text-[1.5rem] font-bold text-mainBlac">Seleccion trimestre <span className="text-purBlue">periodo</span> </h2>
            <div className={section_format}>
                <div className="rounded-md grid grid-flow-col justify-between">
                    <span className="font-semibold text-[18px]">Mi seleccion:</span>
                    <button className="bg-purBlue text-boneWhite px-3 rounded-md">Guardar Seleccion</button>
                </div>
                <div className="h-full overflow-hidden overflow-y-auto px-2">

                    <div className="flex  flex-col w-full h-full bg-grid mt-2  overflow-y-auto">

                    </div>
                </div>
            </div>
            <div className={section_format}>
                <span className="font-semibold text-[18px]">Asignaturas:</span>
                <div className="h-full overflow-hidden overflow-y-auto px-2">
                    <div className="flex w-full h-full bg-grid mt-2 ">
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SelectionPage;