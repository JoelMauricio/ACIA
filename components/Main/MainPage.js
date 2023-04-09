import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Event_Card from "./EventCard";
import Radial from "../AcademicHistory/Radial";
import { useAuth } from "../hooks/loginData";
import { fetchAll } from "../hooks/fetchFile";
import { number } from "yup";

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
    const { fetchGeneralIndex, fetchStudentPeriod, fetchStudentData } = fetchAll();
    const [generalIndex, setGeneralIndex] = useState(0)
    const [periodIndex, setPeriodIndex] = useState(0)
    const [student_info, setStudentInfo] = useState({})

    useEffect(() => {

        fetchGeneralIndex().then((data) => {
            var indice = 0
            data?.map((item, index) => {
                indice = item.calificacion + indice
            })
            setGeneralIndex((indice / data?.length) / 25)
        })

        fetchStudentPeriod().then((data) => {
            var indice = 0
            data?.map((item, index) => {
                indice = item.calificacion + indice
            })
            setPeriodIndex((indice / data?.length) / 25)
        })

        if (generalIndex.isNaN || periodIndex.isNaN) {
            setGeneralIndex(0)
            setPeriodIndex(0)
        }

        fetchStudentData().then((data) => {
            setStudentInfo(data);
        })

    }, [generalIndex, periodIndex, student_info])

    const { useProfileData } = useAuth()
    const section_format = '"bg-boneWhite shadow-md w-full rounded-sm h-1/2 max-h-1/2 p-4 overflow-hidden first:h-fit dark:bg-darkBD2'

    const profile = useProfileData();


    return <>
        <div className='h-auto m-6 bg-transparent flex flex-col gap-4'>
            <h2 className="text-[1.5rem] font-bold">Bienvenido de vuelta <span className="text-purBlue">{profile?.nombre ? (profile?.nombre) : ('Nombre Usuario')}</span></h2>
            <div className="flex flex-col w-full h-full gap-4">
                {profile?.id_rol === 2 ? (
                    <div className="flex flex-col w-full h-fit gap-4">
                        <div className="flex w-full md:max-h-[250px] gap-x-4 content-center ">
                            <div className="grid h-full basis-1/2 shadow-md px-2 py-4 content-center justify-center gap-1 rounded-md dark:bg-darkBD2">
                                <div className="flex flex-wrap text-mainBlack text-lg font-semibold w-full md:w-3/5 p-4 dark:text-boneWhite">
                                    <div className="flex flex-col w-full md:w-1/2">
                                        <span>Carrera</span>
                                        <span className="text-purBlue">{student_info?.Programa ? (student_info?.Programa?.nombre) : ('Carrera')}</span>
                                    </div>
                                    <div className="flex flex-col w-full md:w-1/2">
                                        <span>Area Académica</span>
                                        <span className="text-purBlue">{profile?.correo ? (profile?.correo) : ('Mail')}</span>
                                    </div>
                                    <div className="flex flex-col w-full md:w-1/2">
                                        <span>País</span>
                                        <span className="text-purBlue">{profile?.id_pais ? (profile?.Pais?.nombre) : ('País')}</span>
                                    </div>
                                    <div className="flex flex-col w-full md:w-1/2">
                                        <span>Ciudad</span>
                                        <span className="text-purBlue">{profile?.id_ciudad ? (profile?.Ciudad?.nombre) : ('Ciudad')}</span>
                                    </div>
                                </div>
                            </div>
                            <Radial current={4} texto={"Total Créditos"} />
                            <Radial current={4} texto={"Total Cursadas"} />
                            <Radial max={4} current={periodIndex} texto={"Indice Trimestral"} />
                            <Radial max={4} current={generalIndex} texto={"Indice General"} />
                        </div>
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