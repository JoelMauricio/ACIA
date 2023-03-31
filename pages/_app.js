import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import "../styles/globals.css";
import { Baloo_2 } from 'next/font/google'
import { useRouter } from 'next/router';

const Baloo = Baloo_2({
  weight: '500',
  subsets: ['latin'],
})

function App({
  Component,
  pageProps,
}) {
  const router = useRouter();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <style jsx global>{`
        html {
          font-family: ${Baloo.style.fontFamily};
        }
      `}</style>
      {router.pathname !== '/login' ? <script id="respondio__widget" src="https://cdn.respond.io/webchat/widget/widget.js?cId=b372bc8534673525c6917a1bd692bf421769338e675836b955a08bc7f5a307c6"></script> : <></>}
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}

export default App