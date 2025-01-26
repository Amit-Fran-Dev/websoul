"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

function SmoothScrolling({ children }) {
  const lenis = useLenis();

  useEffect(() => {
    const handleLinkClick = (event) => {
      const href = event.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement && lenis) {
          lenis.scrollTo(targetElement);
        }
      }
    };

    // Attach event listener for anchor links
    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, 
        duration: 2, 
        // easing: 'easeOutCubic',
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;


// // Lib/Lenis.js
// "use client";
// import { ReactLenis } from "@studio-freight/react-lenis";

// function SmoothScrolling({ children }) {
//   return (
//     <ReactLenis root options={{ lerp: 0.1, duration: 2, easing: 'easeOutCubic' }}>
//       {children}
//     </ReactLenis>
    
//   );
// }

// export default SmoothScrolling;
