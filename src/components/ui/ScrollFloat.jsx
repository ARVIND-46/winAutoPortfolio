import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'top 90%',
  scrollEnd = 'bottom center',
  stagger = 0.03,
  scrub = 1,
  trigger = null,
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    // Ensure children is treated as a string even if React wraps it
    const text = Array.isArray(children) ? children.join('') : (typeof children === 'string' ? children : '');
    return text.split('').map((char, index) => (
      <span className="inline-block char-span" key={index} style={{ opacity: 0 }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    
    // Resolve trigger: could be a ref object or a DOM element
    let triggerElement = el;
    if (trigger) {
      if (trigger.current) {
        triggerElement = trigger.current;
      } else if (trigger instanceof HTMLElement) {
        triggerElement = trigger;
      }
    }

    const charElements = el.querySelectorAll('.char-span');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charElements,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%'
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: triggerElement,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: scrub
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [scrollContainerRef, trigger, animationDuration, ease, scrollStart, scrollEnd, stagger, children]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <span className={`inline-block leading-[1.2] ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
