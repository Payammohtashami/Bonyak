import React, { useState, useEffect } from 'react';
const useOnScreen = (reference:any, rootMargin = '0px', withClass:any) => {

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {


    const observer = new IntersectionObserver(
      ([entry]) => {
        return !withClass ? !isIntersecting && entry.isIntersecting && setIntersecting(entry.isIntersecting) : entry.isIntersecting && reference.current.classList.add('observed')
      },
      { rootMargin },
    );

    if (reference.current) {
      observer?.observe(reference.current);
    }
    return () => {
      observer?.unobserve(reference.current);
    };
  }, []);

  return isIntersecting;
};

export default useOnScreen;
