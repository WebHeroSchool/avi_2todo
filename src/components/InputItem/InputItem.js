import React from 'react';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    helperText: '',
    isError: false
  };

  onChangeInputItem = (event) => {

    this.setState({
      inputValue: event.target.value,
      isError: (this.state.isError && this.valueCheck(this.state.inputValue)),
      helperText: !(this.state.isError && this.valueCheck(this.state.inputValue) ? '' : 'Введите текст')
    })
  };

  valueCheck = (value) => {
    if (value === '') {
      return false;
    } else {
      return true;
    }
  };

  onButtonClick = () => {

    if (!this.valueCheck(this.state.inputValue)) {
      this.setState({
          helperText: 'Введите текст',
          isError: true
      });
      
    } else {
      this.setState({
        inputValue: ''
      });

      this.props.onClickAdd(this.state.inputValue);
    }
    
  }

  render() {

    return (
      <div className={styles.field}>
        <form
          onSubmit={event => event.preventDefault()}
          autoComplete="off"
        >
          <TextField
            id="standard-dense"
            label="Добавить задание"
            margin="dense"
            value={this.state.inputValue}
            onChange={(event) => this.onChangeInputItem(event)}
            helperText={this.state.helperText}
            error={this.state.isError}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={() => this.onButtonClick()}
            className={styles.btn}
          >Добавить</Button>
        </form>
      </div>
    );
  }
}

export default InputItem;
