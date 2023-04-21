import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ServiceCard } from "./ServiceCard";
import serviImg1 from "../assets/img/service-img1.jpg";
import serviImg2 from "../assets/img/service-img2.jpg";
import serviImg3 from "../assets/img/service-img3.jpg";
import serviImg4 from "../assets/img/service-img4.jpg";
import serviImg5 from "../assets/img/service-img5.jpg";
import serviImg6 from "../assets/img/service-img6.jpg";
import "animate.css";
// import TrackVisibility from 'react-on-screen';

export const Services = () => {
  const services = [
    {
      title: "Control de Calidad",
      description: "Design & Development",
      imgUrl: serviImg1,
      link: "https://mantenimientoindustriales.com/?id=ControlCalidad",
    },
    {
      title: "Investigación y Desarrollo",
      description: "Design & Development",
      imgUrl: serviImg2,
      link: "https://mantenimientoindustriales.com/?id=InvestigacionDesarrollo",
    },
    {
      title: "Administración de muestras",
      description: "Design & Development",
      imgUrl: serviImg3,
      link: "https://mantenimientoindustriales.com/?id=AdministracionMuestra",
    },
    {
      title: "Procedimiento de Muestreo",
      description: "Design & Development",
      imgUrl: serviImg4,
      link: "https://mantenimientoindustriales.com/?id=ProcedimientoMuestra",
    },
    {
      title: "Instrumentos de muestreo",
      description: "Design & Development",
      imgUrl: serviImg5,
      link: "https://mantenimientoindustriales.com/?id=IntrumentoMuestra",
    },
    {
      title: "Instrumentos de Ensayo",
      description: "Design & Development",
      imgUrl: serviImg6,
      link: "https://mantenimientoindustriales.com/?id=InstrumentosEnsayo",
    },
  ];

  return (
    <section className="service" id="services">
      <Container>
        <Row>
          <Col size={12}>
            {/* <TrackVisibility> */}
            <div className={"animate__animated animate__fadeIn"}>
              <h2>Servicios</h2>
              <p>
                {" "}
                Tribologik®, Fundado en 1984, nuestro laboratorio es considerado
                como uno de los laboratorios de pruebas de aceites más
                experimentado de Norteamérica.
              </p>
              <Tab.Container id="services-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Servicio 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Servicio 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Servicio 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content
                  id="slideInUp"
                  className={"animate__animated animate__slideInUp"}
                >
                  <Tab.Pane eventKey="first">
                    <Row>
                      {services.map((service, index) => {
                        return <ServiceCard key={index} {...service} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>Aqui va otros servicios.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Aqui va otros servicios.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
