import React from 'react'
import { useStyles } from './useStyles'

const Shipping = () => {
  const classes = useStyles()
  return (
    <>
      {/* <div className={classes.first}>
        <h2 className={classes.title}>About Us</h2>
        <span className={classes.subtitle}>
          Where plants are our inspiration.
        </span>
      </div> */}
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>Shipping Rates {''}</h2>
          <p className={classes.secondText}>
            Free shipping on orders $75 or more*!
          </p>
          <p className={classes.secondText}>
            Large Plants (8"+) are not eligible for free shipping.
          </p>
        </div>
        <div className={classes.imgBlock} />
      </div>
    </>
  )
}

export default Shipping
