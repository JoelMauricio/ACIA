import Edit_icon from '../../public/edit_icon.svg'
import Box_UserInfo from './Box_UserInfo';
import SearchBar from '../SearchBar';
import UserCard from './User_Card';
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


//Agregar función para recuper la data del usuario.

const UserList = ({ name, email }) => {

    const section_format = '"bg-boneWhite w-full rounded-sm h-3/4 overflow-hidden overflow-y-scroll'

    const [users, setUsers] = useState([
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
    ]);


    return <>
        <div className='m-6 bg-transparent flex flex-col gap-5 overflow-hidden'>
            <h2 className="text-[1.5rem] font-bold grow-0">Administrar Usuarios</h2>
            <div className='flex flex-col gap-5'>
                <div className='grid grid-flow-col justify-between'>
                    <SearchBar text={"Buscar Usuario"} />
                    <Popup trigger={<button className="bg-purBlue text-white font-bold w-[15rem] py-2 px-4 rounded">Crear Usuario</button>} closeOnDocumentClick={false} modal>
                        <Box_UserInfo />
                    </Popup>
                </div>
                <div className={section_format}>
                    <div className="flex flex-wrap gap-2 overflow-hidden overflow-y-scroll">
                        {users.map((user, index) => (
                            <UserCard key={index} name={user.name} email={user.email} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default UserList