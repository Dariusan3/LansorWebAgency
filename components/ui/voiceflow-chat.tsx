"use client";

import { useEffect } from "react";

// Your Voiceflow Project ID
const VOICEFLOW_PROJECT_ID = "6974fe18e0db4f6e343328c6";

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: VoiceflowConfig) => void;
        open: () => void;
        close: () => void;
        hide: () => void;
        show: () => void;
      };
    };
  }
}

interface VoiceflowConfig {
  verify: { projectID: string };
  url: string;
  versionID: string;
  assistant?: {
    title?: string;
    description?: string;
    color?: string;
    avatar?: string;
  };
  launcher?: {
    icon?: string;
  };
}

export const VoiceflowChat = () => {
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Create script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.async = true;

    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: VOICEFLOW_PROJECT_ID },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          assistant: {
            title: "Lansor AI Assistant",
            description: "Ask me anything about our services",
            color: "#3B82F6", // Primary blue to match site branding
          },
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component only loads the script, no visible UI
};
