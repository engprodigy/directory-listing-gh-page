import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { useStickyState } from './Admin/listItems.js';
import Chip from '@material-ui/core/Chip';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles(theme => ({
  table: {
    // minWidth: 700,
    //maxWidth: 700,
  },
  roots: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function CustomizedTables() {
   // add default values
   var tempListingArray = [];
   tempListingArray.push({
    name: "P&G",
    description: "soap and detergent",
    phonenumber: "08181373329",
    email:"pg@pg.com",
    websiteurl: "https://procter.com",
    categories: [],
    images: ""
    });
    tempListingArray.push({
      name: "Dangote",
      description: "Cement",
      phonenumber: "08034105274",
      email:"admin@dangote.com",
      websiteurl: "https://dangote.com",
      categories: [],
      images: ""
      });
      tempListingArray.push({
        name: "Guiness",
        description: "beer and drinks",
        phonenumber: "08181373329",
        email:"kolbello@yahoo.com",
        websiteurl: "https://guiness.com",
        categories: [],
        images: ""
        });
  
  const stickyValue = window.localStorage.getItem("businesslisting");
    if(stickyValue === null){
      window.localStorage.setItem("businesslisting", JSON.stringify([...tempListingArray]));
    }
 
  const classes = useStyles();
  const [
    businessListings
  ] = useStickyState( [] , "businesslisting");

  return (
      
    <React.Fragment>
    <p>&nbsp;</p> 
    <p>&nbsp;</p> 
    <Container maxWidth="lg" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
         Business Directory Listing &nbsp;
        </Typography>
        
    </Container>
    <p>&nbsp;</p> 
    <Container component="main" maxWidth="lg">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="left">Phone Number</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Website URL</StyledTableCell>
            <StyledTableCell align="left">Category</StyledTableCell>
            <StyledTableCell align="left">Image</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {businessListings.map((row) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" align="left">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.description}</StyledTableCell>
              <StyledTableCell align="left">{row.phonenumber}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.websiteurl}</StyledTableCell>
              <StyledTableCell align="left">{row.categories.map((category) => (
                
                <div className={classes.roots} noValidate autoComplete="off">
                <Chip
                  size="small"
                  label={category}
                  color="black"
                  />
                </div>
                
                ))}</StyledTableCell>
              <StyledTableCell align="left">{row.images}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <p></p>
    <p></p>
    <p></p>
    <Grid container justify="flex-end">
            <Grid item>
              <Link href="/protected" variant="body2">
                Admin Login Here
              </Link>
            </Grid>
          </Grid>
    </Container>
    </React.Fragment>
    
  );
}
