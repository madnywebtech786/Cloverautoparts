import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import About from '../components/About'

export default function page() {
  return (
    <>
    <BreadCrumb name={'About Us'} />
    <About />
    </>
  )
}
