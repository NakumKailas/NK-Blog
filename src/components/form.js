import React from "react"
import { RiSendPlaneFill } from "react-icons/ri"

import * as contactStyle from "./sass/contact.module.scss"

class ContactForm extends React.Component {
  render() {
    return (
      <form
        method="post"
        name="form"
        className={contactStyle.contactForm}
        action={this.props.action}
      >
        <div>
          <label htmlFor="fullname">Full name</label>
          <input type="text" id="fullname" name="fullname" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">
          Send <RiSendPlaneFill />
        </button>
      </form>
    )
  }
}

export default ContactForm
