import { useRef, useState } from 'react';

const useScrollToTop = () => {
  const ref = useRef(null);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  const handleScroll = (event) => {
    const yAxis = event.nativeEvent.contentOffset.y;
    setShowScrollToTopButton(yAxis > 200); // Show button after 200px scrolled
  };

  const scrollToTop = () => {
    if (ref.current) {
      ref.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  return { ref, showScrollToTopButton, handleScroll, scrollToTop };
};

export default useScrollToTop;
