import React, { useState, useEffect } from "react";

type Props = {};

const HomeBanner = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/home-banner.jpg.webp",
      subtitle: "Architecture Design",
      title: "Create Stunning Architectural Designs",
      description: "Professional architectural planning and design services for residential and commercial projects"
    },
    {
      id: 2,
      image: "/images/1.jpg.webp",
      subtitle: "Building Construction",
      title: "Quality Construction Services",
      description: "Expert construction services with attention to detail and superior craftsmanship"
    },
    {
      id: 3,
      image: "/images/2.jpg.webp",
      subtitle: "Building Renovation",
      title: "Transform Your Space",
      description: "Complete renovation and remodeling services to modernize your existing property"
    },
    {
      id: 4,
      image: "/images/3.jpg.webp",
      subtitle: "Building Maintenance",
      title: "Professional Maintenance",
      description: "Comprehensive maintenance services to keep your property in excellent condition"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="home_banner_area">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="container">
              <div className="banner_content text-center">
                <span className="slide-subtitle">{slide.subtitle}</span>
                <h3 className="slide-title">
                  {slide.title}
                </h3>
                <p className="slide-description">{slide.description}</p>
                <a className="main_btn" href="services">
                  See Our Services
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button className="carousel-control prev" onClick={goToPrevious} aria-label="Previous slide">
          <i className="ti-angle-left"></i>
        </button>
        <button className="carousel-control next" onClick={goToNext} aria-label="Next slide">
          <i className="ti-angle-right"></i>
        </button>

        {/* Dots indicator */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
