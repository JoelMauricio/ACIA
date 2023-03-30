import { createContext, useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const session = useSession();
    const supabase = useSupabaseClient();
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        if (!session?.user?.id) {
            return;
        }
        supabase.from('profiles')
            .select()
            .eq('auth_id', session.user.id)
            .then(result => {
                setProfile(result.data?.[0]);
            });
    }, [session?.user?.id]);

    console.log(profile)
    return (
        <UserContext.Provider value={{ profile }}>
            {children}
        </UserContext.Provider>
    );
}