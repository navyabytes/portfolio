/**
 * Animated Number Counters Feature
 * Uses GSAP ScrollTrigger to count up numbers when scrolled into view.
 */

import { $$ } from '../utils/helpers.js';
import { SELECTORS, ANIMATION_CONFIG } from '../config.js';

export const initCounters = () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  const counterElements = $$(SELECTORS.numberCounters);

  counterElements.forEach((el) => {
    const targetValue = parseFloat(el.dataset.to || '0');
    const decimals = parseInt(el.dataset.d || '0', 10);
    const counterObj = { value: 0 };

    window.ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        window.gsap.to(counterObj, {
          value: targetValue,
          duration: ANIMATION_CONFIG.counterDuration,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = counterObj.value.toFixed(decimals);
          },
        });
      },
    });
  });
};
