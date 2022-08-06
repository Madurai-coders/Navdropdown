import "./user.css";
import React, { useState, useEffect, useRef } from "react";

function User() {
  // const [playing, setPlaying] = useState(false);
  const [button, setbutton] = useState(true);
  const [led, setled] = useState(true);
  const [pwm, setPwm] = useState(0);
  const [pwmB, setPwmB] = useState(0);

  // const HEIGHT = 500;
  // const WIDTH = 500;
  const chatSocket = new WebSocket("ws://13.127.13.175:8001/ws/sensordata/");

  // const startVideo = () => {
  // 	setPlaying(true);
  // 	navigator.getUserMedia(
  // 		{
  // 			video: true,
  // 		},
  // 		(stream) => {
  // 			let video = document.getElementsByClassName('app__videoFeed')[0];
  // 			if (video) {
  // 				video.srcObject = stream;
  // 			}
  // 		},
  // 		(err) => console.error(err)
  // 	);
  // };

  // const stopVideo = () => {
  // 	setPlaying(false);
  // 	let video = document.getElementsByClassName('app__videoFeed')[0];
  // 	video.srcObject.getTracks()[0].stop();
  // };

  useEffect(() => {

    //    chatSocket.onmessage = function(e) {
    //        const data = JSON.parse(e.data);
    //        document.querySelector('#chat-log').value = (data.message + '\n');
    //    };

    //    chatSocket.onclose = function(e) {
    //        console.error('Chat socket closed unexpectedly');
    //    };

    //    document.querySelector('#chat-message-input').focus();
    //    document.querySelector('#chat-message-input').onkeyup = function(e) {
    //        if (e.keyCode === 13) {  // enter, return
    //            document.querySelector('#chat-message-submit').click();
    //        }
    //    };

    //    document.querySelector('#chat-message-submit').onclick = function(e) {
    //        const messageInputDom = document.querySelector('#chat-message-input');
    //        const message = messageInputDom.value;
    //       ;
    //        messageInputDom.value = '';
    //    };

    //    document.querySelector('#chat-message-submit1').onclick = function(e) {
    // 	const messageInputDom = document.querySelector('#chat-message-input1');
    // 	const message = messageInputDom.value;
    // 	console.log(message)
    // 	chatSocket.send(JSON.stringify({
    // 		'pwm': parseInt(message),
    // 		'message': 'hi'
    // 	}));
    // 	messageInputDom.value = '';
    // };
  }, []);

  function on() {
    chatSocket.send(
      JSON.stringify({
        message: 'true',
      })
    );
    setbutton(false)
  }

  function off() {
    setbutton(true)
    chatSocket.send(
      JSON.stringify({
        message: 'false',
      })
    );
  }

  function pwmFunction(val) {
      setPwm(val)
    chatSocket.send(
      JSON.stringify({
        pwm: parseInt(val),
      })
    );
  }


  function onLed() {
    chatSocket.send(
      JSON.stringify({
        led: 'true',
      })
    );
    setled(false)
  }

  function offled() {
    setled(true)
    chatSocket.send(
      JSON.stringify({
        led: 'false',
      })
    );
  }

  function pwmBFunction(val) {
      setPwmB(val)
    chatSocket.send(
      JSON.stringify({
        pwmB: parseInt(val),
      })
    );
  }
  return (
    <>
      {button ? (
        <div className="btn btn-primary" onClick={on}>
          on
        </div>
      ) : (
        <div className="btn btn-danger" onClick={off}>
          off
        </div>
      )}<br></br>
      {pwm}

      <input type="range" step="1" min="0" max="255" value={pwm} class="slider" onChangeCapture={(e)=>pwmFunction(e.target.value)}></input>
      {led ? (
        <div className="btn btn-primary" onClick={onLed}>
          on
        </div>
      ) : (
        <div className="btn btn-danger" onClick={offled}>
          off
        </div>
      )}
      <input type="range" style={{width:' 100%'}} step="1" min="0" max="255" value={pwmB} class="slider" onChangeCapture={(e)=>pwmBFunction(e.target.value)}></input>

    </>
    //               <div className='px-3'>
    //    <textarea id="chat-log" cols="100" rows="5"></textarea><br/>
    //     <input id="chat-message-input" type="text" size="100"/><br/>
    //     <input id="chat-message-submit" type="button" value="Send"></input>

    // 	<input id="chat-message-input1" type="text" size="100"/><br/>
    //     <input id="chat-message-submit1" type="button" value="Send pwm"></input>
    //     <div className="app">
    // 			<div className="app__container">
    // 				<video
    // 					height={HEIGHT}
    // 					width={WIDTH}
    // 					muted
    // 					autoPlay
    // 					className="app__videoFeed"
    // 				></video>
    // 			</div>
    // 			<div className="app__input">
    // 				{playing ? (
    // 					<button onClick={stopVideo}>Stop</button>
    // 				) : (
    // 					<button onClick={startVideo}>Start</button>
    // 				)}
    // 			</div>
    // 		</div>

    //               </div>
  );
}

export default User;
