import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navbar from '@/components/General/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import UserList from '@/components/Admin/UserList'
import SubmitButton from '@/components/SubmitButton';
import CreateCourse from '@/components/Admin/Course_AddCourse';
import Box_UserInfo from '@/components/Admin/Box_UserInfo';
import AddUser from '@/components/Admin/User_AddUser';

const Profile = () => {
  const session = useSession();
  const { useCheckAuth } = useAuth()

  useCheckAuth();

  return (
    <AddUser/>
  )
}

export default Profile