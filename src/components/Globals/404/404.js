import React from 'react'
import './404.css'

const Error = () => {
  return (
    <>
      <div className="error-container">
        <div className="boo-wrapper">
          <div className="boo">
            <div className="face" />
          </div>
          <div className="shadow" />
          <h1>Whoops!</h1>
          <p>
            We couldn't find the page you
            <br />
            were looking for.
          </p>
        </div>
      </div>
    </>
  )
}

export default Error
