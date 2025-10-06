import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
//hook para manejar el scroll y si es movil
function useScrollAndMobile(threshold = 10, breakpoint = 900) {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery(`(max-width:${breakpoint}px)`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { scrolled, isMobile };
}

export default useScrollAndMobile;