import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <>
         <Link to="/" >
         <button>Home</button>
         </Link>
        <Link to="/menu">
        <button>Menu</button>
        </Link>
        <Link to="/admin">
        <button>Admin</button>
        </Link>
        </>
    )
}