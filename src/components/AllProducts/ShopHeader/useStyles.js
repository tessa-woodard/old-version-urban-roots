import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  first: {
    padding: '90px 0',
    height: '100%',
    textAlign: 'center',
    backgroundImage:
      "url('https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/shop-header.jpeg?raw=true')",
    backgroundAttachment: 'fixed',
    backgroundPosition: '0% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'right'
    }
  },

  title: {
    fontSize: 100,
    fontWeight: 600,
    margin: 0,
    fontFamily: "'Playfair Display', serif",
    color: 'white',
    marginBottom: '1rem'
  },

  subtitle: {
    fontSize: 26,
    color: 'white',
    fontStyle: 'italic',
    letterSpacing: 0.5,
    display: 'block',
    fontWeight: 'bold'
  }
}))
