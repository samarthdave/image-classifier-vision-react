import React, { Component } from 'react';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.cameraRef = React.createRef();
    this.state = {
      currentStream: null,
      isFrontCam: false,
      showFlipCamera: false
    };
  }

  configureVideo = () => {
    const { isFrontCam } = this.state;
    navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        let params;
        devices = devices.filter((el) => {
          return el.kind === "videoinput"
        });

        if(devices.length === 1) {
          params = {
            video: true,
            audio: false
          };
          // hide flip camera
          this.setState({
            showFlipCamera: false
          });
        } else if(devices.length > 1) {
          params = {
            video: {
              facingMode: (isFrontCam ? "user" : "environment")
            },
            audio: false
          };
          // show camera flip option
          this.setState({
            showFlipCamera: true
          });
        }

        // NOTE: toggle prev state could be put her (not prev state)
        // setState((prevState) => ... !prevState.showFlipCamera)

        navigator.mediaDevices.getUserMedia(params)
          .then((stream) => {
            this.setState({
              currentStream: stream
            });
            window.stream = stream;
            this.cameraRef.current.srcObject = stream;
          })
          .catch((error) => {
            // permission denied
            console.log(error);
          });
      });
  }

  stopCamera = (stream) => {
    stream.getTracks().forEach((track) => {
      track.stop();
    });
  }

  flipCamera = () => {
    const { currentStream } = this.state;
    if(currentStream) {
      this.stopCamera(currentStream);

      this.setState((prevState) => ({
        isFrontCam: !prevState.isFrontCam
      }), this.configureVideo);
    }
  }

  componentWillMount() {
    this.configureVideo();
  }
  render() {
    const { showFlipCamera } = this.state;
    return (
      <>
        {
          showFlipCamera ?
          <button className="flip-camera-btn" onClick={this.flipCamera}>Flip camera</button>
          : ''
        }
        <video autoPlay playsInline ref={this.cameraRef}></video>
      </>
    );
  }
}

export default Camera;