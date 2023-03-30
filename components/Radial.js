
const Radial = ({ current, total, texto }) => {
    return <>
        <div className=" rounded-md grid justify-center shadow-md h-full p-2 gap-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-purBlue rounded-full w-[8rem] h-[8rem] grid content-center justify-center">
                <div className="bg-boneWhite rounded-full w-[7rem] h-[7rem] grid content-center justify-center ">
                    <span className="font-bold text-[1.6rem] ">{current}</span>
                </div>
            </div>
            <div>
                <span className="font-semibold w-full justify-center ">{texto}</span>
            </div>
        </div>
    </>
}

export default Radial
