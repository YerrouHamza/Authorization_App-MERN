import React from "react"
import { Link } from "react-router-dom"
import cn from "../lib/utils"


type ButtonType = {
    type?: 'button' | 'link',
    variant: 'primary' | 'secondary',
    toPath?: string,
    className?: string,
    onClick?: () => void,
    children: React.ReactNode,
}

export default React.memo(function button({
    type = 'button',
    variant = 'primary',
    toPath = '',
    className,
    onClick,
    children,
}: ButtonType) {
    const variantStyle = {
        "primary": "bg-blue-500 text-white border-blue-600 hover:bg-opacity-95",
        "secondary": "hover:bg-blue-500 hover:text-white hover:border-blue-600"
    }

    return (
        <ButtonComponent
            toPath={toPath} 
            className={cn(
                'border border-gray-400 text-md px-3 py-1.5 rounded-md transition-colors duration-200 ease-in-out',
                variantStyle[variant],
                className
            )}
            type={type}
            onClick={onClick}
            variant={variant}
        >
            {children}
        </ButtonComponent>
    )
})


const ButtonComponent = ({
    type,
    toPath,
    className,
    onClick,
    children,
}: ButtonType) => {
    const buttonProps = {className}
    
    if(type === 'link'){
        if(!toPath) throw console.error('"ToPath" prop is requerd when button type is Link');
        return <Link to={toPath} {...buttonProps}>{children}</Link>
    }

    return (
        <button onClick={onClick} {...buttonProps}>{children}</button>
    )
}
