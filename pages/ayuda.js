import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import ProfileBT from '@/components/Profile_bt';
import { useState } from 'react';
import FaqItem from '@/components/FaqItem';

const Ayuda = () => {
    const [faqs, setFaqs] = useState([
        {
            "question": "¿Cuál es la política de devoluciones?",
            "answer": "Nuestra política de devoluciones es que aceptamos devoluciones dentro de los 30 días posteriores a la compra. Para procesar una devolución, necesitarás proporcionar el recibo de compra o la confirmación del pedido. Si la devolución se debe a un error nuestro, cubriremos los costos de envío de la devolución. Si la devolución se debe a un error del cliente, el cliente es responsable de los costos de envío de la devolución. Una vez que hayamos recibido la devolución, procesaremos el reembolso dentro de 5-7 días hábiles.",
            "category": "Devoluciones"
        },
        {
            "question": "¿Cómo puedo contactar al servicio al cliente?",
            "answer": "Puedes contactarnos de varias formas. Puedes llamarnos al número de teléfono que aparece en nuestro sitio web, enviar un correo electrónico a nuestro departamento de servicio al cliente o chatear con uno de nuestros representantes de servicio al cliente en vivo en nuestro sitio web. También puedes enviarnos un mensaje en cualquiera de nuestras redes sociales y te responderemos lo más pronto posible.",
            "category": "Servicio al cliente"
        },
        {
            "question": "¿Cuánto tiempo tarda el envío?",
            "answer": "El tiempo de envío varía según la ubicación del cliente y el método de envío elegido. Para los pedidos nacionales, generalmente el envío tarda entre 3 y 5 días hábiles. Para los pedidos internacionales, el tiempo de envío puede ser mayor. Sin embargo, hacemos todo lo posible para procesar los pedidos lo más rápido posible y enviarlos de manera oportuna.",
            "category": "Envío"
        },
        {
            "question": "¿Aceptan pagos con tarjeta de crédito?",
            "answer": "Sí, aceptamos pagos con tarjeta de crédito. Aceptamos todas las principales tarjetas de crédito, incluyendo Visa, Mastercard y American Express. También aceptamos pagos con PayPal y Apple Pay.",
            "category": "Pagos"
        },
        {
            "question": "¿Cuál es su política de privacidad?",
            "answer": "Nos tomamos muy en serio la privacidad de nuestros clientes. Nunca compartimos ni vendemos información personal de nuestros clientes a terceros. Solo utilizamos la información que recopilamos para procesar los pedidos y mejorar la experiencia de compra en nuestro sitio web. Para obtener más información sobre nuestra política de privacidad, consulta la sección de privacidad en nuestro sitio web.",
            "category": "Privacidad"
        }
    ]);

    const session = useSession();
    const router = useRouter();


    return (
        <>
            <div className='flex w-screen h-screen bg-boneWhite'>
            <Navbar />
            <ProfileBT />

                <h1 className=' m-4 text-lg font-bold '>Ayuda</h1>
                <div className='flex flex-col mt-4 w-full h-screen items-center'>

                    <div className="flex flex-col shadow-lg rounded-[15px] m-4 mt-[80px] p-2 w-full max-w-[930px]">
                        {faqs.map((faq, index) => (
                            <FaqItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                        <a className="my-4 bg-blue-500 text-white p-3 mx-8 bg-purBlue rounded-md self-start"
                            href="https://wa.link/09dlxa"
                            target="_blank">
                            Contactar al servicio al cliente
                        </a>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Ayuda