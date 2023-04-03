import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useProfileData } from "../hooks/loginData";
import { useAuth } from "../hooks/loginData";

const Avatar = ({ url }) => {
    const { useProfileData } = useAuth();
    const profile = useProfileData();

    function loader() {
        const path = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/user.profile.fotos/avatars/${profile?.auth_id}`;
        console.log(path)
        return path
    }

    const foto = loader()
    return <div className='rounded-full bg-purBlue w-[220px] h-[220px] grid content-center justify-items-center'>
        <img src={foto} alt='' className='w-fit h-fit rounded-full' />
    </div>

}

export default Avatar;