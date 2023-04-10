import Navbar from '@/components/General/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import ProfileBT from '@/components/Profile/Profile_bt';
import UserList from '@/components/Admin/User_List';

const AdministrarUsuarios = () => {
  const { useCheckAuth } = useAuth()

  useCheckAuth();

  return (
    <div className='pl-[260px] flex w-screen h-screen bg-boneWhite dark:bg-darkBG'>
      <Navbar />
      <ProfileBT />
      <div className='grid w-full h-screen'>
        <UserList />
      </div>
    </div>
  )
}

export default AdministrarUsuarios