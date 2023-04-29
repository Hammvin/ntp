import React from 'react'

const Contact = () => {
  

  return (
    <div className='container-fluid'>
      <div style={{padding: '2rem'}}></div>
      <div className='header'>
        <p className='header-text'>Contact US</p>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <p>
           We welcome your feedback and inquiries. If you have any questions or concerns, please feel free to contact us using the 
           information provided below:
          </p>
          <div className='contact'>
            <ul>
              <li>
                <span className='contact-items'>Address:</span> Nairobi CBD
              </li>
              <li>
                <span className='contact-items'>Phone:</span> (+254) 700 000 000
              </li>
              <li>
                <span className='contact-items'>Email:</span> Example@test.ke
              </li>
            </ul>
          </div>
          <p>
            You can also reach follow us on social media for updates and news on our handles below the page.
          </p>
          <p>
            If you are interested in volunteering or becoming a member of the party, please fill out our volunteer form or 
            membership form. We'll get back to you as soon as possible.
          </p>
          <br />
          <hr />
          <br /> 
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
      </div>
      <br /><br />
      <div className="row">
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
        <div className="col-sm-12 col-md-8 col-lg-8">
        <p>
            Thank you for your interest in our party. We look forward to hearing from you.
          </p>
          <br /><br />
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
      </div>
    </div>
  )
}

export default Contact