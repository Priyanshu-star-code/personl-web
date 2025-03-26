import { useEffect } from 'react';

export const useCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    const glow = document.createElement('div');
    cursor.className = 'custom-cursor';
    glow.className = 'cursor-glow';
    document.body.appendChild(cursor);
    document.body.appendChild(glow);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      glow.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    };

    const handleMouseDown = () => {
      cursor.classList.add('cursor-click');
      setTimeout(() => cursor.classList.remove('cursor-click'), 500);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, input, textarea')) {
        cursor.style.transform = 'scale(1.5)';
        glow.style.width = '60px';
        glow.style.height = '60px';
      }
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
      glow.style.width = '40px';
      glow.style.height = '40px';
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.body.removeChild(cursor);
      document.body.removeChild(glow);
    };
  }, []);
};