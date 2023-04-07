import Edit_icon from '../../public/edit_icon.svg';
import Box_UserInfo from '../Box_UserInfo';
import SearchBar from '../SearchBar';
import UserCard from '../User_Card';
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Dropdown from '../General/Dropdown';


//Agregar función para recuper la data del usuario.

const GradePage = ({ name, email }) => {
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];
    const [selectedOption, setSelectedOption] = useState('Seleccionar Asignatura');
    const section_format = '"bg-boneWhite w-full rounded-sm h-2/3 overflow-hidden'

    function handleOptionSelect(option) {
        setSelectedOption(option);
    }

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
        <div className='m-6 bg-transparent flex flex-col gap-4 overflow-hidden' >
            <div className="flex justify-between">
                <h2 className="text-[1.5rem] font-bold grow-0">Gestionar Calificaciones</h2>
            </div>
            <div className='bg-boneWhite last:shadow-lg w-full rounded-sm h-fit p-4 dark:bg-darkBD2 dark:bg-opacity-80'>
                <div className="flex h-full gap-4">
                    <div className="grid grid-flow-col h-full w-full justify-between content-center">
                        <div className="flex flex-col text-mainBlack text-[16px] font-semibold gap-4 h-full content-center dark:text-boneWhite">
                            <div className="flex gap-4 items-center flex-wrap">
                                <Dropdown
                                    options={options}
                                    selectedOption={selectedOption}
                                    onOptionSelect={handleOptionSelect}
                                />
                                <SearchBar text={"Buscar una Asignatura"} />
                            </div>
                        </div>
                        <div className='flex gap-4 items-center flex-wrap'>
                            <Popup trigger={<button className="bg-blue text-white font-bold py-2 px-4 rounded w-[200px] h-fit">Guardar</button>} closeOnDocumentClick={false} modal>
                                <Box_UserInfo />
                            </Popup>
                            <Popup trigger={<button className="bg-red text-white font-bold py-2 px-4 rounded w-[200px] h-fit">Cancelar</button>} closeOnDocumentClick={false} modal>
                                <Box_UserInfo />
                            </Popup>
                        </div>
                    </div>

                </div>
            </div>
            <div className={section_format}>
                <div className="h-full overflow-hidden overflow-y-auto">
                    <div className="flex flex-wrap gap-2 p-2">
                        {users.map((user, index) => (
                            <UserCard key={index} name={user.name} email={user.email} />
                        ))}
                        <div className="w-full" />
                    </div>
                </div>
            </div>
        </div >
    </>
}

export default GradePage

// <>
//         <div className='m-6 bg-transparent flex flex-col gap-5 overflow-hidden'>
//             <h2 className="text-[1.5rem] font-bold grow-0">Gestionar Calificaciónes</h2>
//             <div className='flex flex-col gap-5 w-full'>
//                 <div className='grid grid-flow-col content-between w-full'>
//                     <div className=''>

//                     </div>

//                 </div>
//                 <div className={section_format}>
//                     <div className="flex flex-wrap gap-2 overflow-hidden overflow-y-scroll">

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>