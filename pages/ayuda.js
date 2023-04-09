import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navbar from '@/components/General/Navbar';
import { useRouter } from 'next/router';
import ProfileBT from '@/components/Profile/Profile_bt';
import { useState } from 'react';
import FaqItem from '@/components/Help/FaqItem';
import Image from 'next/image';

const Ayuda = () => {
    const [faqs, setFaqs] = useState([
        {
            "question": "¿Cuál es la política de devoluciones?",
            "answer": "Nuestra política de devoluciones es que aceptamos devoluciones dentro de los 30 días posteriores a la compra. Para procesar una devolución, necesitarás proporcionar el recibo de compra o la confirmación del pedido. Si la devolución se debe a un error nuestro, cubriremos los costos de envío de la devolución. Si la devolución se debe a un error del cliente, el cliente es responsable de los costos de envío de la devolución. Una vez que hayamos recibido la devolución, procesaremos el reembolso dentro de 5-7 días hábiles.",
            "category": "Devoluciones"
        },
    ]);

    async function GetFaqs() {
        await fetch('../public/Ayuda.json')
            .then(response => response.json())
            .then(data => {
                console.log(response)
                setFaqs(data)
            })
    }

    GetFaqs()
    const session = useSession();
    const router = useRouter();


    return (
        <>
            <script className='bg-transparent' id="respondio__widget" src="https://cdn.respond.io/webchat/widget/widget.js?cId=b372bc8534673525c6917a1bd692bf421769338e675836b955a08bc7f5a307c6"></script>
            <div className='pl-[260px] flex w-full h-screen bg-boneWhite dark:bg-darkBG'>
                <Navbar />
                <ProfileBT />
                <div className="flex flex-col px-[40px] py-2 w-full">
                    <h1 className=' my-4 text-[24px] font-bold '>Ayuda</h1>
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                    {/*} <a className="flex items-center gap-4 my-4 bg-blue-500 text-white p-3 bg-purBlue rounded-[8px] self-start"
                        href="https://wa.link/09dlxa"
                        target="_blank">
                        <Image src={'whatsappLogo.svg'} width={30} height={40} />
                        Contactar al servicio al cliente
                    </a> */}
                </div>


            </div>
        </>
    )
}

export default Ayuda