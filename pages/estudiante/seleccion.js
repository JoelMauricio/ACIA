import Navbar from '@/components/General/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import SelectionPage from '@/components/Seleccion/CourseSelection';
import ProfileBT from '@/components/Profile/Profile_bt';
import NotFoundPage from '@/pages/_error';

const Profile = () => {
    const { useCheckAuth, useProfileData } = useAuth()
    const profile = useProfileData()
    useCheckAuth();

    return (
        <>
            {profile?.id_rol === 2 ? (<div className='pl-[260px] flex w-screen h-screen bg-boneWhite dark:bg-darkBG'>
                <Navbar />
                <div className='grid w-full h-screen'>
                    {<ProfileBT />}

                    {<SelectionPage />}
                </div>
            </div>) : (<NotFoundPage />)}
        </>
    )
}

export default Profile