/**
 * Photo Upload & LocalStorage Persistence Feature
 */

import { $ } from '../utils/helpers.js';
import { safeGetStorage, safeSetStorage } from '../utils/helpers.js';
import { SELECTORS, STORAGE_KEYS } from '../config.js';

export const initPhotoUpload = () => {
  const photoFrame = $(SELECTORS.photoLabel);
  const photoImg = $(SELECTORS.photoImg);
  const fileInput = $(SELECTORS.photoInput);

  if (!photoFrame || !photoImg || !fileInput) return;

  const DEFAULT_PHOTO = 'assets/images/profilepic.png';

  const setPhoto = (src) => {
    if (!src) return;
    photoImg.src = src;
    photoFrame.classList.add('has');
  };

  // Restore saved photo from localStorage if present; otherwise default to profilepic.png
  const savedPhoto = safeGetStorage(STORAGE_KEYS.PHOTO);
  if (savedPhoto) {
    setPhoto(savedPhoto);
  } else if (photoImg.getAttribute('src')) {
    photoFrame.classList.add('has');
  } else {
    setPhoto(DEFAULT_PHOTO);
  }

  // Handle new image upload
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate that it is an image
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setPhoto(dataUrl);
      safeSetStorage(STORAGE_KEYS.PHOTO, dataUrl);
    };
    reader.readAsDataURL(file);
  });

  // Accessible keyboard activation for the photo frame label
  photoFrame.setAttribute('tabindex', '0');
  photoFrame.setAttribute('role', 'button');
  photoFrame.setAttribute('aria-label', 'Upload or change profile photo');

  photoFrame.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInput.click();
    }
  });
};
