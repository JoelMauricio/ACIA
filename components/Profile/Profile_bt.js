import { useSession, useSupabaseClient, Storage } from "@supabase/auth-helpers-react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useProfileData } from "../hooks/loginData";
import { useAuth } from "../hooks/loginData";
import Link from "next/link";

const ProfileBT = () => {
    const { useProfileData } = useAuth();
    const profile = useProfileData();

    function loader() {
        const path = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/user.profile.fotos/avatars/${profile?.auth_id}`;
        console.log(path)
        return path
    }

    const foto = loader()
    return (
        <>
            <Link href={'/profile'} id="profile" className="flex absolute top-0 right-0 items-center m-21">
                <div className=' flex justify-self-end m-2 z-1 rounded-full border border-purBlue p-1 w-4r h-4r content-center justify-items-center'>
                    <img src={foto} alt='' className='w-fit h-fit rounded-full' loading="lazy" placeholder={<svg fill="#FFFDFA" width="64px" height="64px" viewBox="-1.2 -1.2 26.40 26.40" xmlns="http://www.w3.org/2000/svg" stroke="#FFFDFA" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-1.2" y="-1.2" width="26.40" height="26.40" rx="0" fill="#7D80DA" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.474 19.013a8.941 8.941 0 0 0-4.115-4.89 6 6 0 1 0-8.717 0 8.941 8.941 0 0 0-4.115 4.89 11.065 11.065 0 0 0 1.63 1.59 6.965 6.965 0 0 1 4.728-5.275 1 1 0 0 0 .181-1.829 4 4 0 1 1 3.871 0 1 1 0 0 0 .181 1.829 6.965 6.965 0 0 1 4.726 5.272 11.059 11.059 0 0 0 1.63-1.587z"></path> </g></svg>} />
                </div>
            </Link>
        </>
    )

}

export default ProfileBT;