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
                            src="images/e.webp"
                            text="Explore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur nibh non tempor tempor."
                            label="Companies"
                            path="/blogarticlepage"
                        />
                         <CardItem
                            src="images/f.webp"
                            text="Explore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur nibh non tempor tempor."
                            label="Luxury Weddings"
                            path="/blogarticlepage"
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src="images/g.webp"
                            text="Explore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur nibh non tempor tempor."
                            label="Stage Shows"
                            path="/blogarticlepage"
                        />
                         <CardItem
                            src="images/h.jpg"
                            text="Explore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur nibh non tempor tempor."
                            label="Parties"
                            path="/blogarticlepage"
                        />
                         <CardItem
                            src="images/i.webp"
                            text="Explore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur nibh non tempor tempor."
                            label="Special Location Events"
                            path="/blogarticlepage"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
