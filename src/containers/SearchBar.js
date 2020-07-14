import React from 'react'
import { connect } from 'react-redux'
import { searchCapsule } from '../actions'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const Search = ({ dispatch }) => {
  let input = ''

  // search capsules on input
  function sendSearch (e) {
    e.preventDefault();
    input = e.target.value.trim();
    dispatch(searchCapsule(input));
  }

  return (
    <form noValidate autoComplete="off">
        <TextField id="searchbar" type="search" value={this.input} fullWidth
            onInput={e => sendSearch(e)} onSubmit={e => sendSearch(e)}
            InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            }} />
    </form>
  )
}

export default connect()(Search)
