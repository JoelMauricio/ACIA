import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from "next/navigation";
import { createClient } from '@supabase/supabase-js'
import { Auth } from "@supabase/auth-ui-react";
import Login from './login';
import Navbar from '@/components/Navbar';
import { data } from 'autoprefixer';

const Home = () => {
  const session = useSession();
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  if (!session) {
    return <Login />
  }
  return (
    <div className='flex flex-row'>
      <Navbar />
      <div className='grid content-center justify-center w-full h-screen'>
        <div>pending... {session.user.id} </div>
      </div>
    </div>
  )
}

export default Home