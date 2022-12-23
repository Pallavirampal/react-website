import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../CSS/nav.css'

function UncontrolledExample() {
    return (
        <>
            <Carousel>
                <Carousel.Item className='image'>
                    <img
                        className="d-block w-100"
                        src="img1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='image'>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cXVpenxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='image'>
                    <img
                        className="d-block w-100"
                        src="https://www.cmu.edu/cmtoday/media/514618/rubiks_cube_1400x700-min.jpg%3Fanchor=center&mode=crop&width=1400&height=700&rnd=131315417010000000"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default UncontrolledExample;

