import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'
import Navbar from '@/components/Navbar';
import ProfileBT from '@/components/Profile_bt';
import Main from '@/components/MainPage';
import { useAuth } from '@/components/hooks/loginData';
import { useRouter } from 'next/router';



const Home = () => {
  const session = useSession();
  const {useProfile, useCheckAuth} = useAuth()
  
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  
  useProfile(session?.user.id)
   
  useCheckAuth();

  return (
    <div className='pl-[260px] flex w-screen h-screen bg-boneWhite'>
      <Navbar />
      <div className='grid w-full h-screen'>
        {<ProfileBT />}
        {<Main />}
        {/* <AcademicHistory /> */}
        {/*<MyProfile />*/}
      </div>
    </div>
  )
}

export default Home