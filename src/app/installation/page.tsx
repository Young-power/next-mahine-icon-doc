import ButtonTop from '@/components/goTop/ButtonTop'
import Exemple from '@/components/install/exemples/Exemple'
import Install from '@/components/install/Install'
import Use from '@/components/install/Use'
import React from 'react'

const Installation = () => {
  return (
    <div className='py-24'>
      <ButtonTop />
      <Install />
      <Use />
      <Exemple />
    </div>
  )
}

export default Installation
