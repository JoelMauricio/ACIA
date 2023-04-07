import Edit_icon from '../../public/edit_icon.svg'
import Box_UserInfo from './Box_UserInfo'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//Agregar función para recuper la data del usuario

const UserCard = ({ name, email }) => {
    return <>
        <div className="bg-white2 dark:bg-darkBD2 rounded-md grid grid-flow-col justify-between min-h-[45px] h-[90px] w-full shadow-[rgba(35,_37,_40,_0.18)_0px_3px_8px] py-2">
            <div className="flex w-fit gap-4 text-[18px] font-semibold items-center px-4 justify-center">
                <span className=" text-purBlue max-w-[100px] min-w-fit">{name}</span>
                <div className="w-[2px] h-[60%] bg-slate-300" />
                <span>{email}</span>
            </div>
            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                <div className="w-[2px] h-[60%] bg-slate-300" />
                <Popup
                    trigger={<button className="w-[30px] h-[30px]"> <Edit_icon className="h-full w-full stroke-red stroke-[1.75px]" /></button>}
                    closeOnDocumentClick={false} modal>
                    <Box_UserInfo />
                </Popup>
            </div>
        </div>
    </>
}

export default UserCard