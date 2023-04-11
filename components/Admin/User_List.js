import { useState, useEffect } from "react";
import Edit_iconv2 from '@/public/edit_iconv2.svg'
import AddUser from '@/components/Admin/User_AddUser';
import EditUser from "@/components/Admin/User_EditUser";
import Popup from 'reactjs-popup';
import { fetchAll } from "@/components/hooks/fetchFile";
import 'reactjs-popup/dist/index.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const { fetchUsers, fetchCities, fetchCountries } = fetchAll();


    useEffect(() => {
        fetchUsers().then((data) => {
            setUsers(data)
            setFilteredUsers(data)
        })

        fetchCities().then((data) => {
            setCities(data)
        })

        fetchCountries().then((data) => {
            setCountries(data)
        })
    }, [])

    const FilterData = (e) => { //Filtrar por nombre o codigo de asignatura
        const keyword = e.target.value.trimStart();
        if (keyword !== '') {
            const normalizedKeyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const results = users.filter((data) => {
                const normalizedDataName = data.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                return normalizedDataName.includes(normalizedKeyword.toLowerCase());
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
                <input className="input mr-8 shadow appearance-none border-2 border-mainBlack rounded-md w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" value={search} onChange={FilterData} placeholder="Nombre de usuario..." />
                <Popup trigger={<button className="bg-purBlue text-white font-bold py-2 px-4 rounded ">Crear Usuario</button>} closeOnDocumentClick={false} modal contentStyle={{ background: 'transparent', border: 'none' }}>
                    {close => (
                        <div className="modal h-full w-full bg-white2 dark:bg-darkBD2 p-4 rounded-lg">
                            <AddUser close={close} cityOptions={cities} countryOptions={countries} />
                        </div>
                    )}
                </Popup>
            </div>

            {/*Crear tarjetas de los usuarios */}
            <div className="bg-transparent w-full rounded-sm max-h-fit overflow-auto">
                <div className="flex flex-wrap gap-2 max-h-full pr-2 overflow-y-auto overflow-hidden">
                    {filteredUsers.map((user, input) => (
                        <div key={input} className="bg-white2 dark:bg-darkBD2 rounded-md grid grid-flow-col justify-between min-h-[45px] h-[90px] w-full min-w-[550px] shadow-[rgba(35,_37,_40,_0.18)_0px_3px_8px] py-2">
                            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                                <span className="ml-4 text-purBlue max-w-[100px] min-w-[100px]">{user.nombre} </span>
                                <div className="w-[2px] h-[60%] bg-slate-300 justify-end mx-2" />
                                <span>{user.correo}</span>
                            </div>
                            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                                <div className="w-[2px] h-[30px] bg-slate-300" />

                                <Popup trigger={<button className="w-[30px] h-[30px]"> <Edit_iconv2 className="h-full w-full fill-red" /></button>} closeOnDocumentClick={false} modal contentStyle={{ background: 'transparent', border: 'none' }}>
                                    {close => (
                                        <div className="modal h-full w-full bg-white2 dark:bg-darkBD2 p-4 rounded-lg">
                                            <EditUser key={user.id_Persona} user_id={user.id_Persona} name={user.nombre} email={user.correo} birthdate={user.fecha_nac} city_id={user.id_ciudad} country_id={user.id_pais} role_id={user.id_rol} countryOptions={countries} cityOptions={cities} close={close} />
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </>

}
export default UserList