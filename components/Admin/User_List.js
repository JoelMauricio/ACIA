import AddUser from './User_AddUser';
import UserCard from './User_Card';
import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const UserList = ({ }) => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [search, setSearch] = useState('');
    const supabase = useSupabaseClient();
    useEffect(() => { fetchUsers(); }, []);

    const fetchUsers = async () => { //GET Asignaturas
        try {
            const { data, error } = await supabase
                .from('Persona')
                .select("*, Ciudad(nombre)").order('nombre');
            if (error) throw error;
            setUsers(data);
            setFilteredUsers(data);
            console.log(data);
        }
        catch (error) {
            alert(error.message);
        }
    };

    const FilterData = (e) => { //Filtrar por nombre o codigo de asignatura
        const keyword = e.target.value.trimStart();
        if (keyword !== '') {
            const results = users.filter((data) => {
                return data.nombre.toLowerCase().includes(keyword.toLowerCase())
            });
            setFilteredUsers(results);
        }
        else {
            setFilteredUsers(users);
        }
        setSearch(keyword);
    };

    return <>
        <div className='m-6 bg-transparent flex flex-col gap-5 overflow-hidden '>
            <h1 className="text-[1.5rem] font-bold grow-0">Administrar Usuarios</h1>
            <div>
                <h2 className="px-1 text-italics text-sm font-bold ">Buscar Usuario</h2>
                <input className="input mr-8 shadow appearance-none border-2 border-mainBlack rounded-md w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" value={search} onChange={FilterData} placeholder="Nombre o correo.." />
                <Popup trigger={<button className="bg-purBlue text-white font-bold py-2 px-4 rounded ">Crear Usuario</button>} closeOnDocumentClick={false} modal contentStyle={{ background: 'transparent', border: 'none' }}>
                    {close => (
                        <div className="modal h-full w-full bg-white2 dark:bg-darkBD2 p-4 rounded-lg">
                            <AddUser close={close} />
                        </div>
                    )}
                </Popup>
            </div>

            <div className="bg-transparent w-full rounded-sm max-h-fit overflow-auto">
                <div className="flex flex-wrap gap-2 max-h-full pr-2 overflow-y-auto overflow-hidden">
                    {filteredUsers.map((user) => ( //Crear tarjetas de las asignaturas obtenidas
                        <UserCard key={user.id_persona} name={user.nombre} email={user.correo} />
                    ))}
                </div>
            </div>

        </div>
    </>

}
export default UserList