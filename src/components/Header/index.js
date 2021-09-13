import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scroll, setScroll] = useState('')
  
  const toggle = () => {
      setIsOpen(!isOpen)
      isOpen ? setScroll('{overflow-y: hidden}') : setScroll('{overflow-y: visible}')
  }
  
  return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
    </>
  )
}

export default Header
