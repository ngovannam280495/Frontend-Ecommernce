import { Outlet } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';

function UserLayout() {
  return (
    <main>
      <UserHeader />
      <Outlet />
      <Footer />
    </main>
  );
}
export default UserLayout;
