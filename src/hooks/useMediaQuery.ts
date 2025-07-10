import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure window is available
      const mediaQueryList = window.matchMedia(query);
      setMatches(mediaQueryList.matches);

      const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
      mediaQueryList.addEventListener('change', listener);
      return () => mediaQueryList.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
