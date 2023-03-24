import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Logo from '../public/logo_navbar.svg'

const bg_color = '#232528'
const txt_color = '#FFFDFA'

const button_format = "text-left my-1 p-2 hover:text-[#A9ADE5]";
const footer_bt_format = button_format;

const Navbar = () => {
    const supabase = useSupabaseClient();

    function logout() {
        supabase.auth.signOut();
    }

    return <div className="grid grid-flow-row grid-rows content-between h-screen w-1/6 " style={{ background: bg_color, color: txt_color, fontSize: '18px' }}>
        <div className='flex flex-col'>
            <Logo className='justify-center self-center my-4' style={{ width: '3rem', height: '3rem' }} />
            <button className={button_format}>
                <span>
                    Inicio
                </span>
            </button>
            <button className={button_format}>
                <span>
                    Seleccionar Asignatura
                </span>
            </button>
            <button className={button_format}>
                <span>
                    Historial Academico
                </span>
            </button>
            <button className={button_format}>
                <span>
                    Ayuda
                </span>
            </button>
        </div>
        <div className='flex flex-col'>
            <button className={footer_bt_format}>
                <span>
                    Modo Oscuro
                </span>
            </button>
            <button className={footer_bt_format} onClick={logout}>
                <span>
                    Salir
                </span>
            </button>
        </div>
    </div>
}

export default Navbar;