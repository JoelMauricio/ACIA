import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Event_Card from "./EventCard";
import Radial from "./Radial";

const Main = () => {
    const [profile, setProfile] = useState(null)
    const supabase = useSupabaseClient();
    const session = useSession();


    const section_format = '"bg-boneWhite shadow-md w-full rounded-sm h-1/2 max-h-1/2 p-4 overflow-hidden'
    useEffect(() => {
        supabase.from('Persona')
            .select()
            .eq('auth_id', session.user.id)
            .then(result => {
                if (result.data.length > 0) {
                    setProfile(result.data[0])
                }
            })
            .catch(console.error)
    }, []);

    return <>
        <div className='h-auto m-6 bg-transparent flex flex-col gap-1'>
            <h2 className="text-[1.5rem] font-bold">Bienvenido de vuelta <span className="text-purBlue">{profile?.nombre ? (profile?.nombre) : ('Nombre Usuario')}</span></h2>
            <div className={section_format}>
                <div className="flex flex-wrap h-full">
                    <Radial current={3.98} texto='Indice Trimestral' />
                    <Radial current={3.98} texto='Indice General' />
                </div>
            </div>
            <div className={section_format}>
                <span className="font-semibold text-[18px]">Proximos Eventos...</span>
                <div className="flex flex-wrap ">
                    <Event_Card />
                    <Event_Card />
                    <Event_Card />
                    <Event_Card />
                    <Event_Card />
                    <Event_Card />
                </div>
            </div>
        </div>
    </>
}

export default Main;