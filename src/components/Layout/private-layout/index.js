// import {useAuth} from '@/cms-pulse/src/pages/authContext'
import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
// import {apiGetUserProfile} from '@/cms-pulse/src/services/auth'

function PrivateLayout({ children }) {
    //   const navigate = useNavigate()
    //   const auth = useAuth()

    //   const getUserProfile = () => {
    //     if (!localStorage.getItem('token')) {
    //       return navigate('/login')
    //     }
    //     if (!auth.user) {
    //       apiGetUserProfile()
    //         .then((res) => {
    //           if (res) {
    //             auth.updateAuthStatus({loadingAuth: false})
    //             auth.updateProfile({...res.data})
    //           }
    //         })
    //         .catch((error) => {
    //           console.log(error)
    //           // return navigate('/login')
    //         })
    //     }
    //   }

    //   useEffect(() => {
    //     getUserProfile()
    //   }, [])

    return (
        <div className="private-layout">

            <h1>Header in PrivateLayout</h1>

            {children}
        </div>
    );
}

export default PrivateLayout;
