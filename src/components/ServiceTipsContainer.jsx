import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadset } from "react-icons/pi";
import { VscPass } from "react-icons/vsc";
import ServiceTips from './ServiceTips';

const ServiceTipsContainer = () => {
  return (
    <div className='flex justify-center gap-8 flex-wrap mt-12 pb-12'>
    <ServiceTips icon={<TbTruckDelivery color='white' size={32} />} title='FREE AND FAST DELIVERY' desc='Free delivery for all orders over $140' />
    <ServiceTips icon={<PiHeadset color='white' size={32} />} title='24/7 CUSTOMER SERVICE' desc='Friendly 24/7 customer support' />
    <ServiceTips icon={<VscPass color='white' size={32} />} title='MONEY BACK GUARANTEE' desc='We reurn money within 30 days' />
    </div>
  )
}

export default ServiceTipsContainer