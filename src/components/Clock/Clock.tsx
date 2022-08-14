import React, { useEffect, useState } from "react";

import ShowCrTime from "./ShowCRTime";

import { url } from "../../constants/clock";
import { ICurrentTime } from "../../interfaces/clock";

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (data: ICurrentTime) => setCurrentTime(data.datetime.slice(11, 19)) // get time hours:minutes:seconds format
      );
  }, []);

  return !!currentTime ? (
    <div>
      <ShowCrTime currentTime={currentTime} />
    </div>
  ) : null;
};

export default Clock;
