import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { Logo, Icon_Home, Icon_light, Icon_dark, Icon_logout, Icon_history, Icon_selection, Icon_help } from '../public/navbar_icons'


const bg_color = '#232528'
const txt_color = '#FFFDFA'

var button_format = "text-left my-1 p-2 group";
var text_format
const footer_bt_format = button_format;
const bt_icon_format = "flex gap-4 items-center justify-start group-hover:text-[#A9ADE5]";
const icon_format = "justify-center w-6 h-6 fill-current text-[#FFFDFA] group-hover:text-[#A9ADE5]";

const Navbar = () => {
    const supabase = useSupabaseClient();
    const [themeState, changeTheme] = useState(true);
    const [navMinimized, changeNavState] = useState(false);

    function logout() {
        supabase.auth.signOut();
    }

    function themeHandleClick() {
        changeTheme((currentState) => !currentState);
    }

    function navbarHandleClick() {
        changeNavState((currentState) => !currentState);
        console.log('El navbar esta minimizado? ' + navMinimized)

        if (navMinimized === false) {
            button_format = "text-left my-1 p-2 group";
            text_format = {}
        }
        else {
            button_format = " my-1 p-2 group";
            text_format = { display: 'none' }
        }
    }

    function Icon_Theme({ state, format, spanFormat }) {
        if (state) {
            return (
                <span className={spanFormat}>
                    <Icon_dark className={format} />
                    <p style={text_format}>Oscuro</p>
                </span>)
        }
        else {
            return (
                <span className={spanFormat}>
                    <Icon_light className={format} />
                    <p style={text_format}>Claro</p>
                </span>)
        }
    }

    return <div className="grid grid-flow-row grid-rows content-between h-screen w-fit px-2" style={{ background: bg_color, color: txt_color, fontSize: '18px' }}>
        <div className='flex flex-col w-fit' onClick={navbarHandleClick}>
            <button className='justify-center self-center'>
                <Logo className='my-4' style={{ width: '3rem', height: '3rem' }}
                />
            </button>
            <button className={button_format}>
                <span className={bt_icon_format}>
                    <Icon_Home className={icon_format} />
                    <p style={text_format}>Home</p>
                </span>
            </button>
            <button className={button_format}>
                <span className={bt_icon_format}>
                    <Icon_selection className={icon_format} />
                    <p style={text_format}>Seleccionar Asignatura</p>
                </span>
            </button>
            <button className={button_format}>
                <span className={bt_icon_format}>
                    <Icon_history className={icon_format} />
                    <p style={text_format}>Historial Academico</p>
                </span>
            </button>
            <button className={button_format}>
                <span className={bt_icon_format}>
                    <Icon_help className={icon_format} />
                    <p style={text_format}>Ayuda</p>
                </span>
            </button>
        </div>
        <div className='flex flex-col'>
            <button className={footer_bt_format} onClick={themeHandleClick}>
                <Icon_Theme state={themeState} format={icon_format} spanFormat={bt_icon_format} />
            </button>
            <button className={footer_bt_format} onClick={logout}>
                <span className={bt_icon_format}>
                    <Icon_logout className={icon_format} spanFormat={bt_icon_format} />
                    <p style={text_format}>Salir</p>
                </span>
            </button>
        </div>
    </div>
}

export default Navbar;