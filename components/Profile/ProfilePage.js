import Event_Card from "../Main/EventCard";
import Avatar from "./ProfileAvatar";
import CourseCard from "./Course_Card";
import { useAuth } from "../hooks/loginData";
import { useState } from "react";
import { useRouter } from 'next/router';


const MyProfile = () => {

    const section_format = 'bg-boneWhite last:shadow-lg w-full rounded-sm h-1/2 max-h-1/2 p-4 '
    const profile = useAuth().useProfileData()
    const router = useRouter()

    const [courses, setCourses] = useState([
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
    ]);

    return <>
        <div className='m-6 bg-transparent flex flex-col gap-1 overflow-hidden'>
            <div className="flex justify-between">
                <h2 className="text-[1.5rem] font-bold grow-0">Perfil</h2>
                <button className='items-center text-[18px] font-semibold text-gray mx-4' onClick={() => router.back()}>Volver</button>
            </div>
            <div className='bg-boneWhite last:shadow-lg w-full rounded-sm h-[250px] p-4 '>
                <div className="flex h-full">
                    <div className="w-2/5 grid justify-center content-center">
                        <Avatar />
                    </div>
                    <div className="flex flex-wrap text-mainBlack text-[16px] font-semibold w-3/5 p-4 content-center">
                        <div className="flex flex-col basis-1/2 content-center p-2">
                            <span>Nombre de Usuario</span>
                            <span className="text-purBlue">{profile?.nombre ? (profile?.nombre) : ('Username')}</span>
                        </div>
                        <div className="flex flex-col basis-1/2 content-center p-2">
                            <span>Correo</span>
                            <span className="text-purBlue">{profile?.correo ? (profile?.correo) : ('Mail')}</span>
                        </div>
                        <div className="flex flex-col basis-1/2 content-center p-2">
                            <span>País</span>
                            <span className="text-purBlue">{profile?.id_pais ? (profile?.id_pais) : ('País')}</span>
                        </div>
                        <div className="flex flex-col basis-1/2 content-center p-2">
                            <span>Ciudad</span>
                            <span className="text-purBlue">{profile?.id_ciudad ? (profile?.id_ciudad) : ('Ciudad')}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid justify-center content-center">
                <a className="text-blue font-bold py-4" onClick={null}>Solicitar cambio de contraseña</a>
            </div>
            {profile?.id_rol === 2 ? (
                <div className={section_format}>
                    <span className="font-semibold text-[18px]">Mis asignaturas</span>
                    <div className="h-full overflow-hidden overflow-y-auto">
                        <div className="flex flex-wrap gap-2 p-2">
                            {courses.map((course, index) => (
                                <CourseCard key={index} name={course.name} area={course.academic_area} />
                            ))}
                            <div className="w-full" />
                        </div>
                    </div>
                </div>) : (<></>)}
        </div >
    </>
}

export default MyProfile;