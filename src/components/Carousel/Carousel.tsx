import { useState, useEffect, useCallback } from "react";
import "./Carousel.css";

export interface CarouselSlide {
  image: string;
  imageAlt?: string;
  label: string;
  stat: string;
  statUnit: string;
  statLabel: string;
  description: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number; 
  color?: string;
}

export default function Carousel({
  slides,
  autoPlayInterval = 0,
  color = "#e00000",
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;

      setAnimating(true);
      setCurrent((index + slides.length) % slides.length);

      setTimeout(() => setAnimating(false), 400);
    },
    [animating, current, slides.length]
  );

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    if (!autoPlayInterval) return;

    const id = setInterval(() => goTo(current + 1), autoPlayInterval);

    return () => clearInterval(id);
  }, [autoPlayInterval, current, goTo]);

  const slide = slides[current];

  return (
    <div
      className="carousel-wrapper"
      style={
        {
          "--carousel-color": color,
        } as React.CSSProperties
      }
    >
      <button
        className="carousel-arrow carousel-arrow--left"
        onClick={prev}
        aria-label="Anterior"
      >
        &#8249;
      </button>

      <div
        className={`carousel-card ${
          animating ? "carousel-card--fade" : ""
        }`}
      >
        {/* Imagen */}
        <div className="carousel-image-section">
          <img
            src={slide.image}
            alt={slide.imageAlt ?? slide.label}
            className="carousel-image"
          />

          <div className="carousel-image-overlay" />

          <span className="carousel-label">{slide.label}</span>
        </div>

        {/* Info */}
        <div className="carousel-info-section">
          <div className="carousel-stat-row">
            <span className="carousel-drop-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C12 2 4 10.5 4 15.5C4 19.6 7.6 23 12 23C16.4 23 20 19.6 20 15.5C20 10.5 12 2 12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>

            <span className="carousel-stat-number">{slide.stat}</span>

            <span className="carousel-stat-unit">
              {slide.statUnit}
            </span>
          </div>

          <p className="carousel-stat-label">{slide.statLabel}</p>

          <p className="carousel-description">{slide.description}</p>
        </div>
      </div>

      <button
        className="carousel-arrow carousel-arrow--right"
        onClick={next}
        aria-label="Siguiente"
      >
        &#8250;
      </button>

      {/* Puntos */}
      <div className="carousel-dots" role="tablist">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`carousel-dot ${
              i === current ? "carousel-dot--active" : ""
            }`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}