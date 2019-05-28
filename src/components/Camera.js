import React, { Component } from 'react';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.cameraRef = React.createRef();
    this.state = {
      currentStream: null
    };
  }

  configureVideo = () => {
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
          // $("#flip-camera-button").hide();
        } else {
          let isFrontCam = false;
          params = {
            video: {
              facingMode: (isFrontCam ? "user" : "environment")
            },
            audio: false
          };
          // $("#flip-camera-button").show();
        }

        navigator.mediaDevices.getUserMedia(params)
          .then((stream) => {
            this.setState({
              currentStream: stream
            });
            window.stream = stream;
            this.cameraRef.current.srcObject = stream;
          })
          .catch((error) => {
            console.log(error);
            // $.notify(error, "error");
          });
      });
  }

  componentDidMount() {
    this.configureVideo();
  }
  render() {
    return (
      <video autoPlay playsInline ref={this.cameraRef}></video>
    );
  }
}

export default Camera;