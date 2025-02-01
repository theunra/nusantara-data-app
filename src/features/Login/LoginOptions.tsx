import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import googleSvg from '../../assets/google.svg';
import facebookSvg from '../../assets/facebook.svg';
import xSvg from '../../assets/x.svg';

function LoginOptions() {
    return (
       <Container>
            <Row className='mb-5 ms-3 me-3 justify-content-center'>
                <Col className='text-center'><hr/></Col>
                <Col className='text-center'><h5>Sign in with</h5></Col>
                <Col className='text-center'><hr/></Col>
            </Row>
            <Row className='text-center ' style={{paddingLeft: '20%', paddingRight: '20%'}}>
                <Col>
                    <Button className='m-2 ps-4 pe-4 border bg-light'><Image src={googleSvg} rounded/></Button>
                    <Button className='m-2 ps-4 pe-4 border bg-light'><Image src={facebookSvg} rounded/></Button>
                    <Button className='m-2 ps-4 pe-4 border bg-light'><Image src={xSvg} rounded /></Button>
                </Col>
            </Row>
       </Container>
  );
}

export default LoginOptions;