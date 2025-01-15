import React from "react"
import { Link } from "react-router-dom"
import Button from "../components/button"


export default React.memo(function Navbar () {
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

    return (
        <div className="flex justify-between items-center px-4 py-5">
            <NavLogo />
            <NavItems items={navList} />
            <NavActions />
        </div>
    )
})


const NavLogo = () => {
    return (
        <Link to='/' className="text-2xl font-bold">LOGO</Link>
    )
}

const NavItems = ({items}: {
    items: { title: string, path: string }[]
}) => {
    return (
        <nav>
            <ul className="flex justify-center items-center gap-4">
                {items.map((item) => {
                    return (
                        <Link 
                            key={item.path} 
                            to={item.path} 
                            className="text-lg capitalize"
                        >{item.title}</Link>
                    )
                })}
            </ul>
        </nav>
    )
}

const NavActions = () => {
    return (
        <div className="flex items-center gap-4">
            <Button type='link' toPath="/login" variant='secondary'>Login</Button>
            <Button type='link' toPath='/register' variant="primary">Register</Button>
        </div>
    )
}
 