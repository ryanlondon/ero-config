import React from 'react';

class SourceForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };

    this.handleChange = (e) => {
      this.setState({ value: e.target.value });
    };

    this.handleSubmit = (e) => {
      this.props.addSource(this.state.value);
      this.setState({ value: '' });
      this.input.value = '';
      e.preventDefault();
    };
  }

  render() {
    return (
      <form className="source-form" onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange} 
          ref={(input) => {this.input = input}} 
          type="text" 
          placeholder="Add a source" 
        />
        <button type="submit">Add Source</button>
      </form>
    );
  }
}

export default SourceForm;