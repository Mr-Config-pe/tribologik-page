import Carousel from 'react-bootstrap/Carousel';

export const Banner = () => {

  return (
    <div className='banner' id='home'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.indgelec.com.pe//web/images/slider/2.jpg?800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>MANTENIMIENTOS INDUSTRIALES</h2>
          <p><span className='highlight'>Asociado con Tribologik®  - 20 Años de Experiencia</span></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.indgelec.com.pe//web/images/slider/3.jpg?800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>LABORATORIO DE ANALISIS DE LUBRICANTE</h2>
          <p><span className='highlight'>¡Tribologik® es el único sistema experto de análisis de aceites!</span></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.indgelec.com.pe//web/images/slider/1.jpg?800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>TRABAJA CON NOSOTROS</h2>
          <p><span className='highlight'>Apostamos por el potencial humano de nuestra gente</span></p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

