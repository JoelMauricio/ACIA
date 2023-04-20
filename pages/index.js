import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navbar from '@/components/General/Navbar';
import ProfileBT from '@/components/Profile/Profile_bt';
import Main from '@/components/Main/MainPage';
import { useAuth } from '@/components/hooks/loginData';
import { useEffect, useState } from 'react';

const Home = () => {
  const session = useSession();
  const { useProfile, useCheckAuth } = useAuth()
  const [profile, setProfile] = useState()

  useProfile(session?.user.id)
  useCheckAuth();

  useEffect(() => {
    setProfile(localStorage.getItem("profile"))
  }, [profile])

  console.log(profile)

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
