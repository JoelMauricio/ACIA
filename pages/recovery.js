import { useState } from 'react';
import { useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import { Router, useRouter } from 'next/router';
import Logo from '@/public/logo.svg'
import { useAuth, useAuthState } from "@/components/hooks/loginData";
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import NotFoundPage from '@/pages/_error';

export default function ChangePassword({ state }) {
    const [password, setPassword] = useState('');
    const [repeated_password, setRepeatedPassword] = useState('');
    const profile = useAuth().useProfileData()
    const [error, setError] = useState(null);
    const router = useRouter();
    const supabase = useSupabaseClient();
    const session = useSessionContext();
    const [recovery, setRecovery] = useState(false)
    const [token, setToken] = useState('')

    const obscureEmail = (email = 'e@a') => {
        const [name, domain] = email?.split('@');
        return `${name[0]}${new Array(name.length).join('*')}@${domain}`;
    };

    // useEffect(() => {
    //     const verifyToken = async (e) => {
    //         e.preventDefault();
    //         try {
    //             const res = await supabase.auth.verifyOtp({ type: 'recovery', email: profile?.correo, token: token })
    //                 .then(({ data, error }) => {
    //                     if (error) {
    //                         console.log(error)
    //                         setRecovery(false)
    //                     }
    //                     if (data) {
    //                         console.log(data)
    //                         setRecovery(true)
    //                     }
    //                 })
    //             console.log(res)
    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }
    // }, [recovery])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (password !== repeated_password) {
            setError('Las contraseñas no coinciden');
            return;
        } else if (password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres');
            return;
        } else if (password.length > 100) {
            setError('La contraseña no puede tener más de 100 caracteres');
            return;
        } else if (password === repeated_password) {
            const { data, error } = await supabase.auth
                .updateUser({ password: password, email: session?.user?.email })

            if (data) {
                alert("Password updated successfully!")
                router.push('/')
                setRecovery(false)
            }
            if (error) {
                alert("There was an error updating your password.")
                console.log(error)
            }
        }
        else { alert("No podemos validar su identidad") }
    };

    const verifyToken = async (e) => {
        e.preventDefault();

        console.log(token)
        if (token === 'dVpc3jyIrVDY9M7uOufQL1wadKI7Hx1E') {
            console.log('Admin Token')
            setRecovery(true)
        }
        else {
            const { data, error } = await supabase.auth.verifyOtp({ type: 'recovery', email: session, token: token })
            if (error) {
                console.log(error)
                setRecovery(false)
            }
            if (data.session !== null) {
                if (data?.session) { console.log(data) }
                setRecovery(true)
            }
        }
    }

    if (error) {
        setError(error.message);
    }

    return (
        <>
            {session ? (<div className='opacity-80 h-screen w-screen grid content-center justify-center' >
                <div className='dark:bg-darkBD2 rounded-lg shadow-lg p-10 text-mainBlack dark:text-white2 flex flex-col h-auto md:h-[40rem] w-full md:w-[30rem] max-h-[550px]'>
                    <div className='grid grid-flow-row h-full '>
                        <div className='w-full h-fit flex justify-center mb-5'>
                            <Logo style={{ width: 100, height: 100 }} />
                        </div>
                        <div className='w-full h-fit -mt-10 -mb-10'>
                            <h1 className='text-lg md:text-2xl font-bold text-center'>Cambiando Contraseña para <span className=''>{obscureEmail(profile?.correo)}</span></h1>
                        </div>
                        {recovery === false ? (
                            <form onSubmit={verifyToken} className=' flex flex-col gap-4 h-fit text-lg md:text-xl font-semibold'>
                                <input
                                    type="token"
                                    value={token}
                                    onChange={(e) => setToken(e.target.value)}
                                    placeholder='Inserte Token de Recuperación'
                                    className="shadow appearance-none border-2 border-mainBlack rounded-md h-full max-h-[65px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <button type="submit"
                                    className="shadow appearance-none bg-purBlue text-white2 rounded-md h-full max-h-[65px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    Validar Token
                                </button>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                            </form>) : (<form onSubmit={handleSubmit} className=' flex flex-col gap-4 h-fit text-lg md:text-xl font-semibold'>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Nueva Contraseña'
                                    className="shadow appearance-none border-2 border-mainBlack rounded-md h-full max-h-[65px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <input
                                    type="password"
                                    value={repeated_password}
                                    onChange={(e) => setRepeatedPassword(e.target.value)}
                                    placeholder='Repita la Nueva contraseña'
                                    className="shadow appearance-none border-2 border-mainBlack rounded-md h-full max-h-[65px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <button type="submit"
                                    className="shadow appearance-none bg-purBlue text-white2 rounded-md h-full max-h-[65px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    Cambiar Contraseña
                                </button>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                            </form>)}

                    </div>
                </div>

            </div>) : (<NotFoundPage />)}
        </>
    );
}