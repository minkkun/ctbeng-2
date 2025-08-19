import React from 'react'

type SectionHeadingProps = {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="area-heading">
      <h3 className="line">{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}

export default SectionHeading 