import '../styles/Home.css'
import react from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom";

function Home() {
    const [currentSection, updateCurrentSection] = useState(1)

    return (
        <react.Fragment>
            {currentSection === 1 ? 
            <section className="news">
                <Link to='shop/homme/hauts'>COLLECTION HOMMES</Link>
                <div id="info">
                    <div id="groupAsymetric121">
                        <figure>
                            <img src='https://static.zara.net/photos///2021/V/0/2/p/4684/337/403/32/w/423/4684337403_15_1_1.jpg?ts=1623255247937' alt="no-idea"></img>
                        </figure>
                        <figure>
                            <img src='https://static.zara.net/photos///2021/V/0/2/p/4571/337/806/32/w/866/4571337806_15_1_1.jpg?ts=1623250229618' alt="no-idea"></img>
                        </figure>
                        <figure>
                            <img src='https://static.zara.net/photos///2021/V/0/2/p/4570/337/403/33/w/423/4570337403_15_1_1.jpg?ts=1623255263827' alt="no-idea"></img>
                        </figure>
                    </div>
                </div>
                <div id="balls">
                    <div id='currentBall' className='ball' onClick={ () => updateCurrentSection(1) }></div>
                    <div className='ball' onClick={ () => updateCurrentSection(2) }></div>
                    <div className='ball' onClick={ () => updateCurrentSection(3) }></div>
                </div>
            </section> : currentSection === 2 ?
            <section className="news">
                <Link to='shop/femme/hauts'>MEILLEURES VENTES FEMMES</Link>
                <div id="info">
                    <div id="groupSymetric111">
                        <figure>
                            <img src='https://static.zara.net/photos///2021/I/0/1/p/2856/213/250/2/w/423/2856213250_2_1_1.jpg?ts=1623747452122' alt="no-idea"></img>
                        </figure>
                        <figure>
                            <img src='https://static.zara.net/photos///2021/I/0/1/p/2856/213/250/2/w/348/2856213250_1_1_1.jpg?ts=1623747457807' alt="no-idea"></img>
                        </figure>
                        <figure>
                            <img src='https://static.zara.net/photos///2021/I/0/1/p/0167/008/800/2/w/423/0167008800_1_1_1.jpg?ts=1623747417602' alt="no-idea"></img>
                        </figure>
                    </div>
                </div>
                <div id="balls">
                    <div className='ball' onClick={ () => updateCurrentSection(1) }></div>
                    <div id='currentBall' className='ball' onClick={ () => updateCurrentSection(2) }></div>
                    <div className='ball' onClick={ () => updateCurrentSection(3) }></div>
                </div>
            </section> : currentSection === 3 ?
            <section className="news">
                <Link to='shop/homme/hauts'>COLLECTION ÉTÉ 2021</Link>
                <div id="info">
                    <div id="groupSymetric11">
                        <figure>
                            <img src='https://static.zara.net/photos///2021/V/T/2/p/3562/320/300/2/w/532/3562320300_15_1_1.jpg?ts=1623927433728' alt="no-idea"></img>
                        </figure>
                        <figure>
                            <img src='https://static.zara.net/photos///2021/I/0/2/p/3562/300/710/32/w/532/3562300710_15_1_1.jpg?ts=1623406533538' alt="no-idea"></img>
                        </figure>
                    </div>
                </div>
                <div id="balls">
                    <div className='ball' onClick={ () => updateCurrentSection(1) }></div>
                    <div className='ball' onClick={ () => updateCurrentSection(2) }></div>
                    <div id='currentBall' className='ball' onClick={ () => updateCurrentSection(3) }></div>
                </div>
            </section>
             : null }
        </react.Fragment>
    )
}

export default Home