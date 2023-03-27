import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import Login from './login';
import Navbar from '@/components/Navbar';

const Home = () => {
  const session = useSession();

  // if (!session) {
  //   return <Login />
  // }
  return (
    <div className='flex flex-row'>
      <Navbar />
      <div className='grid content-center justify-center w-5/6 h-screen'>
        <div>pending...</div>
      </div>
    </div>
  )
}

export default Home