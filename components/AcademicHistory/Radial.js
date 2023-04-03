
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

const Radial = ({ current, texto }) => {
    return <>
        <div className=" rounded-md grid justify-center shadow-md h-[250px] content-center gap-6 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className='w-full max-w-[110px]'>
                <CircularProgressbarWithChildren maxValue={4} value={current}
                    styles={buildStyles({
                        rotation: 1,
                        strokeLinecap: 'round',
                        textSize: '16px',
                        pathTransitionDuration: 0.5,
                        pathColor: `#7D80DA`,
                        textColor: '#f88',
                        trailColor: '#EAF6FF',
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
