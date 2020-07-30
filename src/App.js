import React, { Component } from 'react';

class App extends Component {
    state = {
        flights: []
    }
    componentDidMount() {
        fetch('http://localhost:8080/flight/all')
            .then(res => res.json())
            .then((data) => {
                this.setState({ flights: data })
                console.log(this.state.flights)
            })
            .catch(console.log)
    }
    // [...]
}
export default App;