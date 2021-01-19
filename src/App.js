import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import Artist from "./Artist";
import Tracks from "./Tracks";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: null,
      tracks: [],
    };
  }

  search() {
    console.log("this.state", this.state);
    fetch(`${API_ADDRESS}/artist/${this.state.query}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then((response) => response.json())
            .then((json) => this.setState({ tracks: json.tracks }))
            .catch((error) => alert(error.message));
        }
      })
      .catch((error) => alert(error.message));
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search an Artist...."
              value={this.state.query}
              onChange={(event) => {
                this.setState({ query: event.target.value });
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>

        <div className="Profile">
          <Artist artist={this.state.artist} />
        </div>
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}
export default App;
