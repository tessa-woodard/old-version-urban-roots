import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  first: {
    padding: '110px 0',
    height: '100%',
    textAlign: 'center',
    backgroundImage:
      "url('https://images.unsplash.com/photo-1568244175035-036b16e89c13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80')",
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
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
    color: 'white'
  },

  subtitle: {
    fontSize: 28,
    color: 'white',
    letterSpacing: 0.5,
    display: 'block',
    fontWeight: 'bold'
  }
}))
