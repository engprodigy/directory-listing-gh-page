import React, { useReducer, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useStickyState } from './listItems.js';
import DeleteIcon from '@material-ui/icons/Delete';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

export function MaterialUIFormBusinessListingSubmit(props) {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 1,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
  }));
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    debugger
    setPersonName(event.target.value);
  };
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      description: "",
      phonenumber: "",
      email: "",
      websiteurl: "",
      categories: [],
      images: ""
    }
  );
  
  

  const [
    businessListings,
    setCount
  ] = useStickyState( [] , "businesslisting");

  const [
    categories
  ] = useStickyState( [] , "category");

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };
    
    if(data.formInput.name !== "")
    {

      setCount([
        ...businessListings,
        {
          name: data.formInput.name,
          description: data.formInput.description,
          phonenumber: data.formInput.phonenumber,
          email: data.formInput.email,
          websiteurl: data.formInput.websiteurl,
          categories: [...personName],
          images: data.formInput.images
        }
      ]);

    }
    

      evt.target.reset();

      alert("Business Listing Created Succesfully");

  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const classes = useStyles();

  const theme = useTheme();


  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };


  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }


  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>

        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
             Create
             
          </Button>

          <TextField
            label="Name"
            id="margin-normal"
            name="name"
            defaultValue={formInput.email}
            className={classes.textField}
            helperText="Enter Business Name"
            onChange={handleInput}
          />
          
          <TextField
            label="Description"
            id="margin-normal"
            name="description"
            defaultValue={formInput.description}
            className={classes.textField}
            helperText="Enter Business Description"
            onChange={handleInput}
          />

          <TextField
            label="PhoneNumber"
            id="margin-normal"
            name="phonenumber"
            defaultValue={formInput.phonenumber}
            className={classes.textField}
            helperText="Enter Phone Number e.g +2348034105274"
            onChange={handleInput}
          />

          <TextField
            label="Email"
            id="margin-normal"
            name="email"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="e.g. name@gmail.com"
            onChange={handleInput}
          />

          <TextField
            label="Website URL"
            id="margin-normal"
            name="websiteurl"
            defaultValue={formInput.websiteurl}
            className={classes.textField}
            helperText="Enter Website URL e.g https//:xyz.com "
            onChange={handleInput}
          />

         
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-chip-label">Category</InputLabel>
          <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          name="categories"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
          >
          {categories.map((name) => (
            <MenuItem key={name.name} value={name.name} style={getStyles(name.name, personName, theme)}>
              {name.name}
            </MenuItem>
          ))}
          </Select>
          </FormControl>

          <TextField
            label="Images"
            id="margin-normal"
            name="images"
            defaultValue={formInput.Images}
            className={classes.textField}
            helperText="Select One or More Images "
            onChange={handleInput}
          />
           
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
             Create 
             
          </Button>
          
        </form>
      </Paper>
    </div>
  );
}

export function FormDialogBusinessListing(props) {

 

  const { open, onClose } = props
  
  
  return (
    <div>
      
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Create New Business Listing</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
         
          <MaterialUIFormBusinessListingSubmit/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel/Close Modal
          </Button>
        
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  roots: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

 export default function BusinessListing() {

  

  const [dialogIsOpen, setDialogIsOpen] = React.useState(false)

  const [
    businessListings,
    setCount
  ] = useStickyState( [] , "businesslisting");

  const [updateView, setUpdateView] = useState(businessListings.length);

  const openDialog = () => setDialogIsOpen(true)

  const closeDialog = () => {
    setDialogIsOpen(false);
   
    

    const stickyValue =  JSON.parse(window.localStorage.getItem("businesslisting"));
    

    var difference = stickyValue.length - updateView;

    if(updateView !== stickyValue.length)
      {
        var tempListingArray = [];
        for(var i = difference; i > 0; i--)
        {
          var last = stickyValue[stickyValue.length - 1 - (i - 1)];
          
          tempListingArray.push({
            name: last.name,
            description: last.description,
            phonenumber: last.phonenumber,
            email:last.email,
            websiteurl: last.websiteurl,
            categories: [...last.categories],
            images: last.images
            });
        
        setUpdateView((updateView) => ++updateView);

        }
        setCount([
          ...businessListings,
          ...tempListingArray
        ]);
        
      }
    
  }

  const handleRemove = (id) => {

     debugger
     
     const newList = JSON.parse(window.localStorage.getItem("businesslisting")).filter((item) => item.name !== id);
     setCount(newList);
     setUpdateView((updateView) =>newList.length);
     alert("Business Listing Deleted Succesfully");

  }
  const classes = useStyles();

 

  return (
    <React.Fragment>
      <Title>Recent Business Listing</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
           
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Website URL</TableCell>
            <TableCell align="left">Categories</TableCell>
            <TableCell align="left">Images</TableCell>
            <TableCell align="left">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {businessListings.map((row) => (
            <TableRow >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.websiteurl}</TableCell>
              <TableCell align="left">{row.categories.map((category) => (
                
                <div className={classes.roots} noValidate autoComplete="off">
                <Chip
                  size="small"
                  label={category}
                  color="primary"
                  />
                </div>
                
                ))}</TableCell>
              <TableCell align="left">{row.images}</TableCell>
              <TableCell align="left">
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => handleRemove(row.name)}
                  >
                    
                </Button>
               
                </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FormDialogBusinessListing open={dialogIsOpen} onClose={closeDialog} />
      <div className={classes.root}>
      <Fab color="primary" aria-label="add" onClick={openDialog}>
        <AddIcon   />
      </Fab>
     
      <span >{updateView}</span>
      </div>
     
    </React.Fragment>
  );
}