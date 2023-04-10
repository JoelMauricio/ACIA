import Edit_icon from '@/public/edit_icon.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//Agregar función para recuper la data del usuario

const CourseCard = ({ section, courseCode, courseName, grade }) => {
    return <>
        <div className="bg-white2 dark:bg-darkGrid rounded-md grid grid-flow-col justify-between min-h-[45px] h-[90px] w-full shadow-md py-2">
            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                <span className="ml-4 text-purBlue max-w-[100px] min-w-[100px]">{courseCode}-{section}</span>
                <div className="w-[2px] h-[60%] bg-slate-300 justify-end mx-2" />
                <span>{courseName}</span>

            </div>
            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                {/* <span>Calificación: {grade} </span> */}
                <div className="w-[2px] h-[30px] bg-slate-300" />
                <Popup
                    trigger={<button className="w-[30px] h-[30px]"> <Edit_icon className="h-full w-full stroke-red" /></button>}
                    closeOnDocumentClick={false} modal>
                </Popup>
            </div>
        </div>
    </>
}

export default CourseCard