"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // ✅ Properly typed ref for an <audio> element
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.pile}>
      <svg
        viewBox="0 0 700 200"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.logo}
        onClick={toggleAudio}
      >
        <rect width="100%" height="100%" fill="black" rx="16" />
        <text
          x="40"
          y="90"
          fontSize="40"
          fontWeight="bold"
          fill="white"
          fontFamily="Arial"
        >
          The
        </text>
        <text
          x="40"
          y="150"
          fontSize="60"
          fontWeight="bold"
          fill="white"
          fontFamily="Arial"
        >
          Office
        </text>
      </svg>

      <audio
        ref={audioRef}
        controls
        loop
        className={styles.audio}
      >
        <source src="/audio/office.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}