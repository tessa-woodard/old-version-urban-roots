import React from 'react'
import { useStyles } from './useStyles'

const Images = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.first}>
        <h2 className={classes.title}>All Plants</h2>
        <span className={classes.subtitle}>
          With so many plants online to choose from and grow with, it’s hard to
          pick just one for plant delivery!
        </span>
      </div>
    </>
  )
}

export default Images
