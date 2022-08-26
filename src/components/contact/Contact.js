import React from 'react'
import Title from '../title/Title'
import './Contact.scss'

const Contact = () => {
  return (
    <>
        <div className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="info">
                            <Title title="Hire Me." description="I am available for freelance work. Connect with me via phone: 01923 088574 or email: admin@example.com"/>
                            <div class="form-wrapper">
                                <form>
                                    <label for="item01">
                                        <input type="text" name="name" id="item01" placeholder="Your Name *" value="" />
                                    </label>

                                    <label for="item02">
                                        <input type="text" name="email" id="item02" placeholder="Your email *" value=""/>
                                    </label>

                                    <label for="item03">
                                        <input type="text" name="subject" id="item03" placeholder="Write a Subject" value=""/>
                                    </label>

                                    <label for="item04">
                                        <textarea type="text" id="item04" name="message" placeholder="Your Message"></textarea>
                                    </label>

                                    <button class="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-wrapper">
                            <img src="images/about-6.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact