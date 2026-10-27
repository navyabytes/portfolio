/**
 * Navigation Component
 * Handles mobile drawer toggle, outside clicks, and accessible keyboard escape.
 */

import { $, $$ } from '../utils/helpers.js';
import { SELECTORS } from '../config.js';

export const initNavigation = () => {
  const menuBtn = $(SELECTORS.menuToggle);
  const nav = $(SELECTORS.nav);
  const navLinks = $$(SELECTORS.navLinks);

  if (!menuBtn || !nav) return;

  const setOpen = (isOpen) => {
    nav.classList.toggle('open', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  };

  menuBtn.setAttribute('aria-expanded', 'false');

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.contains('open');
    setOpen(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setOpen(false);
    });
  });

  // Close when clicking outside of the navigation and menu button
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
      setOpen(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      menuBtn.focus();
    }
  });
};
