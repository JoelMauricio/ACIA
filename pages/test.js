import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navbar from '@/components/General/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import UserList from '@/components/Admin/UserList'
import SubmitButton from '@/components/SubmitButton';
const Profile = () => {
  const session = useSession();
  const { useCheckAuth } = useAuth()

  useCheckAuth();

  return (
    <SubmitButton/>
  )
}

export default Profile