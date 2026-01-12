import { Outlet } from 'react-router';
import UserTabs from '../../widgets/UserTabs/UserTabs';

const UserLayoutWithTabs = () => {

    return (
        <div>
            <UserTabs></UserTabs>
            <Outlet></Outlet>
        </div>
    )
}

export default UserLayoutWithTabs;