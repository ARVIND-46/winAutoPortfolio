import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

const useMedia = (queries, values, defaultValue) => {
  const get = () => values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async urls => {
  await Promise.all(
    urls.map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          // Performance optimization: decoding attribute
          img.decode ? img.decode().then(resolve).catch(resolve) : (img.onload = img.onerror = () => resolve());
        })
    )
  );
};

const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false
}) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Performance Optimization: Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Once in view, we can start loading
        }
      },
      { rootMargin: '200px' } // Start loading 200px before it enters
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
    }
  }, [items, isInView]);

  const grid = useMemo(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = (child.height || 400) / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            // Optimization: Lower blur or remove to improve FPS
            ...(blurToFocus && { filter: 'blur(5px)' }) 
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.8,
            ease: 'power3.out',
            delay: index * (stagger / 2), // Slightly faster stagger
            clearProps: "filter" // Clear filter after animation for performance
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const getInitialPosition = item => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case 'top': return { x: item.x, y: -200 };
      case 'bottom': return { x: item.x, y: window.innerHeight + 200 };
      case 'left': return { x: -200, y: item.y };
      case 'right': return { x: window.innerWidth + 200, y: item.y };
      case 'center': return { x: containerRect.width / 2 - item.w / 2, y: containerRect.height / 2 - item.h / 2 };
      default: return { x: item.x, y: item.y + 100 };
    }
  };

  const handleMouseEnter = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    const modal = document.querySelector('.lightbox-modal');
    if (modal) {
      gsap.to(modal, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => {
          setSelectedItem(null);
          document.body.style.overflow = '';
        }
      });
    } else {
      setSelectedItem(null);
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    if (selectedItem) {
      const modal = document.querySelector('.lightbox-modal');
      const content = document.querySelector('.lightbox-content');
      if (modal && content) {
        gsap.set(modal, { opacity: 0 });
        gsap.set(content, { scale: 0.8, opacity: 0, y: 20 });
        
        gsap.to(modal, { opacity: 1, duration: 0.5, ease: 'power2.out' });
        gsap.to(content, { 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          delay: 0.1, 
          ease: 'expo.out' 
        });
      }
    }
  }, [selectedItem]);

  const containerHeight = useMemo(() => {
    if (!grid.length) return 0;
    return Math.max(...grid.map(item => item.y + item.h));
  }, [grid]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: containerHeight }}>
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="absolute box-content cursor-pointer"
          style={{ willChange: 'transform, width, height, opacity' }}
          onClick={() => {
            if (item.url) {
              window.open(item.url, '_blank', 'noopener');
            } else {
              handleItemClick(item);
            }
          }}
          onMouseEnter={e => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={e => handleMouseLeave(item.id, e.currentTarget)}
        >
          {/* Performance Optimization: Using img tag with loading="lazy" and decoding="async" */}
          <div className="relative w-full h-full rounded-[20px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden bg-white/5">
             <img 
               src={item.img} 
               alt={item.alt || ""} 
               loading="lazy" 
               decoding="async" 
               className="w-full h-full object-cover transition-opacity duration-500"
               style={{ opacity: imagesReady ? 1 : 0 }}
             />
            {colorShiftOnHover && (
              <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
            )}
          </div>
        </div>
      ))}

      {selectedItem && createPortal(
        <div 
          className="lightbox-modal fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12"
          onClick={closeLightbox}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full backdrop-blur-md border border-white/10 z-[10000]"
          >
            <X size={32} />
          </button>
          
          <div 
            className="lightbox-content relative max-w-7xl w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedItem.img} 
              alt={selectedItem.alt || ""} 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Masonry;
