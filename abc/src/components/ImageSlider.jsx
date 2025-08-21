import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "bootstrap/js/dist/carousel";

export default function ImageSlider() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = new Carousel(carouselRef.current, {
      interval: 3000,
      ride: "carousel",
      pause: false,
      wrap: true,
    });

    carousel.cycle(); // Start auto sliding

    return () => carousel.dispose(); // Clean up on unmount
  }, []);

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      ref={carouselRef}
      style={styles.wrapper}
    >
      <div className="carousel-inner">
        {["first", "second", "third", "fourth"].map((img, index) => (
          <div
            key={img}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`/src/assets/${img}.png`}
              alt={`${img} slide`}
              className="d-block w-100"
              style={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    marginTop: "45px",
    marginLeft: "5vw",
    marginRight: "8vw",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "20px",
    width: "89vw",
    height:"40vw",
    
  },
  image: {
    objectFit: "fill",
    height: "40vw",
    borderRadius: "20px",
    width:"89vw",

  },
};
