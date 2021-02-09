import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
}));

export default function ItemList({
  items, id, onClickDone, onClickDelete, sort }) {
  const classes = useStyles();

 return (
    <List className={classes.root}>
      {sort.map((item) => {
        return (
          <Item
            key={item.id}
            value={item.value}
            isDone={item.isDone}
            id={item.id}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
          />
        );
      })}
    </List>
  );
}

ItemList.propTypes = {
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};
