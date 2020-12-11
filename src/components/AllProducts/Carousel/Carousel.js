import React from 'react'
import { useStyles } from './useStyles'

const Images = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.first}>
        <h2 className={classes.title}>About Us</h2>
        <span className={classes.subtitle}>
          Where plants are our inspiration.
        </span>
      </div>
    </>
  )
}

export default Images
