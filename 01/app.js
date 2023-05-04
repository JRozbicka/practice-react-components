import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        counter: 0,
    }
    constructor(props) {
        super(props)
        console.log('construktor')
    }
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }
    componentDidMount() {
        this.id = setInterval(() => { 
            const { counter } =this.state
            console.log('zaczyana sie')
            this.setState({ counter: counter + 1 })
        }, 5000)
       console.log('komponent zostal zmontowany ')
    }
   componentDidUpdate() {
        console.group('komunikat po aktualizacji')
}
    componentWillUnmount() {
        clearInterval(this.id)
        console.log('posprzatane')
    }
}


root.render(<App/>);
