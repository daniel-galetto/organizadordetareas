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
                        src="https://img.freepik.com/vector-gratis/ordenador-portatil-realista-vista-superior_23-2147509355.jpg?1&w=360&t=st=1701053875~exp=1701054475~hmac=a2fb7e0473d4af84fc6013a1e813f56fc80f814f22863ecfc76b70a7cbadbbf7"
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
                        src="https://img.freepik.com/psd-gratis/gente-negocios-trabajando-computadora-portatil_53876-12025.jpg?w=740&t=st=1701053916~exp=1701054516~hmac=c79aee5d3be5215915cb16a4475c460d9b61a1ad583257692951df59a433b512"
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
