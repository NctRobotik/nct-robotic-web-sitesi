import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Play, ArrowLeft, Search, Sparkles } from 'lucide-react';
import { NCT_VIDEOS, FEATURED_NCT_VIDEOS, getVideosByCategory, VideoCategory } from '../data/videoData';
import { VideoItem } from '../types';
import { VideoModal } from './VideoModal';

const EN_VIDEO_TEXT: Record<string, { title: string; description: string }> = {
  "orbit-pix-turkce-matematik": { title: "Turkish and Mathematics", description: "Interactive learning experiences with Orbit Pix in Turkish and mathematics lessons." },
  "orbit-pix-velihan": { title: "Pix and Velihan", description: "Orbit Pix helps students practice spoken English through active, AI-powered conversation." },
  "orbit-pix-sinifta": { title: "Pix in a Language Classroom", description: "Orbit Pix interacting with students in English during foreign language classes." },
  "karaman-basari-koleji": { title: "Karaman Başarı College", description: "Real classroom footage of Orbit robots at Karaman Başarı College." },
  "orbit-pix-tanitim": { title: "Meet Orbit Pix", description: "Discover the key features of Orbit Pix and its interactive learning experience." },
  "tek-kampus": { title: "Tek Kampüs", description: "Real-world footage showing how Orbit robots support learning at Tek Kampüs." },
  "nct-mucit-atolyesi": { title: "NCT Inventors Workshop", description: "Hands-on educational activities with Orbit robots at NCT Inventors Workshop." },
  "east-to-west": { title: "East to West Language Center", description: "Real-world examples of Orbit robots supporting language learning at East to West Language Center." },
  "orbit-s-yabanci-dil": { title: "Language Learning with Orbit-S", description: "Orbit-S interacting with students in foreign language courses." },
  "zeplin-cocuk-akademisi": { title: "Orbit at Zeplin Children’s Academy", description: "Real learning experiences with Orbit robots and students at Zeplin Children’s Academy." },
  "orbit-pix-genel-kultur": { title: "General Knowledge", description: "Examples of curiosity-driven and general knowledge learning with Orbit Pix." },
  "orbit-pix-yapay-zeka": { title: "AI-Powered Learning", description: "Discover Orbit Pix’s AI-powered learning experience and natural voice interaction." },
  "prof-dr-ismail-ovali": { title: "Prof. Dr. İsmail Ovalı", description: "NCT Robotik founder Prof. Dr. İsmail Ovalı discusses the company’s vision, technologies and future goals." },
  "east-to-west-ingilizce": { title: "Orbit-S at East to West", description: "Orbit-S supports English speaking practice in educational institutions through interactive conversations." }
};

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
  const { i18n } = useTranslation();
  const en = i18n.resolvedLanguage?.startsWith('en') || i18n.language.startsWith('en');
  const displayVideo = (video: VideoItem): VideoItem => {
    const translated = en ? EN_VIDEO_TEXT[video.id] : undefined;
    return translated ? { ...video, title: translated.title, description: translated.description } : video;
  };
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
        video.title.toLocaleLowerCase().includes(query) ||
        (en && EN_VIDEO_TEXT[video.id]?.title.toLowerCase().includes(query)) ||
        (video.organization && video.organization.toLocaleLowerCase().includes(query))
    );
  }

  const featuredVideo = FEATURED_NCT_VIDEOS[0] || NCT_VIDEOS[0];

  const categories = [
    { id: 'all', label: en ? 'All' : 'Tümü' },
    { id: 'kurum', label: en ? 'Institutions' : 'Kurumlar' },
    { id: 'urun-tanitimi', label: en ? 'Product Demos' : 'Ürün Tanıtımları' },
    { id: 'egitim', label: en ? 'Education' : 'Eğitim' },
    { id: 'yabanci-dil', label: en ? 'Foreign Languages' : 'Yabancı Dil' },
    { id: 'kurucu-anlatimi', label: en ? 'Founder' : 'Kurucu' },
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
            <span>{en ? "← Back" : "← Geri Dön"}</span>
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label={en ? "Close" : "Kapat"}
            className="w-10 h-10 rounded-full bg-brand-light border border-brand-neutral hover:bg-brand-light/70 text-brand-primary flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Header Text Area */}
        <div className="space-y-4 mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            {en ? "REAL USERS" : "GERÇEK KULLANICILAR"}
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-primary leading-tight">
            {en ? "Children Learning with Orbit" : "Orbit ile Öğrenen Çocuklar"}
          </h1>
          
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
            {en ? "Explore real-world videos of Orbit robots in educational institutions and other settings." : "Orbit robotlarının eğitim kurumlarında ve farklı kullanım alanlarında gerçekleştirilen gerçek uygulama videolarını inceleyin."}
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
              placeholder={en ? "Search (title or institution)..." : "Ara (Başlık veya kurum adı)..."}
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
              {en ? "Featured Video" : "Öne Çıkan Video"}
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
                    {displayVideo(featuredVideo).title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                    {displayVideo(featuredVideo).description}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => setSelectedVideo(featuredVideo)}
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-brand-primary hover:bg-brand-accent text-white font-bold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>{en ? "Watch Video" : "Videoyu İzle"}</span>
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
            {en ? "All Videos" : "Tüm Videolar"} ({filteredVideos.length})
          </h2>

          {filteredVideos.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-brand-neutral rounded-[24px]">
              <p className="text-[#6B7280] text-sm font-medium">{en ? "No videos match your search or selected category." : "Aramanıza veya seçilen kategoriye uygun video bulunamadı."}</p>
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
                        {displayVideo(video).title}
                      </h4>
                      <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2 font-normal">
                        {displayVideo(video).description}
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
        video={selectedVideo ? displayVideo(selectedVideo) : null}
      />
    </div>
  );
};
