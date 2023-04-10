import AcademicHistory from "@/components/AcademicHistory/StudentHistory"
import { useAuth } from '@/components/hooks/loginData';
import Navbar from "@/components/General/Navbar"
import ProfileBT from "@/components/Profile/Profile_bt"
import NotFoundPage from "@/pages/_error"

const HistorialAcademico = () => {
    const { useCheckAuth, useProfileData } = useAuth()
    const profile = useProfileData()
    useCheckAuth();

    return (
        <>
            {profile?.id_rol === 2 ? (<div className='pl-[260px] grid w-screen h-screen bg-boneWhite dark:bg-darkBG'>
                <Navbar />
                <ProfileBT />
                <AcademicHistory />
            </div>) : (<NotFoundPage />)}
        </>
    )

}

export default HistorialAcademico