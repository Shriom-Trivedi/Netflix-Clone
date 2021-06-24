import React from 'react'
import PlansScreen from './PlansScreen';
import './ProfileScreen.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import logo from '../netflix-logo.png'


const ProfileScreen = () => {
    const user = useSelector(selectUser);
    const history = useHistory();

    return (
        <div className='profileScreen'>
            <div classname='nav'>
            <img
                    onClick={() => history.push("/")}
                    className='nav-logo'
                    src = {logo} 
                    alt='logo' 
                />
                <img
                    onClick={() => history.push("/profile")}
                    className='nav-avatar'
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' 
                    alt='avatar'
                />
            </div>
            <div className='profileScreen-body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen-info'>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' alt='avatar' />
                    <div className='profileScreen-details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen-plans'>
                            <h3>Plans</h3>

                            <PlansScreen />
                            <button onClick={() => auth.signOut()}
                             className='profileScreen-signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
