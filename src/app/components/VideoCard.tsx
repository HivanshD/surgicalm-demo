'use client';

import Link from 'next/link';
import { Play, Clock } from 'lucide-react';
import { Video } from '@/types';

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <Link href={`/videos/${video.id}`} className="group">
      <div className="bg-white rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-gray-100 overflow-hidden">
          <img 
            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback to medium quality thumbnail if maxres doesn't exist
              e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
            }}
          />
          {/* Play overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
          {/* Duration badge */}
          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-2 py-1 rounded-md flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {video.duration}
          </div>
          {/* Category badge */}
          <div className="absolute top-3 left-3 bg-emerald-500/90 text-white text-xs px-2 py-1 rounded-full font-medium">
            {video.category}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
            {video.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {video.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {video.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
            {video.tags.length > 3 && (
              <span className="text-xs text-gray-500 px-3 py-1 bg-gray-50 rounded-full">
                +{video.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;