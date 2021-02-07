import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Cancel';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';


import styles from './Item.module.css';

class Item extends React.Component {

  // componentDidMount() {
  //   this.timerID = setInterval(() => console.log('interval'), 1000);
  // };

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  render() {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;

    return (
      <ListItem className={styles.itemList}>
        <Checkbox
          checked={isDone}
          tabIndex={-1}
          onClick={() => onClickDone(id)}
        />
        <ListItemText primary={value} classes={{
          root: isDone && styles.done
        }} />
        <ListItemSecondaryAction>
          <Fab color="secondary" aria-label="edit" size="small">
            <EditIcon />
          </Fab>
          <IconButton aria-label="delete">
            <DeleteIcon onClick={() => onClickDelete(id)}/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
  
}


export default Item;
