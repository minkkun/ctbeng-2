import React from 'react'

type StatItemProps = {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="single-number">
      <h5>
        <span className="counter">{value}</span>
      </h5>
      <p>{label}</p>
    </div>
  )
}

export default StatItem 