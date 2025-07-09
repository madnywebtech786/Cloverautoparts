import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import WhyChooseUs from '../components/WhyChooseUs'

export default function page() {
  return (
    <>
    <BreadCrumb name={'Services'} />
    <WhyChooseUs page={true} />
    </>
  )
}
