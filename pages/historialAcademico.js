import AcademicHistory from "@/components/StudentHistory"
import Navbar from "@/components/Navbar"
import ProfileBT from "@/components/Profile_bt"
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