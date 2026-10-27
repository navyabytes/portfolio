/**
 * Scrollspy & Scroll Utilities
 * Updates active navigation link as sections are scrolled into viewport.
 */

import { $$, $ } from '../utils/helpers.js';
import { SELECTORS } from '../config.js';

export const initScrollspy = () => {
  const sections = $$(SELECTORS.sections);
  const navLinks = $$(SELECTORS.navLinks);

  if (!sections.length || !navLinks.length) return;

  const updateActiveLink = () => {
    const scrollPos = window.scrollY + 120; // Offset for sticky header

    let currentSectionId = '';
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
};
