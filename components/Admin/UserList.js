import Edit_icon from '../../public/edit_icon.svg'
import Box_UserInfo from './Box_UserInfo';
import SearchBar from '../SearchBar';
import SearchBar from '../SearchBar';
import UserCard from './User_Card';
import { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useSupabaseClient } from '@supabase/auth-helpers-react';


//Agregar función para recuper la data del usuario.

const UserList = ({ name, email }) => {
    const supabase = useSupabaseClient();
    const section_format = '"bg-boneWhite w-full rounded-sm h-3/4 overflow-hidden overflow-y-scroll'

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchUsers();
        console.log("user" + users)
    }, [])

    const fetchUsers = async () => { //GET Asignaturas
        try {
            const { data, error } = await supabase
                .from('Persona')
                .select('*')
            console.log(data)
            setUsers(data)
        }
        catch (error) {
            console.log(error);
        }
    };

    const filterUsers = (searchTerm) => {
        return users.filter((user) => {
            const name = user.nombre.toLowerCase();
            const email = user.correo.toLowerCase();
            const term = searchTerm.toLowerCase();
            return name.includes(term) || email.includes(term);
        });
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredUsers = filterUsers(search);

    return <>
        <div className='m-6 bg-transparent flex flex-col gap-5 overflow-hidden'>
            <h2 className="text-[1.5rem] font-bold grow-0">Administrar Usuarios</h2>
            <div className='flex flex-col gap-5'>
                <div className='flex  flex-col gap-2 w-full max-w-[330px] space-x-3'>
                    <span className="text-mainBlack font-bold dark:text-boneWhite">Buscar Usuario </span>
                    <input className="input mr-8 shadow appearance-none border-2 border-mainBlack rounded-md w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" value={search} onChange={handleSearch} placeholder="Nombre o correo electrónico..." />
                    <span />
                    <Popup trigger={<button className="bg-purBlue text-white font-bold py-2 px-4 rounded">Crear Usuario</button>} closeOnDocumentClick={false} modal>
                        <Box_UserInfo />
                    </Popup>
                </div>
                <div className={section_format}>
                    <div className="flex flex-wrap gap-2 overflow-hidden overflow-y-scroll">
                        {filteredUsers.map((user, index) => (
                            <UserCard key={index} name={user.nombre} email={user.correo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default UserList
