import React, { ReactNode } from 'react'
import Navbar from '../views/navbar'

export default React.memo(function NonLoginLayout({isLogin = true, children}: {
  isLogin?: boolean,
  children: ReactNode,

}) {
  return (
    <main className='max-w-screen-xl m-auto py-5 h-screen space-y-10'>
        <Navbar isLogin={isLogin} />
        {children}
    </main>
  )
})