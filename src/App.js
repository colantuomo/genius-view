import './App.css';
import React, { Component, Fragment } from 'react'
import { Input } from 'semantic-ui-react'

import CardSongs from './components/CardSongs'
import { geniusService } from './services/GeniusService';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      input: '',
      inputLoading: false,
      hits: []
    }
  }

  handleChange = (e) => this.setState({ value: e.target.value });

  search(name) {
    this.setState({ inputLoading: true });
    geniusService.searchByName(name)
      .then(res => {
        this.setState({ hits: [...res.data.response.hits] })
      })
      .catch(err => console.log(err))
      .finally(() => this.setState({ inputLoading: false }))
  }

  searchById(id) {
    this.setState({ inputLoading: true });
    geniusService.searchById(id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .finally(() => this.setState({ inputLoading: false }))
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.search(this.state.input);
    }
  }

  onInput = (e) => {
    this.setState({ input: e.target.value });
  }

  mountCards = (hit) => {
    const cardSettings = {
      img: hit.header_image_thumbnail_url,
      title: hit.title_with_featured,
      artist: hit.primary_artist.name,
      url: hit.url,
      clickCard: () => this.searchById(hit.id)
    };
    return <CardSongs key={hit.id} {...cardSettings} />
  }


  render() {
    return (
      <Fragment>
        <div className='header-input'>
          <Input className='input' loading={this.state.inputLoading} icon='search' placeholder='Digite o nome de um cantor/banda...' onChange={this.onInput} onKeyDown={this._handleKeyDown} />
        </div>
        <div className='cardList'>
          {this.state.hits.map(hit => this.mountCards(hit.result))}
        </div>
      </Fragment>
    );
  }
}

export default App;
