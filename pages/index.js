import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navbar from '@/components/General/Navbar';
import ProfileBT from '@/components/Profile/Profile_bt';
import Main from '@/components/Main/MainPage';
import { useAuth } from '@/components/hooks/loginData';
import { useEffect } from 'react';

const Home = ({ profile }) => {
  const session = useSession();
  const { useProfile, useCheckAuth } = useAuth()

  useProfile(session?.user.id)
  useCheckAuth();

  // useEffect(() => {
  //   if (localStorage.getItem('profile') === null && session) { window.location.reload() }
  // }, [session])

  return (
    <div className='pl-[260px] flex w-screen h-screen bg-boneWhite dark:bg-darkBG'>
      <Navbar />
      <div className='grid w-full h-screen'>
        {<ProfileBT />}
        {<Main />}
      </div>
    </div>)
}

export default Home
