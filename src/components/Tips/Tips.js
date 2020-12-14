import React from 'react'
import { useStyles } from './useStyles'

const Tips = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.first}>
        <h2 className={classes.title}>About Us</h2>
        <span className={classes.subtitle}>
          Where plants are our inspiration.
        </span>
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            What Does New <span className={classes.flowers}> Growth </span> Look
            Like? {''}
          </h2>
          <p className={classes.secondText}>
            You aren’t the only one excited for warmer weather–have you noticed
            your plants shooting up new growth like wild now that the days are
            getting warmer and brighter?
          </p>
          <p className={classes.secondText}>
            During the winter months, growth generally slows for most
            houseplants. Spring and summer is when they awaken from their winter
            dormancy and use the seasons’ extra sunlight and humidity to get
            growing again!
          </p>
          <p className={classes.secondText}>
            Do you know how to spot new growth? Often times new growth is
            confused with a dying leaf or a plant in distress, when actually the
            opposite is true! Can you spot the new growth in the photos below?
          </p>
        </div>
        <div className={classes.imgBlock} />
      </div>
      <div className={classes.second}>
        <div className={classes.imgBlock} />
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            What Does New <span className={classes.flowers}> Growth </span> Look
            Like? {''}
          </h2>
          <p className={classes.secondText}>
            You aren’t the only one excited for warmer weather–have you noticed
            your plants shooting up new growth like wild now that the days are
            getting warmer and brighter?
          </p>
          <p className={classes.secondText}>
            During the winter months, growth generally slows for most
            houseplants. Spring and summer is when they awaken from their winter
            dormancy and use the seasons’ extra sunlight and humidity to get
            growing again!
          </p>
          <p className={classes.secondText}>
            Do you know how to spot new growth? Often times new growth is
            confused with a dying leaf or a plant in distress, when actually the
            opposite is true! Can you spot the new growth in the photos below?
          </p>
        </div>
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            What Does New <span className={classes.flowers}> Growth </span> Look
            Like? {''}
          </h2>
          <p className={classes.secondText}>
            You aren’t the only one excited for warmer weather–have you noticed
            your plants shooting up new growth like wild now that the days are
            getting warmer and brighter?
          </p>
          <p className={classes.secondText}>
            During the winter months, growth generally slows for most
            houseplants. Spring and summer is when they awaken from their winter
            dormancy and use the seasons’ extra sunlight and humidity to get
            growing again!
          </p>
          <p className={classes.secondText}>
            Do you know how to spot new growth? Often times new growth is
            confused with a dying leaf or a plant in distress, when actually the
            opposite is true! Can you spot the new growth in the photos below?
          </p>
        </div>
        <div className={classes.imgBlock} />
      </div>
    </>
  )
}

export default Tips
