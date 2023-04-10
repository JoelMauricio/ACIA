import Navbar from '@/components/General/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import ProfileBT from '@/components/Profile/Profile_bt';
import SectionList from '@/components/Admin/Section_List';
import NotFoundPage from '@/pages/_error';

const AdministrarSecciones = () => {
  const { useCheckAuth, useProfileData } = useAuth()
  const profile = useProfileData()
  useCheckAuth();

  return (<>
    {
      profile?.id_rol === 1 ? (<div className='pl-[260px] flex w-screen h-screen bg-boneWhite dark:bg-darkBG'>
        <Navbar />
        <ProfileBT />
        <div className='grid w-full h-screen'>
          <SectionList />
        </div>
      </div>) : (<NotFoundPage />)
    }</>
  )
}

export default AdministrarSecciones