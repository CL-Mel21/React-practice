import React, { Component } from 'react'

export default class AudioPlayer extends Component {
  state = {
    status: 'playing',
  }
  audioElement = new Audio(this.props.audioURL)



  pauseSong = () => {
    console.log(this.audioElement)
    this.audioElement.pause()
    this.setState({ status: 'paused' })
  }

  playSong = () => {
    this.audioElement.play()
    this.setState({ status: 'playing' })
  }

  componentDidMount() {
    // this.audioElement.autoplay = true
    console.log('mount')
    this.setState({ status: 'playing' })
    this.audioElement.play()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update')
    console.log(prevState.audioElement)
    console.log(this.audioElement)
    if (prevProps.audioURL !== this.props.audioURL) {
      this.audioElement.pause()
      this.audioElement = new Audio(this.props.audioURL)
      this.audioElement.play()
      this.setState({ status: 'playing' })
    }
  }

  componentWillUnmount() {
    console.log('unmount')
    this.audioElement.pause()
  }

  render() {
    if (this.state.status === 'playing') {
      return (
        <div>
          <p>Playing {this.props.audioURL}</p>
          <button onClick={this.pauseSong}>Pause</button>
        </div>
      )
    }

    return (
      <div>
        <p>Playing {this.props.audioURL}</p>
        <button onClick={this.playSong}>Play</button>
      </div>
    )
  }
}
