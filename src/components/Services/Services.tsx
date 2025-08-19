import React from 'react'
import ServiceCard from './ServiceCard'
import SectionHeading from '@/components/shared/SectionHeading'

type Props = {}

const Services = (props: Props) => {
  const services = [
    {
      icon: "/images/i1.png.webp",
      title: "Architecture Design",
      description: "You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth",
      iconWidth: 92,
      iconHeight: 92
    },
    {
      icon: "/images/i2.png.webp",
      title: "Building Construction",
      description: "You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth",
      iconWidth: 83,
      iconHeight: 83
    },
    {
      icon: "/images/i3.png.webp",
      title: "Building Renovation",
      description: "You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth",
      iconWidth: 53,
      iconHeight: 92
    },
    {
      icon: "/images/i4.png.webp",
      title: "Building Maintenance",
      description: "You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth",
      iconWidth: 82,
      iconHeight: 82
    }
  ]

  return (
    <section className="service-area area-padding">
      <div className="container">
        <SectionHeading 
          title="What We Provide" 
          subtitle="Together female let signs for for fish fowl may first." 
        />
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconWidth={service.iconWidth}
              iconHeight={service.iconHeight}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services