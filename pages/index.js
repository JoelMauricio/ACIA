import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'
import Login from './login';
import Navbar from '@/components/Navbar';
import ProfileBT from '@/components/Profile_bt';
import Main from '@/components/MainPage';
import AcademicHistory from '@/components/StudentHistory'
import MyProfile from '@/components/ProfilePage';
import { useProfile } from '@/components/hooks/loginData';
import SelectionPage from '@/components/CourseSelection';



const Home = () => {
  const session = useSession();
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  useProfile(session?.user.id)

  if (!session) {
    return <Login />
  }
  return (
    <div className='ml-[260px] flex w-screen h-screen bg-boneWhite'>
      <Navbar />
      <div className='grid w-full h-screen'>
        {<ProfileBT />}
        {<Main />}
        <div className='flex w-screen h-screen bg-boneWhite'>
          <Navbar className="h-full" />
          <div className='grid w-full h-screen overflow-y-auto'>
            {/* <ProfileBT /> */}
            {/* <Main /> */}
            {/* <AcademicHistory /> */}
            {/*<MyProfile />*/}
          </div>
        </div>
      </div>
    </div>)
}

export default Home