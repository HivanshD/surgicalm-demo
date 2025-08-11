import Link from 'next/link';
import { ArrowLeft, Clock, CheckCircle, Heart } from 'lucide-react';
import VideoPlayer from '../../components/VideoPlayer';
import videosData from '@/data/videos.json';
import { notFound } from 'next/navigation';

interface VideoDetailPageProps {
  params: {
    id: string;
  };
}

export default function VideoDetailPage({ params }: VideoDetailPageProps) {
  const video = videosData.videos.find(v => v.id === params.id);

  if (!video) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link
          href="/videos"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Procedures
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video player */}
            <VideoPlayer youtubeId={video.youtubeId} title={video.title} />

            {/* Video info */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-900">{video.title}</h1>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {video.duration}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {video.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding Your Procedure</h3>
                <p className="text-gray-700 leading-relaxed">{video.summary}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What to Expect */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                What to Expect
              </h3>
              <div className="space-y-4">
                {video.whatToExpect.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-medium">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedure category */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-2">Procedure Type</h4>
              <p className="text-blue-700">{video.category}</p>
            </div>

            {/* Calming reminder */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Remember</h4>
              </div>
              <p className="text-green-700 text-sm leading-relaxed">
                It&apos;s completely normal to feel nervous about surgery. Watching this video as many times 
                as you need can help you feel more prepared and calm. Your surgical team is experienced 
                and will take excellent care of you.
              </p>
            </div>

            {/* Important note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Talk to Your Doctor</h4>
              <p className="text-yellow-700 text-sm">
                This video shows general information about the procedure. Your surgeon will explain 
                details specific to your situation during your consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}