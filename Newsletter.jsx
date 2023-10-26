import React from "react";


import { Button, Checkbox, Form } from 'semantic-ui-react'

function newsletter(){
    return(

      <div className="newsletter-signup">
      <h2 className="section-title">Subscribe for the Newsletter</h2>
      <p>Stay updated with the latest articles and tutorials.</p>
      <form className="newsletter-form" action="/subscribe" method="POST">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit" className="newsletter-button">
          Sign Up
        </button>
      </form>
    </div>
)
}
export default newsletter
