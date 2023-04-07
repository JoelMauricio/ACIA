import Navbar from '@/components/General/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import ProfileBT from '@/components/Profile/Profile_bt';
import GradePage from '@/components/Profesor/gradePage';

const GradesManagement = () => {
    const { useCheckAuth } = useAuth()

    useCheckAuth();

    return (
        <div className='pl-[260px] flex w-screen h-screen bg-boneWhite dark:bg-darkBG'>
            <Navbar />
            <ProfileBT />
            <div className='grid w-full h-screen'>
                {<GradePage />}
            </div>
        </div>
    )
}

export default GradesManagement