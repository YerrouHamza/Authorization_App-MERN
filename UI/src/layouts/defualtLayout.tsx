import React, { ReactNode } from 'react'
import Navbar from '../views/navbar'

export default React.memo(function DefualtLayout({children}: {
    children: ReactNode,

}) {
  return (
    <main className='max-w-screen-xl m-auto py-5 h-screen'>
        <Navbar />
        {children}
    </main>
  )
})