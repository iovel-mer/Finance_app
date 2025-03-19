import Pageheader from '@/components/page-header'
import React from 'react'

function Layout({children}) {
  return (
    <>
    <Pageheader className='my-8'/>
    <main>{children}</main>
    <footer></footer>
    </>
  )
}

export default Layout