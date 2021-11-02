import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1><b>Our Blog</b></h1>
            <h2>Check out these articles about us.</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/e.jpg"
                            text="Explore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur nibh non tempor tempor."
                            label="Companies"
                            path="/services"
                        />
                         <CardItem
                            src="images/f.jpg"
                            text="Explore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur nibh non tempor tempor."
                            label="Luxury Weddings"
                            path="/services"
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src="images/g.jpg"
                            text="Explore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur nibh non tempor tempor."
                            label="Stage Shows"
                            path="/services"
                        />
                         <CardItem
                            src="images/h.jpg"
                            text="Explore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur nibh non tempor tempor."
                            label="Parties"
                            path="/services"
                        />
                         <CardItem
                            src="images/i.jpg"
                            text="Explore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur nibh non tempor tempor."
                            label="Special Location Events"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
