import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { Logo, Icon_Home, Icon_light, Icon_dark, Icon_logout, Icon_history, Icon_selection, Icon_help } from '@/public/navbar_icons/index'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { useAuth } from '@/components/hooks/loginData';
import Router from 'next/router';
import { useTheme } from 'next-themes';

import Link from 'next/link';

const Navbar = () => {
    const router = useRouter();
    var button_format = "text-justify my-1 p-2 group";
    var text_format
    var bt_icon_format = `flex gap-4 w-fit items-center justify-start  group-hover:text-clearBlue`;
    var icon_format = "self-center min-w-[24px] max-w-[24px] h-fit fill-current text-boneWhite group-hover:text-clearBlue";

    const { useProfileData } = useAuth()

    const supabase = useSupabaseClient();
    const profile = useProfileData();
    const [themeState, changeTheme] = useState(true);
    const { theme, setTheme } = useTheme();
    const [navMinimized, changeNavState] = useState(false);

    var userRol = profile?.id_rol

    function logout() {
        supabase.auth.signOut().then(() => {
            router.push('/login')
            localStorage.removeItem('profile')
        })
    }

    function themeHandleClick() {
        changeTheme((currentState) => !currentState);
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    function navbarHandleClick() {
        changeNavState((currentState) => !currentState);

        if (navMinimized === false) {
            button_format = "text-left my-1 p-2 group ";
            text_format = {};
            bt_icon_format = "flex gap-4 items-center justify-start group-hover:text-clearBlue";
        }
        else {
            button_format = " my-1 p-2 group";
            text_format = { display: 'none' }
            bt_icon_format = "flex items-center justify-center group-hover:text-clearBlue";
        }
    }

    function Icon_Theme({ state, format, span_format }) {
        if (state) {
            return (
                <span className={span_format}>
                    <Icon_dark className={format} />
                    <p style={text_format}>Oscuro</p>
                </span>)
        }
        else {
            return (
                <span className={span_format}>
                    <Icon_light className={format} />
                    <p style={text_format}>Claro</p>
                </span>)
        }
    }

    function DelimetedFuntionalities({ rol, bt_format, bt_ic_format, span_format, icn_format, txt_format }) {
        if (rol === 1) {
            return (<>
                <Link href={'/admin/administrarUsuarios'} className={bt_format} id='bt_AdministrarUsuarios'>
                    <span className={bt_ic_format}>
                        <Icon_history className={icn_format} />
                        <p style={txt_format}>Administrar Usuarios</p>
                    </span>
                </Link>
                <Link href={'/admin/administrarAsignaturas'} className={bt_format} id='bt_AdministrarAsignaturas'>
                    <span className={bt_ic_format}>
                        <Icon_history className={icn_format} />
                        <p style={txt_format}>Administrar Asignaturas</p>
                    </span>
                </Link>
                <Link href={'/admin/administrarSecciones'} className={bt_format} id='bt_AdministrarSecciones'>
                    <span className={bt_ic_format}>
                        <Icon_history className={icn_format} />
                        <p style={txt_format}>Administrar Secciones</p>
                    </span>
                </Link>
            </>)
        }
        else if (rol === 3) {
            return (<>
                <Link href={'/profesor/gestionCalificaciones'} className={bt_format} id='bt_GestionCalificaciones'>
                    <span className={bt_ic_format}>
                        <Icon_selection className={icn_format} />
                        <p style={txt_format}>Gestión de Calificaciones</p>
                    </span>
                </Link>
            </>)
        }
        else if (rol === 2) {
            return (<>
                <Link href={'/estudiante/seleccion'} className={bt_format} id='bt_Seleccion'>
                    <span className={bt_ic_format}>
                        <Icon_selection className={icn_format} />
                        <p style={txt_format}>Seleccionar Asignatura</p>
                    </span>
                </Link>
                <Link href={'/estudiante/historialAcademico'} className={bt_format} id='bt_HistorialAcademico'>
                    <span className={bt_ic_format}>
                        <Icon_history className={icn_format} />
                        <p style={txt_format}>Historial Academico</p>
                    </span>
                </Link>
            </>)
        }
    }

    return <div className="fixed top-0 left-0 grid grid-flow-row grid-rows content-between min-h-screen w-[260px] px-2 bg-mainBlack text-boneWhite text-md ">
        <div className='flex flex-col'>
            <Logo className='my-4 w-3r h-3r self-center place-self-center'
            />
            <Link href={'/'} className={button_format} id='bt_Home'>
                <span className={bt_icon_format}>
                    <Icon_Home className={icon_format} />
                    <p style={text_format}>Home</p>
                </span>
            </Link>
            <DelimetedFuntionalities rol={userRol} bt_format={button_format} bt_ic_format={bt_icon_format} icn_format={icon_format} txt_format={text_format} />
            <Link className={button_format} href={'/ayuda'} id='bt_Ayuda'>
                <span className={bt_icon_format}>
                    <Icon_help className={icon_format} />
                    <p style={text_format}>Ayuda</p>
                </span>
            </Link>
        </div>
        <div className='flex flex-col'>
            <button className={button_format} onClick={themeHandleClick} id='bt_Theme'>
                <Icon_Theme state={themeState} format={icon_format} span_format={bt_icon_format} />
            </button>
            <Link className={button_format} onClick={logout} href={'/login'} id='bt_logout'>
                <span className={bt_icon_format}>
                    <Icon_logout className={icon_format} span_format={bt_icon_format} />
                    <p style={text_format}>Salir</p>
                </span>
            </Link>
        </div>
    </div>
}

export default Navbar;