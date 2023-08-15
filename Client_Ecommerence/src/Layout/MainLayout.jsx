import Footer from '../components/Footer';
import UserHeader from '../components/UserHeader';
import { Outlet } from 'react-router-dom';
function MainLayout() {
  return (
    <main>
      <UserHeader />
      <Outlet />
      <Footer />
    </main>
  );
}
export default MainLayout;
