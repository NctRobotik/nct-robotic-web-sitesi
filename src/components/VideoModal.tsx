import React from 'react';
import { useTranslation } from 'react-i18next';
import { VideoItem } from '../types';
import { ModalShell, ModalHeader, ModalBody } from './ModalOverlaySystem';

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

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: VideoItem | null;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, video }) => {
  const { i18n } = useTranslation();
  const en = i18n.resolvedLanguage?.startsWith('en') || i18n.language?.startsWith('en');
  if (!isOpen || !video) return null;

  const localized = en ? EN_VIDEO_TEXT[video.id] : undefined;

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
      <ModalHeader
        title={localized?.title || video.title}
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
            {localized?.description || video.description}
          </p>
        </div>
      </ModalBody>
    </ModalShell>
  );
};

