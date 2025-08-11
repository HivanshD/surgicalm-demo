'use client';

import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
}

const VideoPlayer = ({ youtubeId, title }: VideoPlayerProps) => {
  const [captionsEnabled, setCaptionsEnabled] = useState(false);

  // YouTube embed URL with captions parameter
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?${captionsEnabled ? 'cc_load_policy=1' : ''}`;

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Video Player</h3>
        <button
          onClick={() => setCaptionsEnabled(!captionsEnabled)}
          className={`flex items-center gap-2 px-3 py-1 text-sm rounded-full border transition-colors ${
            captionsEnabled
              ? 'bg-blue-50 text-blue-700 border-blue-200'
              : 'bg-gray-50 text-gray-700 border-gray-200'
          }`}
          aria-label={`${captionsEnabled ? 'Disable' : 'Enable'} captions`}
        >
          {captionsEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          Captions {captionsEnabled ? 'On' : 'Off'}
        </button>
      </div>
      
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      <p className="text-sm text-gray-600 mt-2">
        {captionsEnabled ? 'Captions are enabled for accessibility' : 'Click captions button to enable subtitles'}
      </p>
    </div>
  );
};

export default VideoPlayer;  
