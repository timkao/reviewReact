import React, { Component } from 'react';
import axios from 'axios';

class NewPlayList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      buttonDisabled: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value }, () => {
      if (this.state.inputValue.length > 0  ) {
        this.setState({ buttonDisabled: false })
      } else {
        this.setState({ buttonDisabled: true })
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault(); // If not, the page will refresh
    this.props.addList(this.state.inputValue)
    .then(() => {
      this.setState({
        inputValue: '',
        buttonDisabled: true,
      });
    })
  }

  render() {

    const { handleChange, handleSubmit } = this;
    let { inputValue, buttonDisabled } = this.state;

    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={handleSubmit} >
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input
                  onChange={handleChange}
                  className="form-control"
                  type="text"
                  value={inputValue} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button disabled={buttonDisabled} type="submit" className="btn btn-success">Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
        {
          inputValue.length === 0 ? <div className="alert alert-warning">Please enter a name</div> : null
        }
      </div>
    )
  }

}

export default NewPlayList;
