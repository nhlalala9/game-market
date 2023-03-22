import './header.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Crazy from '../images/crazyeights-logo.png'
import Chess from '../images/Chess_board_opening_staunton.jpeg';
import Checkers from '../images/Checkers_.jpg';
import Tic from '../images/tic tac.jpg';


const Header = () => {
    return (
        <div>
            <div class="header">
                <div class="header-right">

                </div>
            </div>

            <div className="cards">
                <div class="MuiBox-root jss8 jss6">
                    <div class="MuiBox-root jss9 jss7">
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Chess</Card.Title>
                                <Card.Img variant="top" src={Chess} />
                                <div className="button">
                                    <Button variant="primary">Play</Button>
                                    <Button variant="primary">Leader</Button>
                                </div>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
                <div class="MuiBox-root jss8 jss6">
                    <div class="MuiBox-root jss9 jss7">
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Checkers</Card.Title>
                                <Card.Img variant="top" src={Checkers} />
                                <div className="button">
                                    <Button variant="primary">Play</Button>
                                    <Button variant="primary">Leader</Button>
                                </div>

                            </Card.Body>
                        </Card>

                    </div>
                </div>
                <div class="MuiBox-root jss8 jss6">
                    <div class="MuiBox-root jss9 jss7">
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Crazy Eight</Card.Title>
                                <Card.Img variant="top" style={{ width: '16rem' }} src={Crazy} />
                                <div className="button">
                                    <Button variant="primary">Play</Button>
                                    <Button variant="primary">Leader</Button>
                                </div>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
                <div class="MuiBox-root jss8 jss6">
                    <div class="MuiBox-root jss9 jss7">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tic Tac Toe</Card.Title>
                                <Card.Img variant="top" style={{ width: '16rem' }} src={Tic} />
                                <div className="button">
                                    <Button className="buttonCard" variant="primary">Play</Button>
                                    <Button variant="primary">Leader</Button>
                                </div>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;