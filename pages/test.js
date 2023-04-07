import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navbar from '@/components/General/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import UserList from '@/components/Admin/UserList'
import SubmitButton from '@/components/SubmitButton';
import CreateCourse from '@/components/Admin/CreateCourse';
import { ValidationSchemaExample } from '@/components/yuptest';
import SearchBar from '@/components/General/FilterCourses';
const Profile = () => {
  const session = useSession();
  const { useCheckAuth } = useAuth()

  useCheckAuth();

  return (
    <SearchBar/>
  )
}

export default Profile