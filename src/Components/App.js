import React from 'react';
import SearchBar from '../Components/SearchBar';
import Axios from 'axios';

class App extends React.Component {
    onSearchSubmit(term) {
        Axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 7d66da303f2a6f1fb0d058acc8691a3ae67565fa409bc4d949768f4f7bfc9189'
            }
        })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: 10}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;
