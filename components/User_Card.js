//Agregar función para recuper la data del estudiante.

const UserCard = () => {
    return <>
        <div className="rounded-md grid grid-flow-col justify-between min-h-[45px] h-fit w-full shadow-xl">
            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                <span className="text-purBlue">Asignatura</span>
                <div className="w-[2px] h-[30px] bg-slate-300" />
                <span>Area Académica</span>
            </div>
            <div className="flex w-fit gap-4 text-[18px] items-center px-4">
                <div className="w-[2px] h-[30px] bg-slate-300" />
                <button className="w-[30px] h-[30px] bg-red">
                </button>
            </div>
        </div>
    </>
}

export default UserCard