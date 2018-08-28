import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SearchResult from './SearchResult.jsx';
import Typography from '@material-ui/core/Typography';
import '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      termStart: '',
      termEnd: '',
      epochStart: null,
      epochEnd: null
    };

    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChangeStart(event) {
    this.setState({ termStart: event.target.value });
    console.log(this.state.termStart, 'term start');
  }

  onChangeEnd(event) {
    this.setState({ termEnd: event.target.value });
    console.log(this.state.termEnd, 'term end');
  }

  onFormSubmit(event) {
    const { termStart, termEnd } = this.state;
    event.preventDefault();
    console.log(termStart, 'start!');
    console.log(termEnd, 'end!');

    // var epochStart = new Date(term).getTime()

    // console.log(epochStart)
    const epochStart = this.convertEpoch(termStart);
    const epochEnd = this.convertEpoch(termEnd);
    console.log(epochStart, 'epochStart');
    console.log(epochEnd, 'epochEnd');

    this.setState({
      epochStart: epochStart,
      epochEnd: epochEnd
    });
  }

  convertEpoch(term) {
    return new Date(term).getTime() / 1000;
  }

  render() {
    const { term, epochStart, epochEnd } = this.state;
    return (
      <div>
        <Typography
          variant="title"
          style={{ color: 'black', fontSize: 20, textAlign: 'center' }}
        >
          Select dates for imagery
        </Typography>
        <form
          onSubmit={this.onFormSubmit}
          className="searchContainer"
          style={{
            marginTop: '20px',
            marginBottom: '30px',
            textAlign: 'center'
          }}
        >
          <input
            type="date"
            className="form-control"
            value={term}
            height={400}
            fontSize="15px"
            onChange={this.onChangeStart}
          />
          {`   to   `}
          <input
            type="date"
            className="form-control"
            value={term}
            height={400}
            fontSize="15px"
            onChange={this.onChangeEnd}
          />
          <span className="submitButton">
            <Button type="submit" style={{ fontSize: '15px' }}>
              Search
            </Button>
          </span>
        </form>
        {epochStart !== null &&
          epochEnd !== null && (
            <SearchResult epochStart={epochStart} epochEnd={epochEnd} />
          )}
      </div>
    );
  }
}

export default App;
