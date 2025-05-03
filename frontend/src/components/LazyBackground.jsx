import React, { useEffect, useRef } from 'react';

const LazyBackground = ({ src, className = '', children, style = {} }) => {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry], obs) => {
                if (entry.isIntersecting) {
                    const webpSrc = node.dataset.bgWebp;
                    const fallbackSrc = node.dataset.bgFallback;
                    const img = new Image();
                    img.src = webpSrc;
                    img.onload = () => {
                        node.style.backgroundImage = `url(${webpSrc})`;
                        node.removeAttribute('data-bg-webp');
                        node.removeAttribute('data-bg-fallback');
                    };
                    img.onerror = () => {
                        node.style.backgroundImage = `url(${fallbackSrc})`;
                        node.removeAttribute('data-bg-webp');
                        node.removeAttribute('data-bg-fallback');
                    };
                    obs.unobserve(node);
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            data-bg-webp={`/img/hero/${src}.webp`}
            data-bg-fallback={`/img/hero/${src}.png`}
            className={className}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                willChange: 'background-image',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default LazyBackground;
