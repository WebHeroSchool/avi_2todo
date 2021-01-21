import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (

  <ListItem key={id}>
    <ListItemIcon>
      <Checkbox
        checked={isDone}
        tabIndex={-1}
        onClick={() => onClickDone(id)}
      />
    </ListItemIcon>
    <ListItemText primary={value} classes={{
      root: isDone && styles.done
    }} />
    <ListItemSecondaryAction>
      <IconButton aria-label="delete">
        <DeleteIcon onClick={() => onClickDelete(id)}/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Item;
