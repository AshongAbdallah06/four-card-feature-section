import './App.css';
import supervisor from './images/icon-supervisor.svg';
import teamBuilder from './images/icon-team-builder.svg';
import karma from './images/icon-karma.svg';
import calculator from './images/icon-calculator.svg';


function App() {
    return (
        <div className="App">
            <header>
                <p className='header-text'>
                    Reliable, efficient delivery
                </p>
                <h1>
                    Powered by Technology
                </h1>
                <p className='text'>
                    Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
                </p>
            </header>

            <main>
                <div className='block border-top blue'>
                    <div className="heading">Supervisor</div>
                    <p className="block-text">
                        Monitors activity to identify project roadblocks
                    </p>
                    
                    <img src={supervisor} alt="" />
                </div>

                <div className='cont'>
                    <div className='block border-top red'>
                        <div className="heading">Team Builder</div>
                        <p className="block-text">
                            Scans our talent network to create the optimal team for your project
                        </p>
                        
                        <img src={teamBuilder} alt="" />
                    </div>

                    <div className='block border-top orange'>
                        <div className="heading">Karma</div>
                        <p className="block-text">
                            Regularly evaluates our talent to ensure quality
                        </p>
                        
                        <img src={karma} alt="" />
                    </div>
                </div>

                <div className='block border-top darkblue'>
                    <div className="heading">Supervisor</div>
                    <p className="block-text">
                        Uses data from past projects to provide better delivery estimates
                    </p>
                    
                    <img src={calculator} alt="" />
                </div>
            </main>
        </div>
    );
}

export default App;
