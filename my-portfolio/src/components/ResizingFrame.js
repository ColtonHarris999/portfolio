import React, { useRef, useEffect } from "react";
import "./quarters/quarter.css";

function ResizingIframe({ src, title }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const adjustHeight = () => {
      if (iframe && iframe.contentWindow) {
        iframe.style.height =
          iframe.contentWindow.document.body.scrollHeight + "px";
      }
    };

    iframe.addEventListener("load", adjustHeight);
    return () => {
      iframe.removeEventListener("load", adjustHeight);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      style={{
        width: "100%",
        border: "none",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    ></iframe>
  );
}

export default ResizingIframe;
