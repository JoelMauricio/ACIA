import React from 'react';
import Error from '@/public/Error.svg';
import { useEffect, useState } from 'react';
import Loader from '@/public/Loader.gif';
import Image from 'next/image';

function NotFoundPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => setMounted(true), 500); // 100ms is the minimum duration for the animation to be visible
    });

    return (
        <>
            {mounted ? (<div className="h-screen flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 bg-blue text-boneWhite h-screen flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <Error className='w-full md:min-w-[30em] h-auto md:min-h-[30em]' />

                    </div>
                </div>
                <div className="w-full md:w-3/5 bg-boneWhite text-blue h-full flex items-center justify-center md:justify-start px-8 py-16">
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl font-bold tracking-tight mb-4">Oops! Página no encontrada</h1>
                        <p className="text-3xl mb-8">
                            No pudimos encontrar la página que estabas buscando. Por favor, revisa la URL e inténtalo de nuevo.
                        </p>
                    </div>
                </div>
            </div>) : (<div className='h-screen w-screen grid content-center justify-center'>
                <Image src={Loader} />
            </div>)}
        </>
    );
}

export default NotFoundPage;
