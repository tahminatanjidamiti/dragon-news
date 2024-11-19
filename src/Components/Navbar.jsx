import { useContext } from 'react';
import UserIcon from '../assets/user.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user.name}</div>
            <div className='nav space-x-5'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='login flex gap-2 items-center'>
                <div>
                    <img src={UserIcon} alt="User icon coming soon!" />
                </div>
                <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;