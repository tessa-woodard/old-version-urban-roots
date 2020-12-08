import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  second: {
    display: 'flex',
    justifyContent: ' space-around',
    margin: '250px 0',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },

  text: {
    width: '38%',
    [theme.breakpoints.down('md')]: {
      width: '60%',
      marginBottom: 20
    }
  },

  secondTitle: {
    fontSize: '4em',
    lineHeight: '1.4em',
    marginBottom: 40,
    fontFamily: "'Playfair Display', serif",
    letterSpacing: '1.1px',
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.7em'
    }
  },

  secondText: {
    fontSize: 17,
    lineHeight: '29px',
    marginBottom: 40,
    color: 'rgba(0,0,0,0.5)',
    textAlign: 'justify'
  },

  imgBlock: {
    width: '48%',
    backgroundImage:
      'url("https://www.planthouse.us/uploads/b/278d48fb63e83612cb8344eefebec6c07eab6d8be3effc6e03ed52528bfb25b5/Screen%20Shot%202020-11-04%20at%201.53.12%20PM_1604526838.png?width=2400")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      width: '60%',
      height: 350
    }
  }
}))
