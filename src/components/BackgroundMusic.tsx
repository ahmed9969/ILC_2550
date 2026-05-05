import { useRef, useState, useEffect } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.25;

    const startOnInteraction = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      audio.play().then(() => setPlaying(true)).catch(() => {});
      window.removeEventListener('mousemove', startOnInteraction);
      window.removeEventListener('touchstart', startOnInteraction);
      window.removeEventListener('click', startOnInteraction);
      window.removeEventListener('keydown', startOnInteraction);
      window.removeEventListener('scroll', startOnInteraction);
    };

    // Try immediate autoplay first
    audio.play().then(() => {
      startedRef.current = true;
      setPlaying(true);
    }).catch(() => {
      // Autoplay blocked — start on the earliest possible interaction
      window.addEventListener('mousemove', startOnInteraction);
      window.addEventListener('touchstart', startOnInteraction);
      window.addEventListener('click', startOnInteraction);
      window.addEventListener('keydown', startOnInteraction);
      window.addEventListener('scroll', startOnInteraction);
    });

    return () => {
      window.removeEventListener('mousemove', startOnInteraction);
      window.removeEventListener('touchstart', startOnInteraction);
      window.removeEventListener('click', startOnInteraction);
      window.removeEventListener('keydown', startOnInteraction);
      window.removeEventListener('scroll', startOnInteraction);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!visible) return null;

  return (
    <>
      <audio ref={audioRef} src="/uzbek-music.mp3" loop preload="auto" />
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <div className="bg-charcoal/90 backdrop-blur-sm text-cream text-xs font-sans px-3 py-1 rounded-full shadow">
          {playing ? '♪ PLOV MUSIC' : 'PLOV MUSIC'}
        </div>
        <button
          onClick={toggle}
          className="bg-olive/90 backdrop-blur-sm text-cream rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:bg-olive transition-colors border border-cream/20"
          title={playing ? 'Pause PLOV MUSIC' : 'Play PLOV MUSIC'}
        >
          {playing ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <button
          onClick={() => setVisible(false)}
          className="bg-charcoal/70 text-cream/60 rounded-full w-6 h-6 flex items-center justify-center hover:text-cream transition-colors text-xs"
          title="Hide music player"
        >
          ✕
        </button>
      </div>
    </>
  );
}
