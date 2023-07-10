import LayoutSidebar from "@fooddy/components/LayoutSidebar";
import StoreDetails from '@fooddy/components/SettingProfile';

const MyPage: React.FC = () => {
    return (
        <LayoutSidebar>
            <div>
            <h1>Mi Tienda</h1>
            <StoreDetails />
            </div>
        </LayoutSidebar>
    );
  };
  
  export default MyPage;