import Image from 'next/image'
import React from 'react'

type PortfolioItemProps = {
  image: string;
  category: string;
  title: string;
  link: string;
  filterClasses: string;
}

const PortfolioItem = ({ image, category, title, link, filterClasses }: PortfolioItemProps) => {
  return (
    <div className={`col-lg-6 col-md-6 all ${filterClasses}`}>
      <div className="single_portfolio">
        <Image 
          width={555} 
          height={419}
          className="img-fluid w-100"
          src={image}
          alt={title}
        />
        <div className="short_info">
          <p>{category}</p>
          <h4>
            <a href={link}>{title}</a>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem 