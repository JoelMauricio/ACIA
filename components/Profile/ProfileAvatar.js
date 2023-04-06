import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useContext } from "react";
import { useProfileData } from "../hooks/loginData";
import { useAuth } from "../hooks/loginData";
import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const Avatar = ({ url }) => {
    const { useProfileData } = useAuth();
    const profile = useProfileData();
    const supabase = useSupabaseClient();
    const [uploads, setUploads] = useState([]);

    function loader() {
        const path = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/user.profile.fotos/avatars/${profile?.auth_id}`;
        return path
    }

    async function addPhotos(ev) {
        const files = ev.target.files;
        if (files.length > 0) {
            for (const file of files) {
                const newName = Date.now() + file.name;
                const result = await supabase
                    .storage
                    .from('user.profile.fotos')
                    .upload(newName, file);
                if (result.data) {
                    const url = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/photos/' + result.data.path;
                    setUploads(prevUploads => [...prevUploads, url]);
                } else {
                    console.log(result);
                }
            }
        }
    }

    const foto = loader()
    return <div className='rounded-full bg-purBlue w-[220px] h-[220px] grid content-center justify-items-center dark:bg-transparent'>
        <label className="w-full h-fit">
            <input type="file" className="hidden w-full h-full rounded-full" onChange={addPhotos} />
            <img src={foto} alt='' className='w-full h-[220px] rounded-full' />
        </label>
    </div>

}

export default Avatar;