import React from 'react'
import cn from '../lib/utils'

type CardPropsType = {
    title?: string,
    description?: string,
    className?: string,
    children: React.ReactNode,
}

export default function Card({
    title,
    description,
    className,
    children
} : CardPropsType) {
  return (
    <div className={cn("border border-gray-300 rounded-md px-5 py-5 w-full max-w-lg", className)}>
        <div className="space-y-2">
            {title && <h1 className="text-2xl font-semibold">{title}</h1>}
            {description && <p className='text-lg text-gray-600'>{description}</p>}
        </div>
        {children}
    </div>
  )
}
