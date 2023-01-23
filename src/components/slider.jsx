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
                        src="https://wallpapercave.com/wp/wp2349395.jpg"
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
                        src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg"
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
                        src="https://www.hire4event.com/service/19-05-29-04-05-24corporate%20event%20by%20hire4event.jpg"
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

