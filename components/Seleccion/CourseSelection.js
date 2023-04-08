// import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
// import { useEffect, useState } from "react";
// import Event_Card from "../Main/EventCard";
// import Radial from "../AcademicHistory/Radial";
import SearchBar from "../SearchBar";

const SelectionPage = () => {
    const section_format = 'bg-white2 shadow-[rgba(0,_0,_0,_0.18)_0px_3px_8px] w-full rounded-sm h-1/2 px-4 py-2 overflow-hidden dark:bg-darkBD2'

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
                            {/* Agregar data grid view para los datos de la selección */}
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
                        <div className="flex w-full h-full bg-grid dark:bg-darkGrid">
                            {/* Agregar data grid view para los datos de las asignaturas */}
                        </div>
                        <div className="h-12 w-full bg-transparent" /> {/* just to get the space */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SelectionPage;