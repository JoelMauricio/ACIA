import LogIn_bg from '../public/LogIn_bg.svg'
import bg from '../public/bg.png'
import FormLogIn from '@/components/Box_LogIn';
import Home from '.';

import { useAuth } from '@/components/hooks/loginData';
import Image from 'next/image';

const Login = () => {

  const { useCheckAuth } = useAuth();

  useCheckAuth();

  return (
    <>
      <div className='absolute h-screen w-screen -z-10'>
        <Image src={bg} alt='' layout='fill' objectFit='cover' placeholder='blur' />

      </div>
      <div className='grid justify-center w-screen h-screen items-center'>
        <FormLogIn />
      </div>
    </>
  )
}

export default Login