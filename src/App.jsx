import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search() {
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
      // type=artist" -H "Authorization: Bearer BQDHmudbfPp4He7eUll2RxbVKaIzxGAkx6JI5ZaJdTY2Z1VbJtbGCZcoJ_A2shqfx3CIISiKRxybLDVlwDWMDArgC8qElIS6lHGn9jRuRT9Ljd7pwQGTw8fAhH3T4UiRTzX4vW5STO6UTvExF1BEHl--AIBR_olCu9sTGv-xF0fQr0pQngGMcVSW2q0Geh-bpc0KWCUqY1Lp3aQw6yBJYjnaR8fKEbfk6WjebkUtJS8Hp1ifhNK2ss5wyL8xjQj48RdKgYSTtThyh3cIpgaWfpFWCUJ5GQY7YmABu2Z3o4fWQGQRT0pY39-2YXeDiQ
        const FETCH_URL = `"${BASE_URL}q=${this.state.query}&type=artist&limit=1" -H "Authorization: Bearer BQDHmudbfPp4He7eUll2RxbVKaIzxGAkx6JI5ZaJdTY2Z1VbJtbGCZcoJ_A2shqfx3CIISiKRxybLDVlwDWMDArgC8qElIS6lHGn9jRuRT9Ljd7pwQGTw8fAhH3T4UiRTzX4vW5STO6UTvExF1BEHl--AIBR_olCu9sTGv-xF0fQr0pQngGMcVSW2q0Geh-bpc0KWCUqY1Lp3aQw6yBJYjnaR8fKEbfk6WjebkUtJS8Hp1ifhNK2ss5wyL8xjQj48RdKgYSTtThyh3cIpgaWfpFWCUJ5GQY7YmABu2Z3o4fWQGQRT0pY39-2YXeDiQ"  `;
        console.log('FETCH_URL', FETCH_URL);
        fetch(FETCH_URL, {
            method: 'GET' ,
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'grant_type':'client_credentials'
            }
        })
            .then(response => response.json())
            .then(json => console.log('json', json));
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Music Master</div>
                {/* <div>
                 <input placeholder="Search an Artist...."/>
                 <button>Submit</button>
                 </div>*/}
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search an Artist...."
                            value={this.state.query}
                            onChange={event => {
                                this.setState({query: event.target.value})
                            }}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search()
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search">

                            </Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>

                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}
export default App;
