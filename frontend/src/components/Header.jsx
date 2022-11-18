import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { useEffect } from 'react'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'


function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    useEffect(() => {
        console.log(user)
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <header className='header'>
            <ul> 
                {user ? (
                    <li>
                        <button type='submit' className='btn btn-block' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>) : (<>
                    <li>
                        <Link to='/login'>
                            <FaSignInAlt /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/register'>
                            <FaUser /> Register
                        </Link>
                    </li>
                </>)}  
                
            </ul>
        </header>
    )
}

export default Header