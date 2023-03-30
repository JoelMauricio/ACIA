
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

const Radial = ({ current, total, texto }) => {
    return <>
        <div className=" rounded-md grid justify-center shadow-md h-full p-2 gap-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className='w-full max-w-[110px]'>
                <CircularProgressbarWithChildren maxValue={4} value={current}
                    styles={buildStyles({
                        rotation: 1,
                        strokeLinecap: 'butt',
                        textSize: '16px',
                        pathTransitionDuration: 0.5,
                        pathColor: `#878add`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}>
                    <strong>{current}</strong>
                </CircularProgressbarWithChildren>

            </div>
            <span className="font-semibold">{texto}</span>
        </div>
    </>
}

export default Radial
