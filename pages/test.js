import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function App() {
  let parentNode = null;

  useEffect(() => {
    console.log(parentNode);
    gsap.set(parentNode, { autoAlpha: 0 });

    const tl = new gsap.timeline();
    tl.to(parentNode, { autoAlpha: 1, duration: 0.3 });
    tl.to(parentNode, { autoAlpha: 0, duration: 0.3 });
    tl.to(parentNode, { autoAlpha: 1, duration: 0.3 });
  }, []);

  return (
    <div className="App">
      <h1 ref={(el) => (parentNode = el)}>My Title</h1>
      <h2>My Subtitle</h2>
      <p>My paragraph</p>
    </div>
  );
}
