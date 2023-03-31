import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'
import Navbar from '@/components/Navbar';
import ProfileBT from '@/components/Profile_bt';
import Main from '@/components/MainPage';
<<<<<<< HEAD
import AcademicHistory from '@/components/StudentHistory'
import MyProfile from '@/components/ProfilePage';
import { useProfile } from '@/components/hooks/loginData';
import SelectionPage from '@/components/CourseSelection';
=======
import { useAuth } from '@/components/hooks/loginData';
import { useRouter } from 'next/router';
>>>>>>> 6b7a4e5158cc1b2885f3de2fa6b3fda0ae59d8e8



const Home = () => {
  const session = useSession();
  const { useProfile, useCheckAuth } = useAuth()

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  useProfile(session?.user.id)
<<<<<<< HEAD

  if (!session) {
    return <Login />
  }
=======

  useCheckAuth();

>>>>>>> 6b7a4e5158cc1b2885f3de2fa6b3fda0ae59d8e8
  return (
    <div className='pl-[260px] flex w-screen h-screen bg-boneWhite'>
      <Navbar />
      <div className='grid w-full h-screen'>
        {<ProfileBT />}
        {<MyProfile />}
      </div>
    </div>)
}

export default Home
