import { useState, useEffect } from 'react';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'

export const useAuth = () => {
    const supabase = useSupabaseClient();
    const session = useSession();
    const router = useRouter();
    const token = Cookies.get("supabase-auth-token");

    const useProfile = (userId) => {


        useEffect(() => {
            if (token) {

                const fetchData = async () => {
                    const { data: profileData, error } = await supabase
                        .from('Persona')
                        .select()
                        .eq('auth_id', userId);

                    if (error) {
                        console.error(error);
                        return;
                    }

                    if (profileData && profileData.length > 0) {
                        localStorage.setItem('profile', JSON.stringify(profileData[0]));
                    }
                };

                fetchData();
            }

        }, []);


    };

    const useProfileData = () => {
        const [userProfile, setProfile] = useState();

        useEffect(() => {
            const storedProfile = localStorage.getItem("profile");

            if (storedProfile) {
                setProfile(JSON.parse(storedProfile));
            }
        }, []);

        return userProfile;
    };

    const useCheckAuth = () => {
        useEffect(()=>{
            if (!token) {
                router.push("/login");
              }
          
              // Si el token existe y estamos en la página de inicio de sesión, redirigir a la página de inicio
              if (token && router.pathname === "/login") {
                router.push("/");
              }
        },[])
        
    }

    return { useProfile, useProfileData, useCheckAuth }

}

