import React, { useState, useEffect } from 'react';
import { X, Play, ArrowLeft, Search, Sparkles } from 'lucide-react';
import { NCT_VIDEOS, FEATURED_NCT_VIDEOS, getVideosByCategory, VideoCategory } from '../data/videoData';
import { VideoItem } from '../types';
import { VideoModal } from './VideoModal';

interface VideoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayVideo?: (video: VideoItem) => void;
}

export const VideoGalleryModal: React.FC<VideoGalleryModalProps> = ({
  isOpen,
  onClose,
  onPlayVideo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key press to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedVideo) {
          setSelectedVideo(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, selectedVideo]);

  if (!isOpen) return null;

  // Filter videos
  let filteredVideos = selectedCategory === 'all' 
    ? NCT_VIDEOS 
    : getVideosByCategory(selectedCategory as VideoCategory);

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredVideos = filteredVideos.filter(
      (video) => 
        video.title.toLowerCase().includes(query) || 
        (video.organization && video.organization.toLowerCase().includes(query))
    );
  }

  const featuredVideo = FEATURED_NCT_VIDEOS[0] || NCT_VIDEOS[0];

  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'kurum', label: 'Kurumlar' },
    { id: 'urun-tanitimi', label: 'Ürün Tanıtımları' },
    { id: 'egitim', label: 'Eğitim' },
    { id: 'yabanci-dil', label: 'Yabancı Dil' },
    { id: 'kurucu-anlatimi', label: 'Kurucu' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto animate-fade-in text-brand-primary select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
        
        {/* Top Control Header */}
        <div className="flex items-center justify-between border-b border-brand-neutral pb-6 mb-8">
          {/* Back button */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-brand-primary hover:text-brand-accent font-semibold text-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Geri Dön</span>
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="w-10 h-10 rounded-full bg-brand-light border border-brand-neutral hover:bg-brand-light/70 text-brand-primary flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Header Text Area */}
        <div className="space-y-4 mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            GERÇEK KULLANICILAR
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-primary leading-tight">
            Orbit ile Öğrenen Çocuklar
          </h1>
          
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
            Orbit robotlarının eğitim kurumlarında ve farklı kullanım alanlarında gerçekleştirilen gerçek uygulama videolarını inceleyin.
          </p>
        </div>

        {/* Filter and Search Bar Container */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-brand-neutral pb-6 mb-10">
          
          {/* Category Pill Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'bg-white border border-brand-neutral hover:bg-brand-light text-brand-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box Input */}
          <div className="relative w-full md:max-w-xs">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-primary/40" />
            <input
              type="text"
              placeholder="Ara (Başlık veya kurum adı)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 bg-white border border-brand-neutral focus:border-brand-accent focus:bg-white focus:outline-none rounded-xl text-sm transition-all text-brand-primary"
            />
          </div>

        </div>

        {/* Featured Video (only show when no search query and category is 'all') */}
        {selectedCategory === 'all' && !searchQuery && featuredVideo && (
          <div className="mb-12">
            <h2 className="text-lg font-bold text-brand-primary mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
              Öne Çıkan Video
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 rounded-[24px] bg-brand-light border border-brand-neutral items-stretch">
              
              {/* Left Side: 16:9 Video Preview */}
              <div 
                className="lg:col-span-7 aspect-video relative rounded-xl overflow-hidden bg-brand-primary/5 cursor-pointer group shadow-sm flex items-center justify-center"
                onClick={() => setSelectedVideo(featuredVideo)}
              >
                <video
                  src={featuredVideo.videoUrl}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 pointer-events-none"
                />
                <div className="absolute inset-0 bg-brand-primary/30 group-hover:bg-brand-primary/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Right Side: Text & Actions */}
              <div className="lg:col-span-5 flex flex-col justify-between py-2 space-y-4">
                <div className="space-y-3">
                  {featuredVideo.organization && (
                    <div className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                      {featuredVideo.organization}
                    </div>
                  )}
                  <h3 className="text-2xl font-extrabold text-brand-primary tracking-tight leading-tight">
                    {featuredVideo.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                    {featuredVideo.description}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => setSelectedVideo(featuredVideo)}
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-brand-primary hover:bg-brand-accent text-white font-bold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Videoyu İzle</span>
                    <Play className="w-3.5 h-3.5 fill-white" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Video Grid Section */}
        <div>
          <h2 className="text-lg font-bold text-brand-primary mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            Tüm Videolar ({filteredVideos.length})
          </h2>

          {filteredVideos.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-brand-neutral rounded-[24px]">
              <p className="text-[#6B7280] text-sm font-medium">Aramanıza veya seçilen kategoriye uygun video bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group cursor-pointer rounded-2xl bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-1 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
                >
                  {/* Aspect-Ratio 16:9 Video Preview */}
                  <div className="relative aspect-video bg-brand-primary/5 flex items-center justify-center overflow-hidden">
                    <video
                      src={video.videoUrl}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Metadata Content */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-brand-primary text-base leading-snug group-hover:text-brand-accent transition-colors line-clamp-1">
                        {video.title}
                      </h4>
                      <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2 font-normal">
                        {video.description}
                      </p>
                    </div>

                    {video.organization && (
                      <div className="text-xs font-bold text-brand-primary/40 group-hover:text-brand-accent transition-colors uppercase tracking-wider pt-1 border-t border-brand-neutral">
                        {video.organization}
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Local Video Player Modal Overlay inside the gallery */}
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        video={selectedVideo}
      />
    </div>
  );
};
