import { Col, Container, Row } from "react-bootstrap";

export const About = () => {
  return (
    <section className="about" id="about-us">
      <Container>
        <Row>
          <Col size={12}>
            <h2>¿Quienes Somos?</h2>
            <br />
            <strong className="about-st1">TRIBOLOGIK®</strong>
            <p className="about-p1">
              TRIBOLOGIK® LABORATORIO DE ANALISIS
              DE LUBRICANTES que nos permite tener a una amplia gama de
              servicios de Mantenimiento Industrial para industrias en general.
              toda infraestructura que implique el uso de Comprensores,
              Generadores, Turbinas, Transporte, Plantas de Producción,
              Refinerías, Industria Alimentaria, Farmacéutica, Química, Plantas
              de Minería y Proceso. Industria Aeronáutica, Refinerías de
              Petróleo, entre muchas más. el servicio que ofrecemos es
              mantenimiento predictivo. este mantenimiento significa el ahorro
              de cientos de Miles de Dólares y que está en mucha ventaja del
              Mantenimiento Preventivo y Correctivo.
            </p>
            <strong className="about-st2">
              LABORATORIO DE ANALISIS DE LUBRICANTES TRIBOLOGIK®
            </strong>
            <p className="about-p2">
              El laboratorio de análisis de lubricantes Tribologik® ascende
              análisis de lubricantes a nivel superior de fiabilidad. Nuestro
              Sistema Experto Tribologik® tiene la capacidad única para
              interpretar ensayos de aceites automáticamente: Tribologik®
              automáticamente genera un diagnóstico sobre la condición del
              aceite y del equipamiento, formula recomendaciones de
              mantenimiento y revela la lógica detrás de estas recomendaciones a
              fin de predecir el mantenimiento que necesitará el equipamiento
              por medio de ensayos programados regularmente.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
