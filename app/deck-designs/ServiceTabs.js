'use client'
import { useState } from "react"

export default function ServiceTabs1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="blog-single-post">
                <h3 className="title custom-title">Deck Designs: Elevating Outdoor Living Spaces</h3>
                <div className="text text-align">
                    <p>Decks serve as a seamless bridge between indoor comfort and the natural beauty of the
                            outdoors. At P&D Engineering Solutions LLC, we specialize in creating stunning and
                            functional deck designs that transform your outdoor space into a haven of relaxation
                            and entertainment. Our deck designs are meticulously crafted to harmonize with your
                            home's architecture and the surrounding landscape, offering a perfect blend of
                            aesthetics, durability, and practicality.
                     </p>
                </div>
            </div>
            <div className="row  tabs-container">
                <div className="col-md-5">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                        
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>
                            Personalized Outdoor Retreats
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                            Functional Elegance
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                            Durable Beauty
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                            <a className={activeIndex == 5 ? "nav-link active" : "nav-link"}>
                            Seamless Integration
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                            <a className={activeIndex == 6 ? "nav-link active" : "nav-link"}>
                            Creative Elements
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(7)}>
                            <a className={activeIndex == 7 ? "nav-link active" : "nav-link"}>
                            Your Outdoor Oasis Awaits
                            </a>
                        </li>
                       
                    </ul>
                </div>
                <div className="col-md-7">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
       
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Personalized Outdoor Retreats</h4>
                            <div className="text  text-align">
                            Every homeowner envisions their outdoor space differently. Whether you dream of a
                            sprawling deck for entertaining guests, a cozy nook for intimate gatherings, or a multi-
                            level structure that embraces the contours of your backyard, our deck designs are
                            tailored to your unique vision. We understand the importance of personalization,
                            ensuring that your deck becomes an extension of your lifestyle and a reflection of your
                            taste.
                                                
                            </div>
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Functional Elegance</h4>
                            <div className="text  text-align">A well-designed deck seamlessly integrates form and function. Our experts focus on
                            optimizing the layout and maximizing the usable space, allowing you to enjoy outdoor
                            activities comfortably. From barbecues and al fresco dining to quiet moments of
                            solitude, our deck designs cater to various functions, enhancing the overall functionality
                            of your outdoor area.</div>
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Durable Beauty</h4>
                            <div className="text  text-align">
                            Outdoor structures are exposed to the elements, requiring materials that can withstand
                            the test of time. We prioritize durability in our deck designs, using high-quality, weather-
                            resistant materials that not only endure the elements but also retain their beauty over
                            the years. Whether you prefer classic wood, low-maintenance composite, or innovative
                            eco-friendly materials, we offer options that combine aesthetic appeal with longevity.
                                </div>
                        </div>
                        <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Seamless Integration</h4>
                            <div className="text text-align">
                            A well-designed deck seamlessly integrates with your home and the natural
                            surroundings, enhancing the overall curb appeal and value of your property. Our designs
                            take into account the architectural style of your home, ensuring that the deck
                            complements the existing structure harmoniously. We also consider factors such as
                            sunlight, shade, and wind patterns, creating a space that is comfortable and enjoyable
                            throughout the day.
                            </div>
                                            
                        </div>
                        <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Creative Elements</h4>
                            <div className="text  text-align">
                            Beyond the basic structure, our deck designs often incorporate creative elements that
                            elevate the visual appeal. From built-in seating and planters to stylish railings and
                            lighting, these thoughtful details add character and charm to your outdoor retreat. Each
                            element is carefully chosen to enhance the aesthetics and functionality of your deck.
                                                
                                </div>
                        </div>
                        <div className={activeIndex == 7 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Your Outdoor Oasis Awaits</h4>
                            <div className="text  text-align">Whether you envision a simple platform overlooking a garden or an expansive multi-
                            tiered deck with panoramic views, our team at P&D Engineering Solutions LLC is
                            dedicated to bringing your dream outdoor space to life. Let us design a deck that
                            becomes the focal point of your outdoor lifestyle, offering endless opportunities for
                            relaxation, entertainment, and connection with nature. Contact us today, and let the
                            transformation of your outdoor oasis begin.</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
