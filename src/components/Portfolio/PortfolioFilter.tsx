import React from 'react'

type FilterItem = {
  label: string;
  filter: string;
  isActive?: boolean;
}

type PortfolioFilterProps = {
  filters: FilterItem[];
}

const PortfolioFilter = ({ filters }: PortfolioFilterProps) => {
  return (
    <div className="filters portfolio-filter">
      <ul>
        {filters.map((filter, index) => (
          <li 
            key={index}
            className={filter.isActive ? 'active' : ''} 
            data-filter={filter.filter}
          >
            {filter.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PortfolioFilter 