import React from 'react'
import PortfolioItem from './PortfolioItem'
import PortfolioFilter from './PortfolioFilter'
import SectionHeading from '@/components/shared/SectionHeading'

type Props = {
  showHeading?: boolean;
}

const Portfolio = ({ showHeading = true }: Props) => {
  const filters = [
    { label: 'all', filter: '*', isActive: true },
    { label: 'buildings', filter: '.popular' },
    { label: 'offices', filter: '.latest' },
    { label: 'rebuild', filter: '.following' },
    { label: 'architecture', filter: '.upcoming' }
  ]

  const portfolioItems = [
    {
      image: "/images/1.jpg.webp",
      category: "construction",
      title: "Desert Work, Dubai",
      link: "portfolio-details.html",
      filterClasses: "following"
    },
    {
      image: "/images/2.jpg.webp",
      category: "construction",
      title: "Desert Work, Dubai",
      link: "portfolio-details.html",
      filterClasses: "latest popular upcoming"
    },
    {
      image: "/images/3.jpg.webp",
      category: "construction",
      title: "Desert Work, Dubai",
      link: "portfolio-details.html",
      filterClasses: "latest following"
    },
    {
      image: "/images/4.jpg.webp",
      category: "construction",
      title: "Desert Work, Dubai",
      link: "portfolio-details.html",
      filterClasses: "latest upcoming"
    }
  ]

  return (
    <section className="portfolio_area area-padding" id="portfolio">
      <div className="container">
        
        {showHeading && (
          <SectionHeading 
            title="Our Recent Project" 
            subtitle="Together female let signs for for fish fowl may first." 
          />
        )}

        <PortfolioFilter filters={filters} />
        
        <div className="filters-content">
          <div className="row portfolio-grid">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                image={item.image}
                category={item.category}
                title={item.title}
                link={item.link}
                filterClasses={item.filterClasses}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio