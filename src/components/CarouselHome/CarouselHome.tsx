import { Carousel } from 'react-bootstrap'

const CarouselHome = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={2800}>
                    <img
                        className="d-block w-100"
                        style={{ maxHeight: "500px", objectFit: "cover",}}
                        src="src/assets/images/image3.jpg"
                        alt='organizdor de tareas'
                    />
                    <Carousel.Caption className='bg-black'>
                        <h3>ORGANIZADOR DE TAREAS</h3>
                        <p>Con este organizador va a poder de dispones mas tiempo libre.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2800}>
                    <img
                        className="d-block w-100"
                        style={{ maxHeight: "500px", objectFit: "cover" }}
                        src="src/assets/images/image.jpg"
                        alt='organizdor de tareas'
                    />
                    <Carousel.Caption className='bg-black'>
                        <h3>ORGANIZADOR DE TAREAS</h3>
                        <p>De facil uso, muy simple y practico.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2800}>
                    <img
                        className="d-block w-100"
                        style={{ maxHeight: "500px", objectFit: "cover" }}
                        src="src/assets/images/image1.jpg"
                        alt='organizdor de tareas'
                    />
                    <Carousel.Caption className='bg-black'>
                        <h3>ORGANIZADOR DE TAREAS</h3>
                        <p>
                            Este organizador posee todas las caracteristicas basica que necesita.-
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselHome
