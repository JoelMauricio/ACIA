import LogIn_bg from '../public/LogIn_bg.svg'
import FormLogIn from '@/components/box_LogIn'
import Home from '.';
import { useRouter } from 'next/router';
import { useSession } from '@supabase/auth-helpers-react';


const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session) {
    router.push('/#')
  }
  return (
    <>
      <div className='absolute h-screen w-screen overflow-hidden -z-10'>
        <LogIn_bg className='h-fit w-fit -translate-y-40' />
      </div>
      <div className='grid justify-center w-screen h-screen items-center'>
        <FormLogIn />
      </div>
    </>
  )
}

export default Login