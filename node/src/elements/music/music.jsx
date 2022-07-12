import React, { Component } from 'react'

export class Music extends Component {
    state = {
        play:true
    }
    audio = new Audio(this.props.url)
    componentDidMount() {
    console.log(this.audio);
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }
      
    componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
    }

    togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
    });
    }

  
  
    render() {
    return (<div style={{"display":"hidden"}}></div>)
    }
}

export default Music