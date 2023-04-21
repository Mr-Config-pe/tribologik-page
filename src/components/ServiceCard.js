import { Col } from "react-bootstrap";

export const ServiceCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="servi-imgbx">
        <img src={imgUrl} alt="imgUrl" />
        <div className="servi-txtx">
          <h4>{title}</h4>
          {/* <span>{description}</span> | Hasta un proximo aviso*/}
          <a href={link} target="alt_">Ver más</a>
        </div>
      </div>
    </Col>
  )
}
