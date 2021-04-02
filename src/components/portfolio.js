import React from "react"

import * as portfolioStyle from "./sass/portfolio.module.scss"

const portfolioSection = () => {
  return (
    <section className={portfolioStyle.portfolioSection}>
      <h1>
        Featured Projects<span className={portfolioStyle.afterLine}></span>
      </h1>
      <div className={portfolioStyle.gridContainer}>
        <div>
          <img
            src="/images/wireless-energy-meter.jpg"
            alt="wireless-energy-meter"
          />
        </div>
        <div>
          <img
            src="/images/circuit-diagram-of-switch.jpg"
            alt="automatic-washroom-light"
          />
        </div>
        <div>
          <img
            src="/images/smart-irrigation-system.jpg"
            alt="smart-irrigation-system"
          />
        </div>
      </div>
    </section>
  )
}

export default portfolioSection
