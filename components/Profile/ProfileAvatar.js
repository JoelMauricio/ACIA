import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useAuth } from "@/components/hooks/loginData";
import Image from "next/image";

const Avatar = ({ url }) => {
  const { useProfileData } = useAuth();
  const profile = useProfileData();
  const supabase = useSupabaseClient();

  function loader() {
    const path = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/user.profile.fotos/avatars/${profile?.auth_id}`;
    return path
  }

  async function addPhotos(ev) {
    const files = ev.target.files;
    const newName = "avatars/" + profile?.auth_id;
    const imagePath = `public/user.profile.fotos/${newName}`;

    const { data: existingData, error: existingError } = await supabase
      .storage.from('user.profile.fotos')
      .list(newName);

    // Si la imagen existe, actualiza la versión anterior de la imagen
    if (existingData && existingData.length > 0) {
      const { result, error } = await supabase.storage
        .from('user.profile.fotos')
        .update(newName, files[0]);

      if (error) {
        console.log(error.message);
      }
    } else {
      // Si la imagen no existe, carga una nueva imagen en Supabase
      const { result, error } = await supabase.storage
        .from('user.profile.fotos')
        .upload(newName, files[0]);

      if (error) {
        console.log(error.message);
      }
    }

    // Devuelve la URL pública de la imagen
    const { data, error } = await supabase.storage.from('user.profile.fotos').getPublicUrl(imagePath);

    if (error) {
      console.log(error.message);
    }

    return data;
  }


  const foto = loader()

  return <label htmlFor="pic" className='rounded-full bg-purBlue w-[220px] h-[220px] grid content-center justify-items-center dark:bg-transparent cursor-pointer'>
    <label htmlFor="pic" className="w-full h-fit cursor-pointer">
      <input id="pic" type="file" className="hidden w-full h-full rounded-full cursor-pointer" onChange={addPhotos} />
      <Image src={foto} alt='' width={220} height={220} className='w-full h-[220px] rounded-full' />
    </label>
  </label>

}

export default Avatar;