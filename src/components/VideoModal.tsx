import React from 'react';
import { Play } from 'lucide-react';
import { VideoItem } from '../types';
import { ModalShell, ModalHeader, ModalBody } from './ModalOverlaySystem';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: VideoItem | null;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, video }) => {
  if (!isOpen || !video) return null;

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
      <ModalHeader
        title={video.title}
        subtitle={video.organization || "NCT Robotik"}
        onClose={onClose}
      />

      <ModalBody className="p-0 sm:p-0 space-y-0 overflow-hidden">
        {/* Video Player Display Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <video
            src={video.videoUrl}
            controls
            autoPlay
            preload="metadata"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Description Section */}
        <div className="p-6 sm:p-8 bg-brand-light border-t border-brand-neutral">
          <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
            {video.description}
          </p>
        </div>
      </ModalBody>
    </ModalShell>
  );
};

