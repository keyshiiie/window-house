import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Универсальная функция для анимации появления элементов при скролле.
 * @param {string} selector - CSS-селектор элементов
 * @param {object} options - Настройки анимации
 */
export const animateOnScroll = (selector, options = {}) => {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;

  const {
    y = 30,
    duration = 1,
    stagger = 0,
    scale = 1,
    trigger = null,
    start = 'top 80%',
    delay = 0,
    opacity = 0,
  } = options;

  gsap.from(elements, {
    opacity,
    y,
    scale,
    duration,
    stagger,
    delay,
    ease: 'power2.out',
    clearProps: 'transform', // Сбрасываем transform после анимации
    scrollTrigger: {
      trigger: trigger ? trigger : elements[0],
      start,
      once: true, // Анимация срабатывает только один раз
    }
  });
};

/**
 * Анимация для заголовков и текста (при загрузке страницы)
 */
export const animateHero = (selector) => {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;
  
  gsap.from(elements, {
    opacity: 0,
    y: 40,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power2.out',
  });
};