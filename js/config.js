/**
 * Portfolio Configuration & Constants
 */

export const SELECTORS = {
  header: '.hd',
  nav: '#nav',
  navLinks: '#nav a',
  menuToggle: '#mb',
  photoLabel: '#ph',
  photoImg: '#im',
  photoInput: '#ph input',
  splitText: '[data-split]',
  numberCounters: '.num',
  revealElements: '.rv',
  revealLabels: '.lab, .ttl',
  staggerHero: '.rl',
  greeting: '.hi',
  floatingBadges: '.fl',
  blobs: '.blob',
  socialButtons: '.soc',
  sections: 'section',
  contentSections: 'section:not(#home)',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/navyabytes',
  linkedin: 'https://www.linkedin.com/in/navya040806/',
  email: 'mailto:navyasachdeva.creates@gmail.com',
  twitter: 'https://x.com/navya_bytes',
};

export const STORAGE_KEYS = {
  PHOTO: 'navya-photo',
};

export const ANIMATION_CONFIG = {
  defaults: { ease: 'power3.out' },
  headerDuration: 0.7,
  splitCharDuration: 0.9,
  splitCharStagger: 0.045,
  counterDuration: 1.6,
  floatingBadgeDuration: 2.4,
  blobDuration: 3.5,
};
