import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'
import Login from './login';
import Navbar from '@/components/Navbar';
import ProfileBT from '@/components/Profile_bt';
import Main from '@/components/MainPage';


const Home = () => {
  const session = useSession();
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  if (!session) {
    return <Login />
  }
  return (
    <div className='flex w-screen h-screen'>
      <Navbar />
      <div className='grid w-full h-screen'>
        <ProfileBT />
        <Main />
      </div>
    </div>
  )
}

export default Home