import { Carousel } from 'react-bootstrap'

const CarouselHome = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={2800}>
                    <img
                        className="d-block w-100"
                        style={{ maxHeight: "500px", objectFit: "cover",}}
                        src="https://img.freepik.com/foto-gratis/mano-femenina-escribiendo-teclado-portatil_1150-15742.jpg?w=740&t=st=1701053397~exp=1701053997~hmac=402710090c00120f57a013e74490d302fdf8ce7131b4a701fd23cb9c8fc75183"
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
                        src="https://github.com/daniel-galetto/organizadordetareas/blob/945ce3193646c7418dbb7ad9697d651ebc313e0d/src/assets/images/image.jpg"
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
                        src="/home/daniel/developer/utnreact/trabajoIntegrador/organizadorTareas/organizadortareas/src/assets/images/image1.jpg"
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
