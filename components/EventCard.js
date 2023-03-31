const Event_Card = ({ title, description }) => {
    return <>
        <div className="bg-transparent w-1/2 py-2 px-4 group">
            <h3 className="font-semibold hover:text-purBlue cursor-pointer">{title}</h3>
            <p className="">{description}</p>
        </div>
    </>
}

export default Event_Card