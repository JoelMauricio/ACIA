import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Event_Card from "./EventCard";
import Radial from "../AcademicHistory/Radial";
import { useAuth } from "../hooks/loginData";

const Main = () => {
    const supabase = useSupabaseClient();
    const session = useSession();
    const [events, setEvents] = useState([
        {
            "title": "Se acerca la fecha de pago",
            "desciption": 'La fecha del pago es *fecha*, recuerda pagar a tiempo.'
        },
        {
            "title": "Se acerca la fecha de pago",
            "desciption": 'La fecha del pago es *fecha*, recuerda pagar a tiempo.'
        },
        {
            "title": "Se acerca la fecha de pago",
            "desciption": 'La fecha del pago es *fecha*, recuerda pagar a tiempo.'
        },
        {
            "title": "Se acerca la fecha de pago",
            "desciption": 'La fecha del pago es *fecha*, recuerda pagar a tiempo.'
        },
        {
            "title": "Se acerca la fecha de pago",
            "desciption": 'La fecha del pago es *fecha*, recuerda pagar a tiempo.'
        },
        {
            "title": "Se acerca la fecha de pago",
            "desciption": 'La fecha del pago es *fecha*, recuerda pagar a tiempo.'
        }
    ]);

    const { useProfileData } = useAuth()
    const section_format = '"bg-boneWhite shadow-md w-full rounded-sm h-1/2 max-h-1/2 p-4 overflow-hidden first:h-fit dark:bg-darkBD2'

    const profile = useProfileData();

    return <>
        <div className='h-auto m-6 bg-transparent flex flex-col gap-4'>
            <h2 className="text-[1.5rem] font-bold">Bienvenido de vuelta <span className="text-purBlue">{profile?.nombre ? (profile?.nombre) : ('Nombre Usuario')}</span></h2>
            <div className="flex flex-col w-full h-full gap-4">
                {profile?.id_rol === 2 ? (
                    <div className="flex w-full h-[250px] gap-x-4">
                        <div className="grid h-full basis-1/2 shadow-md justify-center content-center gap-2 rounded-md dark:bg-darkBD2">
                        </div>
                        <Radial current={3.8} texto={"Indice Trimestral"} />
                        <Radial current={3.5} texto={"Indice General"} />
                    </div>
                ) : (<></>)}
                <div className={section_format}>
                    <span className="font-semibold text-[18px]">Proximos Eventos...</span>
                    <div className="flex flex-wrap ">
                        {events.map((event, index) => (
                            <Event_Card key={index} title={event.title} description={event.desciption} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Main;