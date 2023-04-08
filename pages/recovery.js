import { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import Logo from '../public/logo.svg'

export default function ChangePassword() {
    const [password, setPassword] = useState('');
    const [repeated_password, setRepeatedPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();
    const supabase = useSupabaseClient();

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
            const { error } = await supabase.auth.updateUser({ password });

            if (error) {
                setError(error.message);
            } else {
                router.push('/');
            }
        }
    };

    if (error) {
        setError(error.message);
    }
    return (
        <div className='bg-white2 dark:bg-darkBG h-screen w-screen grid content-center justify-center'>
            <div className='dark:bg-darkBD2 rounded-lg shadow-lg p-10 text-mainBlack dark:text-white2 flex flex-col h-[40rem] w-[30rem] max-h-[550px] gap-4'>
                <div className='grid grid-flow-row h-full'>
                    <Logo style={{ width: 100, height: 100 }} />
                    <h1 className='text-[20px] font-bold max-h-[55px]'>Cambiar Contraseña</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-2 h-full text-[18px] font-semibold text-center'>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Ingrese su contraseña'
                            className="shadow appearance-none border-2 border-mainBlack rounded-md h-full max-h-[65px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                        />
                        <input
                            type="password"
                            value={repeated_password}
                            onChange={(e) => setRepeatedPassword(e.target.value)}
                            placeholder='Repita su contraseña'
                            className="shadow appearance-none border-2 border-mainBlack rounded-md h-full max-h-[65px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                        />
                        <button type="submit"
                            className="shadow appearance-none bg-purBlue text-white2 rounded-md h-full max-h-[65px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >Cambiar Contraseña</button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}


