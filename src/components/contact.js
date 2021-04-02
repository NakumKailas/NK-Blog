import React from "react"
import { Link } from "gatsby"
import { MdEmail } from "react-icons/md"

import * as contactStyle from "./sass/contact.module.scss"

const contactSection = () => {
  return (
    <section className={contactStyle.contactSection}>
      <h1>
        Get In Touch<span className={contactStyle.afterLine}></span>
      </h1>
      <p>
        Currently I'm looking for new opportunities, my inbox is always open.
      </p>
      <Link to="/contact">
        <button>
          Contact Me <MdEmail />
        </button>
      </Link>
    </section>
  )
}

export default contactSection
