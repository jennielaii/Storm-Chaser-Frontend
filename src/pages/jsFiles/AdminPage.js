import '../cssFiles/AdminPage.css';

import AdminUserItem from '../../components/jsFiles/AdminUserItem';
import Footer from '../../components/jsFiles/Footer';

import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminPage() {
    return (
        <div className='AdminPage'>
            <img alt='Storm Chasers Logo' />
            <Link>Login</Link>
        </div>
    )
}

export default AdminPage;