'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { closeImageViewer } from '@/store/slices/imageViewerSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function ImageViewerModal() {
  const dispatch = useAppDispatch();
  const { isOpen, imageSrc, altText } = useAppSelector((state) => state.imageViewer);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeImageViewer());
      }
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, dispatch]);

  return (
    <AnimatePresence>
      {isOpen && imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            onClick={() => dispatch(closeImageViewer())}
            className="absolute top-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Controls hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-black/50 text-white text-sm rounded-full pointer-events-none">
            Scroll to zoom • Drag to pan
          </div>

          <div className="w-full h-full flex items-center justify-center p-4 md:p-12 overflow-hidden">
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={4}
              centerOnInit
              wheel={{ step: 0.1 }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <React.Fragment>
                  {/* Floating Controls */}
                  <div className="absolute right-6 bottom-8 z-50 flex flex-col gap-2">
                    <button onClick={() => zoomIn()} className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors shadow-lg">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                    <button onClick={() => zoomOut()} className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors shadow-lg">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                    <button onClick={() => resetTransform()} className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors mt-2 shadow-lg">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                    </button>
                  </div>
                  
                  <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing">
                      <img 
                        src={imageSrc} 
                        alt={altText}
                        className="max-w-[100vw] max-h-[100vh] object-contain select-none shadow-2xl"
                        draggable={false}
                        onError={(e) => {
                          console.error('[ImageViewer] Failed to load image:', imageSrc);
                        }}
                      />
                    </div>
                  </TransformComponent>
                </React.Fragment>
              )}
            </TransformWrapper>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
