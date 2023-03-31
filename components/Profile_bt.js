import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useProfileData } from "./hooks/loginData";
import { useAuth } from "./hooks/loginData";
import Link from "next/link";

const ProfileBT = ({ url }) => {
    const { useProfileData } = useAuth();
    const profile = useProfileData();
    const { profile: myProfile } = useContext(UserContext);
    // const supabase = useSupabaseClient();

    //agregar coneccion del usuario con su imagen en supabase
    url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIUF7SE6CROioPfFm3jxwN5cPMxD_MobRdw&usqp=CAU';
    return (
        <>
            <Link href={'/profile'} className="flex absolute top-0 right-0 items-center m-21">
                <h2 className=" text-[18px]">{profile?.nombre}</h2>
                <div className=' flex justify-self-end m-2 z-1 rounded-full border border-purBlue p-1 w-4r h-4r content-center justify-items-center'>
                    <img src={url} alt='' className='w-fit h-fit rounded-full' />
                </div>
            </Link>
        </>
    )

}

export default ProfileBT;