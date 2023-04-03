import AcademicHistory from "@/components/AcademicHistory/StudentHistory"
import Navbar from "@/components/General/Navbar"
import ProfileBT from "@/components/Profile/Profile_bt"
const HistorialAcademico = () => {

    return (
        <div className='pl-[260px] grid w-screen h-screen bg-boneWhite'>
            <Navbar />
            <ProfileBT />
            <AcademicHistory />
        </div>
    )

}

export default HistorialAcademico