import Navbar from '@/components/General/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import ProfileBT from '@/components/Profile/Profile_bt';
import CourseList from '@/components/Admin/Course_List';

const AdministrarAsignaturas = () => {
  const { useCheckAuth } = useAuth()

  useCheckAuth();

  return (
    <div className='pl-[260px] flex w-screen h-screen bg-boneWhite dark:bg-darkBG'>
      <Navbar />
      {<ProfileBT />}
      <div className='grid w-full h-screen'>
        <CourseList />
      </div>
    </div>
  )
}

export default AdministrarAsignaturas