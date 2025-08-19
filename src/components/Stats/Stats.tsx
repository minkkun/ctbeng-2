import Image from 'next/image'
import React from 'react'
import StatItem from './StatItem'

type Props = {}

const Stats = (props: Props) => {
  const stats = [
    { value: "15K+", label: "happy customer" },
    { value: "10K+", label: "Project Done" },
    { value: "9/10", label: "Average Rating" }
  ]

  return (
    <section className="number-area" id="number-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-5">
            <div className="number-img">
              <Image width={368} height={462} src="/images/about2.png.webp" alt="" />
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <div className="number-content">
              <h4>
                Providing Personalized And <br />
                High Quality Service .
              </h4>
              <p>
                Grass bearing make open multiply that may fly cattle gathering
                be unto
                <br /> void moving. Blessed one evening had them heaven
                <br /> divide said heaven whose brought he. Give It fowl
                green.
              </p>
              <div className="number-wrapper">
                {stats.map((stat, index) => (
                  <StatItem
                    key={index}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats