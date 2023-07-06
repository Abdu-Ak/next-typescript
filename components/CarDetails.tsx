import { CarProps } from '@/types';
import React from 'react'

interface CarDetailsprops {
    isOpen : boolean ;
    closeModal :() => void
    car : CarProps
}

const CarDetails = ({isOpen , closeModal , car} : CarDetailsprops) => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails