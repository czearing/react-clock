import React from "react";
import { ThemeProvider } from "@fluentui/react";
import "./styles.scss";

export default function App() {
  const currentDate = new Date();

  const calculateTime = () => ({
    days: currentDate.getDay(),
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds()
  });

  const [time, setTime] = React.useState(calculateTime());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTime());
    }, 1000);
  });

  return (
    <div className="wrapper">
      <h1 className="header">
        It is {time.hours}:{time.minutes}
      </h1>
      <div className="clock">
        <div className="wrap">
          <div
            className="second-hand"
            style={{ transform: "rotate(" + time.seconds * 6 + "deg)" }}
          />
          <div
            className="minute-hand"
            style={{ transform: "rotate(" + time.minutes * 6 + "deg)" }}
          />
          <div
            className="hour-hand"
            style={{ transform: "rotate(" + time.hours * 30 + "deg)" }}
          />
          <div className="dot" />
        </div>
      </div>
    </div>
  );
}
