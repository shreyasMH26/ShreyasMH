import AudioPlayer from "@/components/ui/audio-player";

const AudioPlayerDemo = () => {
  return (
    <AudioPlayer
      src="https://ui.webmakers.studio/audio/ncs.mp3"
      cover="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop"
      title="NEFFEX & TOKYO MACHINE"
    />
  );
};

export { AudioPlayerDemo };
export default AudioPlayerDemo;
