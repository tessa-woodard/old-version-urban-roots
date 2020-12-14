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
        <div className={classes.imgBlock1} />
      </div>
      <div className={classes.second}>
        <div className={classes.imgBlock} />
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            Signs of Overwatered{' '}
            <span className={classes.flowers}> Plants </span>: What to Look For
          </h2>
          <p className={classes.secondText}>
            According to Mast, keep an eye out for the five signs of overwatered
            plants to keep your greenery in good health:
          </p>
          <p className={classes.secondText}>
            Sign one: If a plant is overwatered, it will likely develop yellow
            or brown, limp leaves as opposed to dry, crispy leaves (which are
            actually a sign of too little water). Wilting leaves usually mean
            that root rot has set in and the roots can no longer absorb water.
          </p>
          <p className={classes.secondText}>
            Sign two: If your plant is dropping old and new leaves alike, you’ve
            likely overwatered. Remember that the shedding leaves can be green,
            brown, or yellow.
          </p>
          <p className={classes.secondText}>
            Sign three: If the base of the plant stem begins to feel mushy or
            unstable, you’ve overwatered. The soil can even begin to give off a
            rotten odor.
          </p>
          <p className={classes.secondText}>
            Sign four: If the leaves develop brown spots encircled by a yellow
            halo, that’s a bacteria infection due to overwatering.
          </p>
          <p className={classes.secondText}>
            Sign five: Similar to sign number three, fungus or mold can grow
            directly on top of the soil if you’ve overwatered time and time
            again.
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
