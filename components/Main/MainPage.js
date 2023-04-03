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
    const section_format = '"bg-boneWhite shadow-md w-full rounded-sm h-1/2 max-h-1/2 p-4 overflow-hidden'

    const profile = useProfileData();

    return <>
        <div className='h-auto m-6 bg-transparent flex flex-col gap-1'>
            <h2 className="text-[1.5rem] font-bold">Bienvenido de vuelta <span className="text-purBlue">{profile?.nombre ? (profile?.nombre) : ('Nombre Usuario')}</span></h2>
            <div className={section_format}>
                <div className="flex flex-wrap h-full">
                    <Radial current={3.80} texto='Indice Trimestral' />
                    <Radial current={3.90} texto='Indice General' />
                </div>
            </div>
            <div className={section_format}>
                <span className="font-semibold text-[18px]">Proximos Eventos...</span>
                <div className="flex flex-wrap ">
                    {events.map((event, index) => (
                        <Event_Card key={index} title={event.title} description={event.desciption} />
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default Main;