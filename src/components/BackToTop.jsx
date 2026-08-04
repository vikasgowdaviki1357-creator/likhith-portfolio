import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={top}
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-cyan-400 text-black shadow-lg hover:scale-110 transition z-50"
    >
      <FaArrowUp className="mx-auto" />
    </button>
  );
}

export default BackToTop;