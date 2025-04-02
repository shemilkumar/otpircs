import React, { useState, useEffect, useRef } from "react";
import "./QuotesSection.css";

// Define the type for a quote
interface Quote {
  name: string;
  title: string;
  text: string;
  img: string;
}

// Quotes data
const quotes: Quote[] = [
  {
    name: "Tom Hawck",
    title: "IT Solution Company",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQzfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Harry John",
    title: "IT Solution Company",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Larry Will",
    title: "IT Solution Company",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  // Add other quotes here
];

const mobileWidth = 640;
const tabWidth = 1080;

const QuotesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const indexRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getElem();
  }, [screenWidth]);

  const getElem = () => {
    const index = indexRef.current;
    let hAndW = '';
    const screenHeight = window.innerHeight;

    for (let i = 0; i < index.length; i++) {
      const targetElem = index[i];
      if (!targetElem) continue;

      if (screenWidth > tabWidth) {
        hAndW = randomPos(60, screenHeight / (index.length / 1.5)) + "px";
        if (i < index.length / 1.9) {
          targetElem.style.left = randomPos(100, targetElem.parentElement!.offsetWidth / 3 - 100) + "px";
          targetElem.style.top = (targetElem.parentElement!.offsetHeight / (index.length / 2)) * (i - 1) + "px";
        } else {
          targetElem.style.right = randomPos(100, targetElem.parentElement!.offsetWidth / 3 - 100) + "px";
          targetElem.style.left = "auto";
          targetElem.style.top = (targetElem.parentElement!.offsetHeight / (index.length / 2)) * ((index.length - 1) - i) + "px";
        }
      } else if (screenWidth <= tabWidth && screenWidth >= mobileWidth) {
        hAndW = randomPos(30, screenHeight / (index.length / 1.5)) + "px";
        targetElem.parentElement!.style.minHeight = "70vh";
        targetElem.style.bottom = "0px";
        targetElem.style.left = (targetElem.parentElement!.offsetWidth / (index.length - 1)) * (i - 1) + "px";
        targetElem.style.zIndex = "100";
        targetElem.style.top = "auto";
      } else if (screenWidth < mobileWidth) {
        targetElem.style.left = "50%";
      }

      targetElem.style.width = hAndW;
      targetElem.style.height = hAndW;
      targetElem.classList.add("moves");
    }
  };

  const handleClickQuote = (index: number) => {
    setActiveIndex(index);
  };

  const randomPos = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIndex(activeIndex === 0 ? quotes.length - 1 : activeIndex - 1);
    } else if (direction === "right") {
      setActiveIndex(activeIndex === quotes.length - 1 ? 0 : activeIndex + 1);
    }
  };

  return (
    <div className="container relative">
      <div className="quotes-section">
        <div className="bg"></div>
        <div className="wrapper" id="wrapper">
          <div className="quote-row">
            {quotes.map((quote, index) => (
              <div
                key={index}
                ref={(el) => (indexRef.current[index] = el)}
                className={`quote-column ${index === activeIndex ? "col-active show" : ""}`}
                onClick={() => handleClickQuote(index)}
              >
                <div className="col-inner">
                  <div className="author-meta">
                    <div className="box-image-inner image-cover">
                      <img src={quote.img} alt={quote.name} />
                    </div>
                    <div className="author-info">
                      <div className="author-name">
                        <p className="person-name">{quote.name}</p>
                      </div>
                      <div className="author-status">
                        <p className="person-title">{quote.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="quote-wrapper">
                    <div className="quote-symbol">❛</div>
                    <div className="box-text-inner">
                      <p>{quote.text}</p>
                    </div>
                    <div className="quote-symbol">❜</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="arrows-wrap">
          <div className="arrow left-arrow" onClick={() => handleArrowClick("left")}></div>
          <div className="arrow right-arrow" onClick={() => handleArrowClick("right")}></div>
        </div>
      </div>
    </div>
  );
};

export default QuotesSection;
