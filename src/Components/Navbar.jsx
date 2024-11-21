import { useContext } from 'react';
import UserIcon from '../assets/user.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    // console.log(user);
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.email}</div>
            <div className='nav space-x-5'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='login flex gap-2 items-center'>
                <div>
                    {
                       user && user?.email ? <div> <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="User picture!" />  
                       <p>{user?.displayName}</p> </div> : <img src={UserIcon} alt="User icon coming soon!" />
                    }
                    
                </div>
                {
                    user && user?.email ? (<button onClick={logOut} className='btn btn-neutral rounded-none'>Log-Out</button>) : (<Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>)
                }
                
            </div>
        </div>
    );
};

export default Navbar;