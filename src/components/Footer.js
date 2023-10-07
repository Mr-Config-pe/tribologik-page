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
              <strong>TRIBOLOGIK®</strong>
              <br /> 1212, 172nd Street <br /> Hammond IN 46324<br />
              Phone: +1 (219) 228 4844 <br />
              Email: <br />
              <span className="email-footer">
                page@bymr-config.com
              </span>{" "}
              <br />
            </p>
          </Col>
          <Col size={12} sm={4}>
            <h3>
              DIRECCION <br /> EN PERU
            </h3>
            <p>
              <strong>TRIBOLOGIK®</strong>
              <br /> Calle Eucapiltos 58 <br /> Surco, Lima 14 - PERU{" "}
              <br />
              Celular: 00000000 <br />
              Email: <br />
              <span className="email-footer">
                pagina@bymr-config.com
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
            <p className="footer-copyright">
              Copyright 2023 TRIBOLOGIK®.
              <br /> Developer <a href="https://www.linkedin.com/in/mr-config" target="_blak">By Mr.Config</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
