import AcademicHistory from "@/components/StudentHistory"
import Navbar from "@/components/Navbar"

const HistorialAcademico = () => {

    return (
        <div className='pl-[260px] grid w-screen h-screen bg-boneWhite'>
            <Navbar />
            <AcademicHistory />
        </div>
    )

}

export default HistorialAcademico