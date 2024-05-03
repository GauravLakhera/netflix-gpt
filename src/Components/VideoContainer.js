import React from "react";

function VideoContainer() {
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/V-mugKDQDlg?si=qz5p5tr3atp-pZU1?&autoplay=1&mute=1"
        title="YouTube video player"
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoContainer;
