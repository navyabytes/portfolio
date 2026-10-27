/**
 * Utility Helpers
 * Safe DOM querying, localStorage wrappers, and accessibility checks.
 */

/**
 * Single element selector
 * @param {string} selector
 * @param {Document|Element} context
 * @returns {Element|null}
 */
export const $ = (selector, context = document) => context.querySelector(selector);

/**
 * Multiple element selector
 * @param {string} selector
 * @param {Document|Element} context
 * @returns {Element[]}
 */
export const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

/**
 * Safely retrieve value from localStorage
 * @param {string} key
 * @param {any} fallback
 * @returns {string|null}
 */
export const safeGetStorage = (key, fallback = null) => {
  try {
    const value = localStorage.getItem(key);
    return value !== null ? value : fallback;
  } catch {
    return fallback;
  }
};

/**
 * Safely set value in localStorage
 * @param {string} key
 * @param {string} value
 * @returns {boolean}
 */
export const safeSetStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
};

/**
 * Checks if user prefers reduced motion
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
