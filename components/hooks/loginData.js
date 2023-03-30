import { useState, useEffect } from 'react';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import Cookies from 'js-cookie'

export const useProfile = (userId) => {
    const supabase = useSupabaseClient();
    const session = useSession();

    useEffect(() => {
        if (Cookies.get("supabase-auth-token") && !localStorage.getItem("profile")) {

            console.log(1)

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
                    console.log(profileData)
                }
            };

            fetchData();
        }

    }, [userId]);


};
