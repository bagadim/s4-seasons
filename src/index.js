import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    // onetime setup
    constructor(props) {
        super(props);
        this.state = { latitude: 0, longitude: 0 , errorMessage: ''}; // the only time state is set directly

    }
    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <div>Latitude: {this.state.latitude}</div>
        }
        return <div>Loading...</div>
    }
    // data loading
    // start tick updates
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            error => this.setState({errorMessage: error.message})
            
        );
        console.log('App component was added to the DOM')
    }

    // data loading on props/state change
    componentDidUpdate() {
        console.log('App component was updated')
    }

    componentWillUnmount() {

    }
}

ReactDOM.render(<App />, document.getElementById('root'));
