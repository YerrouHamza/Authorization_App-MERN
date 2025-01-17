import React from "react"
import { Link } from "react-router-dom"
import useAuthrization from "../customHooks/useAuthrization"
import NavActions from "../components/navActions"

const navList = [
    {
        title: 'home',
        path: '/'
    },
    {
        title: 'About Me',
        path: '/about-me'
    }
]

export default React.memo(function Navbar () {
    const {isLogin} = useAuthrization()
    return (
        <nav className="flex justify-between items-center px-5 py-4 bg-slate-100 rounded-lg shadow-sm">
            <Link to='/' className="text-2xl font-bold">LOGO</Link>
            {isLogin && <NavItems items={navList} />}
            <NavActions />
        </nav>
    )
})

const NavItems = ({items}: {
    items: { title: string, path: string }[]
}) => {
    return (
        <ul className="flex justify-center items-center gap-7">
            {items.map((item) => {
                return (
                    <Link 
                        key={item.path} 
                        to={item.path}
                        className="text-lg font-medium capitalize hover:text-blue-500"
                    >
                        {item.title}
                    </Link>
                )
            })}
        </ul>
    )
}
 