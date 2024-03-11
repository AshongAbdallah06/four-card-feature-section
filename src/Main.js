import React from 'react';
import supervisor from './images/icon-supervisor.svg';
import teamBuilder from './images/icon-team-builder.svg';
import karma from './images/icon-karma.svg';
import calculator from './images/icon-calculator.svg';

const Main = () => {
    return (
        <main>
            <div className='block border-top blue'>
                <div className="heading">
                    Supervisor
                </div>
                <p className="block-text">
                    Monitors activity to identify project roadblocks
                </p>
                
                <img src={supervisor} alt="" />
            </div>

            <div className='cont'>
                <div className='block border-top red'>
                    <div className="heading">
                        Team Builder
                    </div>
                    <p className="block-text">
                        Scans our talent network to create the optimal team for your project
                    </p>
                    
                    <img src={teamBuilder} alt="" />
                </div>

                <div className='block border-top orange'>
                    <div className="heading">
                        Karma
                    </div>
                    <p className="block-text">
                        Regularly evaluates our talent to ensure quality
                    </p>
                    
                    <img src={karma} alt="" />
                </div>
            </div>

            <div className='block border-top darkblue'>
                <div className="heading">
                    Calculator
                    </div>
                <p className="block-text">
                    Uses data from past projects to provide better delivery estimates
                </p>
                
                <img src={calculator} alt="" />
            </div>
        </main>
    )
}

export default Main