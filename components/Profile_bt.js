import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const ProfileBT = ({ url }) => {
    const { profile: myProfile } = useContext(UserContext);
    // const supabase = useSupabaseClient();

    //agregar coneccion del usuario con su imagen en supabase
    url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIUF7SE6CROioPfFm3jxwN5cPMxD_MobRdw&usqp=CAU';
    return <div className='absolute justify-self-end m-2 z-1 rounded-full bg-purBlue w-4r h-4r grid content-center justify-items-center'>
        <img src={url} alt='' className='w-fit h-fit rounded-full' />
    </div>

}

export default ProfileBT;