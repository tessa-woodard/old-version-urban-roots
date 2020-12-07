import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  first: {
    padding: '110px 0',
    height: '100%',
    textAlign: 'center',
    backgroundImage:
      "url('https://images.pexels.com/photos/1213049/pexels-photo-1213049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'right'
    }
  },

  title: {
    fontSize: 50,
    fontWeight: 600,
    margin: 0,
    fontFamily: "'Playfair Display', serif",
    color: 'black'
  },

  subtitle: {
    fontSize: 28,
    color: 'black',
    letterSpacing: 0.5,
    display: 'block',
    fontWeight: 500
  },

  second: {
    display: 'flex',
    justifyContent: ' space-around',
    margin: '80px 0',
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

  flowers: {
    color: 'olivedrab'
  },

  secondTitle: {
    fontSize: '2.5em',
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
    width: '38%',
    backgroundImage:
      'url("https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/inspiration/collage.jpg?raw=true")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      width: '60%',
      height: 350
    }
  },

  third: {
    backgroundColor: '#FEFDF9',
    textAlign: 'center',
    padding: '40px 0'
  },

  thirdTitle: {
    fontSize: 38,
    lineHeight: '1.4em',
    marginBottom: 20,
    fontFamily: "'Playfair Display', serif",
    fontWeight: 'bold'
  },

  thirdSubtitle: {
    fontSize: 20,
    lineHeight: '29px',
    width: 550
  },

  expert: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 50,
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      flexDirection: 'row'
    }
  },

  // expertImg: {
  //   borderRadius: '50%'
  // },

  expertTitle: {
    fontSize: 14,
    lineHeight: '2em',
    fontWeight: 500,
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    marginTop: 18
  },

  expertName: {
    fontSize: 18,
    color: '#afafaf',
    margin: '2px 0 4px'
  }
}))
