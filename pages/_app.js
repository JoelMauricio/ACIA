import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import "../styles/globals.css";
import { Baloo_2 } from 'next/font/google'

const Baloo = Baloo_2({
  weight: '500',
  subsets: ['latin'],
})

function App({
  Component,
  pageProps,
}) {
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
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}

export default App