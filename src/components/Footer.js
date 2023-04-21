import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/tribologik_logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-start">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={3}>
            <img src={logo} alt="Logo" />
            <p>
              TECHNO STANDARD SAC Tiene como socio estratégico a TRIBOLOGIK®
              LABORATORIO DE ANALISIS DE LUBRICANTES que nos permite tener a una
              amplia gama de servicios de Mantenimiento Industrial para
              industrias en general.
            </p>
          </Col> /Para cuando desee agregar otra columna*/}
          <Col size={12} sm={4} className="colfooter1">
            <h3>
              DIRECCION <br /> EN USA
            </h3>
            <p>
              <strong>TECHNO STANDARD CORP.</strong>
              <br /> 8345 NW 68 Street <br /> Miami, Florida 33166 <br />
              Phone: (786) 2458168 <br />
              Email: <br />
              <span className="email-footer">
                sales@mantenimientoindustriales.com
              </span>{" "}
              <br />
            </p>
          </Col>
          <Col size={12} sm={4}>
            <h3>
              DIRECCION <br /> EN PERU
            </h3>
            <p>
              <strong>TECHNO STANDARD CORP.</strong>
              <br /> Calle Domingo Casanova 337 <br /> Lince, Lima 14-PERU{" "}
              <br />
              Telf. 440-0111
              <br />
              Celular: 985250146 <br />
              Email: <br />
              <span className="email-footer">
                ventas@mantenimientoindustriales.com
              </span>
            </p>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end colfooter3">
            <img src={logo} alt="Logo" className="logo-company2" />
            <br />
            <div className="social-icon">
              <a href="https://www.linkedin.com" target="alt_">
                <img src={navIcon1} alt="icon-linkedin" />
              </a>
              <a href="https://www.facebook.com/" target="alt_">
                <img src={navIcon2} alt="icon-facebook" />
              </a>
              <a href="https://www.instagram.com/" target="alt_">
                <img src={navIcon3} alt="icon-instagram" />
              </a>
            </div>
            <p>
              Copyright 2023 TECHNO STANDARD CORP.
              <br /> Todos Los Derechos Reservados <br /> By Mr.Config
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
