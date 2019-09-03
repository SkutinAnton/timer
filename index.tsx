import { Renderer, View, Text, Button, Window, LineEdit } from "@nodegui/react-nodegui";
import React, { useState, useMemo, useEffect } from "react";
import {
  QLineEditEvents,
  QPushButtonEvents
} from "@nodegui/nodegui";

const App = () => {
  const [time, setTime] = useState(600000);
  const [timeId, setTimeId] = useState();
  const [isTimerRun, setTimerRun] = useState(false);

  useEffect(() => {
    if (isTimerRun) {
      setTimeId(setInterval(() => {
        setTime(time => time - 1000);
      }, 1000));
    } else {
      clearInterval(timeId);
    }
  }, [isTimerRun]);

  // const setTimer = useMemo(() => ({
  //   [QLineEditEvents.textChanged]: (minute: number) => {
  //     setTime(minute * 60000);
  //   }
  // }), []);

  // const startTimer = () => () => {
  //   setTimeId(setInterval(() => {
  //     setTime(time => time - 1000);
  //   }, 1000));
  // };

  // const stopTimer = () => () => {
  //   clearInterval(timeId);
  // };

  const minutes = new Date(time).getMinutes();
  const seconds = new Date(time).getSeconds();
  
  return (
    <Window 
      id="win"
      maxSize={{ width: 400, height: 300 }}
      minSize={{ width: 350, height: 250 }} 
      styleSheet={styleSheet}
    >
      <View id="container">
        <View id="controls">
          <LineEdit
            on={{ [QLineEditEvents.textChanged]: (minute) => setTime(minute * 60000)}}
            id="textField"
            placeholderText="Минуты"
          />
          <Button id="btn" text="Старт" on={{ [QPushButtonEvents.clicked]: () => setTimerRun(true) }} />
          {/* <Button id="btn" text="Стоп" on={{ [QPushButtonEvents.clicked]: () => setTimerRun(false) }} /> */}
        </View>
        <View id="time">
          <Text id="result">{minutes < 10 ? `0${minutes}` : minutes}</Text>
          <Text id="result"> : </Text>
          <Text id="result">{seconds < 10 ? `0${seconds}` : seconds}</Text>
        </View>
      </View>
    </Window>
  );


  // return (
  //   <Window 
  //     id="win"
  //     maxSize={{ width: 350, height: 250 }}
  //     minSize={{ width: 300, height: 200 }} 
  //     styleSheet={styleSheet}
  //   >
  //     <View id="container">
  //       <View id="controls">
  //         <LineEdit
  //           on={setTimer}
  //           id="textField"
  //           placeholderText="Минуты"
  //         />
  //         <Button text="Start" on={{ [QPushButtonEvents.clicked]: startTimer() }} />
  //         <Button text="Stop" on={{ [QPushButtonEvents.clicked]: stopTimer() }} />
  //       </View>
  //       <Text id="result">{new Date(time).getMinutes()}</Text>
  //       <Text id="result">{new Date(time).getSeconds()}</Text>
  //     </View>
  //   </Window>
  // );
};

const styleSheet = `
  #win {
    background-color: transparent;
    border-radius: 5px;
  }
  #container {
    height: '100%';
    padding: 20px;
    justify-content: 'space-around';
    background-color: qlineargradient( x1:0 y1:0, x2:0 y2:1, stop:0 rgb(255, 161, 127), stop:1 rgb(0, 34, 62));
    border-radius: 5px;
  }
  #time {
    display: 'flex';
    flex-direction: row;
    align-items: 'center';
    justify-content: 'center';
  }
  #result {
    color: rgba(255, 255, 255, 0.8);
    font-size: 74px;
  }
  #btn {
    font-size: 13px;
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 5px 20px;
  }
  #textField {
    color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 4px 20px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0);
  }
`;

Renderer.render(<App />);
