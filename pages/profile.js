import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navbar from '@/components/General/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import MyProfile from '@/components/Profile/ProfilePage';

const Profile = () => {
  const session = useSession();
  const { useCheckAuth } = useAuth()

  useCheckAuth();

  return (
    <div className='pl-[260px] flex w-screen h-screen bg-boneWhite dark:bg-darkBG'>
      <Navbar />
      <div className='grid w-full h-screen'>
        {<MyProfile />}
      </div>
    </div>
  )
}

export default Profile