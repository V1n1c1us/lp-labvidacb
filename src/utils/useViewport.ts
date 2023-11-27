import { useEffect, useState } from 'react';

const useViewport = () => {
  const [viewport, setViewport] = useState({
    height: 0,
    isMobile: false,
    width: 0,
  });

  const handleResize = () => {
    const isMobile: boolean = window.innerWidth <= 991;

    setViewport({
      height: window.innerHeight,
      isMobile: isMobile,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};

export default useViewport;
