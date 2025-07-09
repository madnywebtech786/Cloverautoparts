import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Testimonials from '../components/Testimonials'

export default function page() {
  return (
    <>
    <BreadCrumb name={'Testimonials'} />
    <Testimonials page={true} />
    </>
  )
}
