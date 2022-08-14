import { useEffect, useState } from "react";
import "./ShowCRTime.css";

interface IShowCrTimeProps {
  currentTime: string;
}

const ShowCrTime: React.FC<IShowCrTimeProps> = ({ currentTime }) => {
  const [hour, setHour] = useState<number>(+currentTime?.slice(0, 2)); // slice hour
  const [minutes, setMinutes] = useState<number>(+currentTime?.slice(3, 5)); // minutes
  const [seconds, setSeconds] = useState<number>(+currentTime?.slice(6, 8)); // seconds

  const clock = () => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((val) => val + 1);
    }
    if (minutes === 60) {
      setMinutes(0);
      setHour((val) => val + 1);
    }
    if (hour === 24) {
      setHour(0);
    }
    setSeconds((val) => val + 1);
  };
  const timeout = setTimeout(clock, 1000);

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="clock__circle">
      <span className="clock__twelve" />
      <span className="clock__three" />
      <span className="clock__six" />
      <span className="clock__nine" />

      <div className="clock__rounder"></div>
      <div
        className="clock__hour"
        style={{ transform: `rotateZ(${hour * 30 + minutes / 12}deg)` }}
      ></div>
      <div
        className="clock__minutes"
        style={{ transform: `rotateZ(${minutes * 6}deg)` }}
      ></div>
      <div
        className="clock__seconds"
        style={{ transform: `rotateZ(${seconds * 6}deg)` }}
      ></div>
    </div>
  );
};

export default ShowCrTime;
