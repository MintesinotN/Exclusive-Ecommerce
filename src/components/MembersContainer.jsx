import React from 'react'
import Member from './Member'

const MembersContainer = () => {
  return (
    <div className='grid max-sm:px-8 gap-y-12 sm:grid-cols-3 gap-3 lg:gap-8'>
        <Member image='./assets/About1.png' title='Tom Cruise' desc='Founder & Chairman' />
        <Member image='./assets/About2.png' title='Emma Watson' desc='Managing Director' />
        <Member image='./assets/About3.png' title='Will Smith' desc='Product Designer' />
    </div>
  )
}

export default MembersContainer