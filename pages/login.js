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
      <div class="w-full h-screen bg-center bg-no-repeat bg-cover" >
        <Image src={bg} alt='' layout='fill' objectFit='cover' placeholder='blur' loading='eager' className='-z-10' />
        <div className='grid justify-center w-screen h-screen items-center z-10'>
          <FormLogIn />
        </div>
      </div >
    </>
  )
}

export default Login