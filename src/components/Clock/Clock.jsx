import { useEffect, useState } from "react";

function formatTime(timeZone, withSeconds) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    ...(withSeconds ? { second: "2-digit" } : {}),
    hour12: true,
    timeZone,
  }).format(new Date());
}

export default function Clock({ timeZone, location }) {
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [time, setTime] = useState(() => formatTime(timeZone, !reduced));

  useEffect(() => {
    const id = setInterval(
      () => setTime(formatTime(timeZone, !reduced)),
      reduced ? 30000 : 1000
    );
    return () => clearInterval(id);
  }, [timeZone, reduced]);

  return (
    <p className="clock">
      <span className="clock-time" aria-hidden="true">
        {time}
      </span>
      <span className="clock-sep" aria-hidden="true">
        ·
      </span>
      <span className="clock-place">{location}</span>
      <span className="sr-only">
        Local time in {location}: {time}
      </span>
    </p>
  );
}
