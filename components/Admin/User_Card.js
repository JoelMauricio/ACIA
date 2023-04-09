import Edit_iconv2 from '../../public/edit_iconv2.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditUser from './User_EditUser';

const UserCard = ({ name, email }) => {
    return <>
        <div className="bg-white2 dark:bg-darkBD2 rounded-md grid grid-flow-col justify-between min-h-[45px] h-[90px] w-full min-w-[550px] shadow-[rgba(35,_37,_40,_0.18)_0px_3px_8px] py-2">
            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                <span className="ml-4 text-purBlue max-w-[100px] min-w-[100px]">{name}</span>
                <div className="w-[2px] h-[60%] bg-slate-300 justify-end mx-2" />
                <span>{email}</span>
            </div>
            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                <div className="w-[2px] h-[30px] bg-slate-300" />

                <Popup trigger={<button className="w-[30px] h-[30px]"> <Edit_iconv2 className="h-full w-full fill-red" /></button>} closeOnDocumentClick={false} modal contentStyle={{ background: 'transparent', border: 'none' }}>
                    {close => (
                        <div className="modal h-full w-full bg-white2 dark:bg-darkBD2 p-4 rounded-lg">
                            <EditUser close={close} />
                        </div>
                    )}
                </Popup>
            </div>
        </div>
    </>
}

export default UserCard