const Event_Card = ({ evento }) => {
    return <>
        <div className="bg-transparent w-1/2 py-2 px-4 group">
            <h3 className="font-semibold hover:text-purBlue cursor-pointer">{evento ? (evento?.nombre) : ('Se acerca la fecha de pago ')}</h3>
            <p className="">{evento ? (evento?.descripcion) : ('La fecha del pago es ' + new Date().toLocaleString() + ', recuerda pagar a tiempo.')}</p>
        </div>
    </>
}

export default Event_Card