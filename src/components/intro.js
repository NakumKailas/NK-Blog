import React from "react"
import { HiDocumentDownload } from "react-icons/hi"

import * as aboutStyle from "./sass/about.module.scss"

const introSection = () => {
  return (
    <section className={aboutStyle.introSection}>
      <h1>
        About Me<span className={aboutStyle.afterLine}></span>
      </h1>
      <ul>
        <li>
          » Hello! I am <span>Kailas</span>. Graduated in{" "}
          <span>Electronics &amp; Communication Engineering</span> based in
          Gujarat, India.
        </li>
        <li>
          » Interested in Embedded System, IOT, WebDev, E-commerce Executive.
        </li>
      </ul>
      <p>Here are a few tools &amp; technologies I've been working with:</p>
      <div>
        <ul>
          <li>HTML &amp; CSS</li>
          <li>Bootstrap</li>
          <li>E-commerce Handling</li>
          <li>Wordpress</li>
        </ul>
        <ul>
          <li>Arduino interfaces</li>
          <li>C Language</li>
          <li>MS Office</li>
          <li>Figma</li>
        </ul>
      </div>
      <a href="kailas_nakum-resume.pdf" download>
        <button>
          Get CV <HiDocumentDownload />
        </button>
      </a>
    </section>
  )
}

export default introSection
