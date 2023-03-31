import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navbar from '@/components/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import ProfileBT from '@/components/Profile_bt';
import UserList from '@/components/UserList'
import Box_UserInfo from '@/components/Box_UserInfo';

const Profile = () => {
  const session = useSession();
  const { useCheckAuth } = useAuth()

  useCheckAuth();

  return (
    <div className='pl-[260px] flex w-screen h-screen bg-boneWhite'>
      <Navbar />
      <ProfileBT />
      <div className='grid w-full h-screen'>
        {<Box_UserInfo/>}
      </div>
    </div>
  )
}

export default Profile