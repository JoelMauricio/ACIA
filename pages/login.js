import LogIn_bg from '../public/LogIn_bg.svg'
import FormLogIn from '@/components/box_LogIn'

const Login = () => {
  return (
    <>
        <div className='absolute h-screen w-screen overflow-hidden -z-10'>
            <LogIn_bg className='h-fit w-fit -translate-y-40'/>
        </div>
        <div className='grid justify-center w-screen h-screen items-center'>
          <FormLogIn/>
        </div>
    </>
  )
}

export default Login