/**
 * Main Application Entry Point
 * Orchestrates modular components, features, and interactive behaviors.
 * Vanilla JavaScript ES Module - Light Mode Exclusively.
 */

import { initNavigation } from './components/navigation.js';
import { initScrollspy } from './components/scroll.js';
import { initPhotoUpload } from './features/photo-upload.js';
import { initAnimations } from './features/animations.js';

const initApp = () => {
  // Initialize responsive navigation and drawer
  initNavigation();

  // Initialize scrollspy for active section indicators
  initScrollspy();

  // Initialize profile photo uploader with local persistence
  initPhotoUpload();

  // Initialize split-text, entrance, ambient floating, and scroll-triggered animations
  initAnimations();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
