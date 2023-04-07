import Edit_iconv2 from '../../public/edit_iconv2.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditCourse from './Course_EditCourse';

const CourseCard = ({course_id, name, area, area_id, code, credits}) => {
    return <>
        <div className="rounded-md grid grid-flow-col justify-between min-h-[45px] h-fit w-full shadow-md">
            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                <span className="text-purBlue">{area}</span>
                <div className="w-[2px] h-[30px] bg-slate-300 justify-end" />
                <span>{code} - {name}</span>
            </div>
            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                <div className="w-[2px] h-[30px] bg-slate-300" />

                <Popup trigger={<button className="w-[30px] h-[30px]"> <Edit_iconv2 className="h-full w-full fill-red" /></button>} closeOnDocumentClick={false} modal>
                {close => (
                    <div className="modal">
                        <button className="bg-red text-white font-bold px-4 mx-1 mb-2 rounded" onClick={close}>&times;</button>
                        <EditCourse course_id = {course_id} name={name} area={area_id} code={code} credits={credits}/>
                    </div>
                )}
                </Popup>
            </div>
        </div>
    </>
}

export default CourseCard