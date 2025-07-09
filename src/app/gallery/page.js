import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Gallery from '../components/Gallery'

export default function page() {
  return (
    <>
    <BreadCrumb name={'Gallery'} />
    <Gallery />
    </>
  )
}
