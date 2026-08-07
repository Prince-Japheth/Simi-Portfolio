export interface MotionVideoItem {
  id: string;
  videoUrl: string;
  isMobile: boolean;
  aspectRatio: 'portrait' | 'landscape';
}

export const MOTION_VIDEOS: MotionVideoItem[] = [
  {
    id: 'motion-1',
    videoUrl: '/videos/motion-design/VID-20260807-WA0007_web.mp4',
    isMobile: false,
    aspectRatio: 'landscape',
  },
  {
    id: 'motion-2',
    videoUrl: '/videos/motion-design/VID-20260806-WA0013_web.mp4',
    isMobile: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'motion-3',
    videoUrl: '/videos/motion-design/VID-20260806-WA0015_web.mp4',
    isMobile: false,
    aspectRatio: 'landscape',
  },
  {
    id: 'motion-4',
    videoUrl: '/videos/motion-design/VID-20260806-WA0014_web.mp4',
    isMobile: true,
    aspectRatio: 'portrait',
  },
];
