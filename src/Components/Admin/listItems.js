import React, { useReducer, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
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
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export function MaterialUIFormSubmit(props) {
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
    }
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: ""
    }
  );
  
  

  const [
    categories,
    setCount
  ] = useStickyState( [] , "category");

  const handleSubmit = evt => {
    evt.preventDefault();


    let data = { formInput };

    setCount([
      ...categories,
      {
        name: data.formInput.name,
        email: data.formInput.email
      }
    ]);

    // fetch("https://pointy-gauge.glitch.me/api/form", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(response => response.json())
    //   .then((response) => {console.log("Success:", JSON.stringify(response))
      
     
    // }
      
    //   )
    //   .catch(error => console.error("Error:", error));

     
      evt.target.reset();

  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  

  const classes = useStyles();

  console.log(props);

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            id="margin-normal"
            name="name"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="Enter Category Name"
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
        <p> <b>Categories</b></p>
        <ul>
               
                {categories.map(category => (
                  <li key={category.name}>{category.name}</li>
                ))}
              </ul>
      </Paper>
    </div>
  );
}


export function FormDialog(props) {

 

  const { open, onClose } = props
  
  
  return (
    <div>
      
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Create New Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
          
          <MaterialUIFormSubmit/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel/Close Dialog
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function ListView() {

   //add default categories
   var tempCategoriesArray = [];

   tempCategoriesArray.push({
     name:"Retail",
     email: ""
   });

   tempCategoriesArray.push({
    name:"Energy",
    email: ""
  });

  tempCategoriesArray.push({
    name:"Automobile",
    email: ""
  });

  const stickyValue = window.localStorage.getItem("category");
    if(stickyValue === null){
      window.localStorage.setItem("category", JSON.stringify([...tempCategoriesArray]));
    }

  const [
    categories,
    setCount
  ] = useStickyState( [] , "category");

 const [dialogIsOpen, setDialogIsOpen] = React.useState(false)

 const [updateView, setUpdateView] = useState(categories.length);

  const openDialog = () => setDialogIsOpen(true)

  const closeDialog = () => {
    setDialogIsOpen(false);
    const stickyValue =  JSON.parse(window.localStorage.getItem("category"));

    var last = stickyValue[stickyValue.length - 1]

    if(updateView !== stickyValue.length)
    {
      setCount([
        ...categories,
        {
          name: last.name,
          email: last.email
        }
      ]);

      setUpdateView((updateView) => ++updateView);
    }
    
  }
  
  const classes = useStyles();

  return (
    <div className='list-viewer'>
      <List><ListItem button onClick={openDialog}>
      {/* <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon> */}
       <div className={classes.root}>
      <Fab color="primary" aria-label="add" onClick={openDialog}>
        <AddIcon   />
      </Fab>
      
      </div>
      <ListItemText primary="Add Category" />
    </ListItem>
    <ListSubheader inset><b><u>Category List</u></b></ListSubheader>
    {categories.map((row) => (
            <ListItem>
            
            <ListItemText primary={row.name} />
          </ListItem>
          ))}
    </List>
      <FormDialog open={dialogIsOpen} onClose={closeDialog} />
      {/* <span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{updateView}</span> */}
    </div>
  )
}


