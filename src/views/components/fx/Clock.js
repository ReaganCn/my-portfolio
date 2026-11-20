import React, { useEffect, useState } from "react";

const fmt = (() => {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Nairobi",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  } catch (e) {
    return null;
  }
})();

const nairobiTime = () => {
  if (fmt) return fmt.format(new Date()).split(":");
  // Fallback: EAT is UTC+3 with no DST.
  const d = new Date(Date.now() + 3 * 3600 * 1000);
  return [d.getUTCHours(), d.getUTCMinutes()].map((n) => String(n).padStart(2, "0"));
};

/** Live Nairobi local time with a blinking colon. */
const Clock = () => {
  const [[h, m], setTime] = useState(nairobiTime);

  useEffect(() => {
    const id = setInterval(() => setTime(nairobiTime()), 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <time className="clock" aria-label={`Local time in Nairobi ${h}:${m}`}>
      {h}
      <span className="clock__colon" aria-hidden="true">
        :
      </span>
      {m} EAT
    </time>
  );
};

export default Clock;
