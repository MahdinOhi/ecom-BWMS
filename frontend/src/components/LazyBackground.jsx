import React, { useEffect, useRef } from 'react';

const LazyBackground = ({ src, className = '', children, style = {} }) => {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const bgSrc = node.getAttribute('data-bg-src');
                    if (bgSrc) {
                        node.style.backgroundImage = `url(${bgSrc})`;
                        node.removeAttribute('data-bg-src');
                    }
                    observer.unobserve(node);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            data-bg-src={src}
            className={className}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default LazyBackground;
