'use client';

import { useState, useMemo } from 'react';
import VideoCard from '../components/VideoCard';
import SearchBar from '../components/SearchBar';
import FilterChips from '../components/FilterChips';
import videosData from '@/data/videos.json';

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from videos
  const availableTags = useMemo(() => {
    const allTags = videosData.videos.flatMap(video => video.tags);
    return Array.from(new Set(allTags));
  }, []);

  // Filter videos based on search and tags
  const filteredVideos = useMemo(() => {
    let filtered = videosData.videos;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0 && !selectedTags.includes('All')) {
      filtered = filtered.filter(video =>
        selectedTags.some(tag => video.tags.includes(tag))
      );
    }

    return filtered;
  }, [searchQuery, selectedTags]);

  const handleTagToggle = (tag: string) => {
    if (tag === 'All') {
      setSelectedTags([]);
    } else {
      setSelectedTags(prev =>
        prev.includes(tag)
          ? prev.filter(t => t !== tag)
          : [...prev, tag]
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Surgical Education Video Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our collection of patient-friendly videos explaining orthopedic procedures. 
            Click on any video to watch and learn what to expect during your surgery.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg border border-emerald-100 p-8 mb-10">
          <div className="space-y-6">
            <div className="max-w-md mx-auto">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search procedures, categories, or keywords..."
              />
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Filter by procedure type:</h3>
              <FilterChips
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
                availableTags={availableTags}
              />
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8">
          <p className="text-lg text-gray-600">
            Showing <span className="font-semibold text-emerald-600">{filteredVideos.length}</span> of <span className="font-semibold">{videosData.videos.length}</span> videos
            {searchQuery && (
              <span> for &ldquo;<span className="font-semibold text-emerald-600">{searchQuery}</span>&rdquo;</span>
            )}
            {selectedTags.length > 0 && !selectedTags.includes('All') && (
              <span> with tags: <span className="font-semibold text-emerald-600">{selectedTags.join(', ')}</span></span>
            )}
          </p>
        </div>

        {/* Videos Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <p className="text-gray-500 text-xl mb-6">No videos found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTags([]);
                }}
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        {/* Categories Overview */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Available Procedure Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from(new Set(videosData.videos.map(v => v.category))).map((category, index) => {
              const count = videosData.videos.filter(v => v.category === category).length;
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                  <span className="font-medium text-gray-700">{category}</span>
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-sm font-medium">
                    {count} video{count !== 1 ? 's' : ''}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}