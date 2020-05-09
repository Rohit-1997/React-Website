import * as React from 'react';


function Home() {
    return (
        <div className  = "container-fluid">
            <div className="jumbotron promo-container" >
            <div id="promo">
                <h1 style={{ fontSize: "50px" }}>SC Jewellers</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p className="lead">
                <a className="btn btn-info btn-lg" href="/products" role="button">Explore!</a>
            </p>
            </div>
            </div>


            {/* Welcome section */}
            <div className="container welcome-container">
                <h1 style={{ fontWeight: "bolder" }}>Welcome Note!</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
            </div>


            {/* dark section */}
            <div className="dark-section">
            <div className="welcome-container">
                <h1 style={{ fontWeight: "bolder" }}>Why Choose Us</h1>
                <div className="row">
                <div className="col-md-4">
                    <svg className="bi bi-gem icon" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.1.7a.5.5 0 01.4-.2h9a.5.5 0 01.4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 01-.8 0L.1 5.3a.5.5 0 010-.6l3-4zm11.386 3.785l-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004l.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495l5.062-.005L8 13.366 5.47 5.495zm-1.371-.999l-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l2.92-.003 2.193 6.82L1.5 5.5zm7.889 6.817l2.194-6.828 2.929-.003-5.123 6.831z" clipRule="evenodd"/>
                    </svg>
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
        
                <div className="col-md-4">
                    <svg className="bi bi-circle icon" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd"/>
                    </svg>
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
        
        
                <div className="col-md-4">
                    <svg className="bi bi-diamond icon" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 010-2.098L6.95.435zm1.4.7a.495.495 0 00-.7 0L1.134 7.65a.495.495 0 000 .7l6.516 6.516a.495.495 0 00.7 0l6.516-6.516a.495.495 0 000-.7L8.35 1.134z" clipRule="evenodd"/>
                    </svg>
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
        
                </div>
            </div>
            </div>



            {/* Gallery Section */}

            <div className="welcome-container">
            <h1 style={{ fontWeight: "bolder"}}>Gallery</h1>
            <div className="row">
                <div className="col-md-4 gallery-img">
                <img src="./images/Gallery-1.jpg" alt="one" className="img-thumbnail" />
                </div>
                <div className="col-md-4 gallery-img">
                <img src="./images/Gallery-2.jpg" alt="two" className="img-thumbnail" />
                </div>
                <div className="col-md-4 gallery-img">
                <img src="./images/Gallery-3.jpg" alt="three" className="img-thumbnail" />
                </div>
            </div>
            </div>
    </div>
    );
}

export default Home;