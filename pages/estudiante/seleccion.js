import Navbar from '@/components/General/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import SelectionPage from '@/components/Seleccion/CourseSelection';
import ProfileBT from '@/components/Profile/Profile_bt';

const Profile = () => {
    const { useCheckAuth } = useAuth()

    useCheckAuth();

    return (
        <div className='pl-[260px] flex w-screen h-screen bg-boneWhite dark:bg-darkBG'>
            <Navbar />
            <div className='grid w-full h-screen'>
                {<ProfileBT />}

                {<SelectionPage />}
            </div>
        </div>
    )
}

export default Profile