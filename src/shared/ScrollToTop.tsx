import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down enough
  const toggleVisibility = () => {
    // Check if we're halfway through the page
    const scrolled = window.scrollY;
    const fullHeight = document.documentElement.scrollHeight;

    // Show button when user has scrolled past halfway point of the page
    const isHalfwayOrMore = scrolled >= fullHeight / 2;

    setIsVisible(isHalfwayOrMore);
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-[#8D74F2] to-[#7051EF] text-white shadow-md z-50 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-lg animate-fade-in focus:outline-none focus:ring-2 focus:ring-[#7051EF] focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
