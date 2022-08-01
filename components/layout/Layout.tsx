import React, { ReactNode } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='h-screen w-screen overflow-y-scroll scrollbar-hide flex flex-col'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout