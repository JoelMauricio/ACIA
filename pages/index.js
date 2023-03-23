import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";

const Home = () => {
  const supabase = useSupabaseClient()
  const router = useRouter()
  
  const CerrarSesion = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  } 
  return (
    <div>
      <h1 onClick={CerrarSesion}>ACIA</h1>
    </div>
  )
}

export default Home