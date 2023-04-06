import CourseInfo_Form from './CourseInfo_Form';
import Edit_icon from '../../public/edit_icon.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//Agregar función para recuper la data del usuario

const AdminCourseCard = ({ name, area, code }) => {
    return <>
        <div className="rounded-md grid grid-flow-col justify-between min-h-[45px] h-fit w-full shadow-md">
            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                <span className="text-purBlue">{area}</span>
                <div className="w-[2px] h-[30px] bg-slate-300 justify-end" />
                <span>{code} - {name}</span>
            </div>
            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                <div className="w-[2px] h-[30px] bg-slate-300" />
                <Popup
                    trigger={<button className="w-[30px] h-[30px]"> <Edit_icon className="h-full w-full stroke-red" /></button>}
                    closeOnDocumentClick={false} modal>
                    <CourseInfo_Form/>
                </Popup>
            </div>
        </div>
    </>
}

export default AdminCourseCard