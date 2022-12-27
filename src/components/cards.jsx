import React from 'react'
import '../CSS/nav.css'
import '../CSS/cards.css'

function cards() {
    return (
        <>
            <h4 className='disc'>Discover Best Of Online Events</h4>
            <div className='container'>
                <div className='card'>
                    <img src="https://fakeimg.pl/2x1" alt="" />
                    <div className='card-info'>
                        <div className='date'>
                            <h1>JAN</h1>
                            <p>25</p>
                        </div>
                        <div className='title'>
                            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing</h1>
                            <p>Online</p>
                            <div className='icon'>
                                <i class="fa-solid fa-star"></i>
                                <p>16 people are interested! </p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='card'>
                    <img src="https://fakeimg.pl/2x1" alt="" />
                    <div className='card-info'>
                        <div className='date'>
                            <h1>JAN</h1>
                            <p>25</p>
                        </div>
                        <div className='title'>
                            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing</h1>
                            <p>Online</p>
                            <div className='icon'>
                                <i class="fa-solid fa-star"></i>
                                <p>16 people are interested! </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <img src="https://fakeimg.pl/2x1" alt="" />
                    <div className='card-info'>
                        <div className='date'>
                            <h1>JAN</h1>
                            <p>25</p>
                        </div>
                        <div className='title'>
                            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing</h1>
                            <p>Online</p>
                            <div className='icon'>
                                <i class="fa-solid fa-star"></i>
                                <p>16 people are interested! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cards
