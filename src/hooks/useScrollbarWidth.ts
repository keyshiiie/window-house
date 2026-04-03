// src/hooks/useScrollbarWidth.ts
import { useEffect, useState } from 'react';

export const useScrollbarWidth = () => {
    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    useEffect(() => {
        const calculateScrollbarWidth = () => {
            const width = window.innerWidth - document.documentElement.clientWidth;
            setScrollbarWidth(width);
        };

        calculateScrollbarWidth();
        window.addEventListener('resize', calculateScrollbarWidth);
        
        return () => {
            window.removeEventListener('resize', calculateScrollbarWidth);
        };
    }, []);

    return scrollbarWidth;
};