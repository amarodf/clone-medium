import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    height: '100px',
    boxShadow: 'none',
    borderBottom:'2px solid rgb(128,128,128)',
    borderColor: 'rgb(128,128,128)',
    margin: '0 0 2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgb(0,0,0)',
  },
  image: {
    marginLeft: '15px',
  },
}));
