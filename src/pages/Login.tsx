import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LoginForm from '../features/Login/LoginForm';
import LoginOptions from '../features/Login/LoginOptions';
import LoginAlert from '../features/Login/LoginAlert';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchLogin } from '../services/authApi';
import { useAuth, DataProfile } from '../contexts/AuthContext';

function Login() {
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [onLoading, setOnLoading] = useState(false);
    const navigate = useNavigate();
    const {login} = useAuth();

    const formDataChanged = (event : any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    const onClickLogin = async () => {
        setOnLoading(true);

        const result = await fetchLogin({email: formData.email, password : formData.password})
        console.log(result)
        
        if(result.code == 200) {            
            const dataProfile : DataProfile = result.dataProfile;
            login(dataProfile);
            navigate('/');
        } 
        else if (result.code == 405 || result.code == 400) {
            setShowAlert(true);
        }
        else {
            console.error("Terjadi kesalahan");
        }
        setOnLoading(false);
    };

    return (
        <Container fluid style={{height: '100vh', paddingLeft: '2vw', paddingRight: '2vw'}}>
            <LoginAlert show={showAlert} onClick={setShowAlert} />      
            <Row className='h-100'>
                {/* Left Panel */}
                <Col className='shadow border m-3' style={{paddingTop: '2%', paddingLeft: '5%', paddingRight: '5%'}}>
                </Col>
                {/* Login Panel */}
                <Col className='shadow border m-3' style={{paddingTop: '2%', paddingLeft: '5%', paddingRight: '5%'}}>
                    <Row>
                        <Col className='text-center m-5'>
                            <h3>Login Sistem</h3>
                        </Col>
                    </Row>
                    <Row>
                        <LoginForm onChangeFormData={formDataChanged}/>
                    </Row>
                    <Row style={{paddingLeft: '40%', paddingRight: '40%', paddingTop: '10%', paddingBottom: '10%'}}>
                        {onLoading ? <p>Mohon tunggu...</p> : <Button className='pt-3 pb-3' onClick={()=>onClickLogin()}>Sign In</Button>}
                    </Row>
                    <Row>
                        <LoginOptions/>
                    </Row>
                </Col>
            </Row>
      </Container>        
  );
}

export default Login;