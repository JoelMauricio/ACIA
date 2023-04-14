import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navbar from '@/components/General/Navbar';
import { useRouter } from 'next/router';
import ProfileBT from '@/components/Profile/Profile_bt';
import { useState } from 'react';
import FaqItem from '@/components/Help/FaqItem';
import Pregs from '@/public/Ayuda.json'
import Image from 'next/image';

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
            {/* <script id="webchat_widget" src="https://cdn.respond.io/webchat/widget/widget.js?cId=b372bc8534673525c6917a1bd692bf421769338e675836b955a08bc7f5a307c6"></script>*/}
            <div className='pl-[260px] flex w-full h-screen bg-boneWhite dark:bg-darkBG'>
                <Navbar />
                <ProfileBT />
                <div className="flex flex-col px-[40px] py-2 w-full">
                    <h1 className=' my-4 text-[24px] font-bold '>Ayuda</h1>
                    {Pregs.map((faq, index) => (
                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                    {<a className="flex items-center gap-4 my-4 bg-blue-500 text-white p-3 bg-purBlue rounded-full self-start absolute bottom-8 right-8"
                        href="https://wa.link/09dlxa"
                        target="_blank">
                        <Image src={'whatsappLogo.svg'} width={30} height={40} />

                    </a>}
                </div>


            </div>
            {/*<a href='#webchat_widget' className='absolute flex items-center justify-center bottom-8 right-8 w-14 h-14 bg-purBlue rounded-full z-[99]'>
                <svg fill="#FFFFFF" height="30" width="30" viewBox="0 0 24 24">
                    <path fill="#FFFFFF" d="M4,2A2,2 0 0,0 2,4V17L6,13H15A2,2 0 0,0 17,11V4A2,2 0 0,0 15,2H4M4,4H15V11H6L4,13V4M19,6V8H20V18L18,16H8V15H6V16A2,2 0 0,0 8,18H18L22,22V8A2,2 0 0,0 20,6H19Z"></path>
                </svg>
                    </a>*/}
        </>
    )
}

export default Ayuda