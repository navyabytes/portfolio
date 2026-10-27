/**
 * Animations Feature Module
 * GSAP Timeline entrance animations, continuous floating ambient motion, and ScrollTrigger reveals.
 */

import { $$, prefersReducedMotion } from '../utils/helpers.js';
import { SELECTORS, ANIMATION_CONFIG } from '../config.js';
import { initCounters } from './counters.js';

/**
 * Splits text into individual character and word span elements for kinetic animation.
 */
export const initTextSplit = () => {
  const splitTargets = $$(SELECTORS.splitText);

  splitTargets.forEach((el) => {
    const text = el.textContent || '';
    el.innerHTML = text
      .split(' ')
      .map(
        (word) =>
          `<span class="w">${[...word]
            .map((char) => `<span class="ch">${char}</span>`)
            .join('')}</span>`
      )
      .join(' ');
  });
};

/**
 * Initializes all GSAP-driven entrance, continuous, and scroll-triggered animations.
 */
export const initAnimations = () => {
  initTextSplit();

  // If GSAP or ScrollTrigger are not loaded, or reduced motion is requested, gracefully exit
  if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion()) {
    return;
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  // 1. Initial Page Entrance Timeline
  const entranceTl = gsap.timeline({ defaults: ANIMATION_CONFIG.defaults });

  entranceTl
    .from(SELECTORS.header, {
      y: -70,
      autoAlpha: 0,
      duration: ANIMATION_CONFIG.headerDuration,
      clearProps: 'transform',
    })
    .from(
      SELECTORS.greeting,
      {
        x: -30,
        autoAlpha: 0,
        duration: 0.7,
      },
      '-=0.3'
    )
    .from(
      '.ch',
      {
        yPercent: 115,
        rotate: 7,
        duration: ANIMATION_CONFIG.splitCharDuration,
        stagger: ANIMATION_CONFIG.splitCharStagger,
      },
      '-=0.4'
    )
    .from(
      SELECTORS.staggerHero,
      {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.12,
        clearProps: 'all',
      },
      '-=0.5'
    )
    .from(
      SELECTORS.photoLabel,
      {
        scale: 0.85,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'back.out(1.5)',
        clearProps: 'all',
      },
      '-=1'
    )
    .from(
      SELECTORS.floatingBadges,
      {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(2)',
      },
      '-=0.3'
    )
    .from(
      SELECTORS.socialButtons,
      {
        x: 30,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.08,
        clearProps: 'transform,opacity,visibility',
      },
      '-=0.6'
    );

  // 2. Continuous Ambient Floating Animations
  gsap.to(SELECTORS.floatingBadges, {
    y: -9,
    repeat: -1,
    yoyo: true,
    duration: ANIMATION_CONFIG.floatingBadgeDuration,
    ease: 'sine.inOut',
    stagger: 0.5,
  });

  gsap.to(SELECTORS.blobs, {
    y: 14,
    x: -8,
    repeat: -1,
    yoyo: true,
    duration: ANIMATION_CONFIG.blobDuration,
    ease: 'sine.inOut',
    stagger: 0.6,
  });

  // 3. ScrollTrigger Reveals for Content Sections
  const sections = $$(SELECTORS.contentSections);
  sections.forEach((section) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          once: true,
        },
        defaults: ANIMATION_CONFIG.defaults,
      })
      .from(section.querySelectorAll(SELECTORS.revealLabels), {
        y: 34,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.12,
        clearProps: 'transform,opacity,visibility',
      })
      .from(
        section.querySelectorAll(SELECTORS.revealElements),
        {
          y: 44,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.09,
          clearProps: 'transform,opacity,visibility',
        },
        '-=0.4'
      );
  });

  // 4. Initialize Animated Counters
  initCounters();
};
