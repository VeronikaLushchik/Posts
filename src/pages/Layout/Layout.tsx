import { makeStyles } from '@mui/styles';
import React from 'react';
import {
  Box,
  ClickAwayListener,
  List, ListItem, ListItemText, Portal,
} from '@mui/material';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  page: {
    maxWidth: '1200px',
    height: '100%',
    padding: '70px',
    fontSize: '16px',
    fontWight: '400',
    lineHeight: '1.5',
  },

  drawer: {
    width: '100%',
    display: 'flex',
    height: '50px',
    background: '#f4f4f4',
    textTransform: 'uppercase',
  },

  item: {
    justifyContent: 'start',
    maxWidth: '150px',
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  active: {
    background: '#f4f4f4',
  },
  box: {
    position: 'fixed',
    zIndex: 1,
    width: 400,
    height: 100,
    top: '5%',
    right: '0%',
    border: '1px solid',
    p: 1,
    background: '#f4f4f4',
  },
  like: {
    position: 'absolute',
    width: 70,
    height: 50,
    top: '10%',
    right: '0%',
    background: '#f4f4f4',
    cursor: 'pointer',
  },
  button: {
    border: 'none',
  },
});

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const menuItems = [
    {
      text: 'Posts',
      path: '/',
    },
    {
      text: 'Add new post',
      path: '/create',
    },
  ];

  return (
    <div className={classes.root}>
      <List className={classes.drawer}>
        {menuItems.map(item => (
          <ListItem
            className={classes.item}
            button
            key={item.text}
            onClick={() => history.push(item.path)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}

        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <button type="button" onClick={handleClick} className={classes.button}>
              <img className={classes.like} src="https://icon-library.com/images/heart-icon-svg/heart-icon-svg-29.jpg" alt="" />
            </button>
            {open ? (
              <Portal>
                <Box className={classes.box}>
                  Click me, I will stay visible until you click outside.
                </Box>
              </Portal>
            ) : null}
          </div>
        </ClickAwayListener>
      </List>
      <div className={classes.page}>
        {children}
      </div>
    </div>
  );
};
