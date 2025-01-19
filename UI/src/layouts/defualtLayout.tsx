import React, { ReactNode } from 'react'
import Navbar from '../views/navbar'
import LoaderOverlay from '../components/loaderOverlay'
import useLoader from "../customHooks/useLoader";

export default React.memo(function NonLoginLayout({children}: {children: ReactNode}) {
  const {isLoading} = useLoader();

  return (
    <main className='max-w-screen-xl m-auto py-5 px-4 h-screen'>
        {isLoading && <LoaderOverlay />}
        <div className='space-y-10 h-full'>
          <Navbar />
          {children}
        </div>
    </main>
  )
})