import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { 
        latitude: 0, 
        longitude: 0,
        errorMessage: ''
    };
    renderContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude}/>
        }
        return <Spinner text="Getting your geolocation..."/>;
    }
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
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
