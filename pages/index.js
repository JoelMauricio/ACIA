import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'
import Navbar from '@/components/General/Navbar';
import ProfileBT from '@/components/Profile/Profile_bt';
import Main from '@/components/Main/MainPage';
import AcademicHistory from '@/components/AcademicHistory/StudentHistory'
import MyProfile from '@/components/Profile/ProfilePage';
import { useProfile } from '@/components/hooks/loginData';
import SelectionPage from '@/components/Seleccion/CourseSelection';
import { useAuth } from '@/components/hooks/loginData';
import { useRouter } from 'next/router';



const Home = () => {
  const session = useSession();
  const { useProfile, useCheckAuth } = useAuth()

  useProfile(session?.user.id)

  useCheckAuth();

  return (
    <div className='pl-[260px] flex w-screen h-screen bg-boneWhite'>
      <Navbar />
      <div className='grid w-full h-screen'>
        {<ProfileBT />}
        {<Main />}
      </div>
    </div>)
}

export default Home
