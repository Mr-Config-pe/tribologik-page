import product1 from "../assets/img/product1.png";
import product2 from "../assets/img/product2.jpg";
import product3 from "../assets/img/product3.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Products = () => {
  const responsive = {
    superLargeDesktop: {
      // Puede ser cualquier nombre.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="product" id="products">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product-bx wow zoomIn">
              <h2>Productos</h2>
              <p>
                El éxito de una producción eficiente comienza con un
                mantenimiento industrial de calidad, y nuestros productos están
                diseñados para brindar la máxima confiabilidad y durabilidad en
                cualquier entorno de trabajo.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme product-slider"
              >
                <div className="item">
                  <img src={product1} alt="Aceite" />
                  <h5>Tanque de Combustible</h5>
                </div>
                <div className="item">
                  <img src={product2} alt="Llanta" />
                  <h5>Aceite Industrial</h5>
                </div>
                <div className="item">
                  <img src={product3} alt="Faro" />
                  <h5>Limpiador de Acero</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
