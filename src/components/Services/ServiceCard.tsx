import Image from 'next/image'
import React from 'react'

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  iconWidth: number;
  iconHeight: number;
}

const ServiceCard = ({ icon, title, description, iconWidth, iconHeight }: ServiceCardProps) => {
  return (
    <div className="col-md-6 col-xl-3">
      <div className="single-service">
        <div className="service-icon">
          <Image width={iconWidth} height={iconHeight} src={icon} alt={title} />
        </div>
        <div className="service-content">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard 