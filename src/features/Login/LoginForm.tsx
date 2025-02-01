import Form from 'react-bootstrap/Form';

interface LoginFormProps {
    onChangeFormData : any;
}

function LoginForm({onChangeFormData} : LoginFormProps) {
    return (
       <Form>
            <Form.Group className='mt-5 mb-2 ms-4 me-4'>
                <Form.Control className='pt-4 pb-4' name="email" type="email" placeholder="User Name or Email ID" onChange={onChangeFormData}/>
            </Form.Group>
            <Form.Group className='mt-5 mb-2 ms-4 me-4'>
                <Form.Control className='pt-4 pb-4' name="password" type="password" placeholder="Password" onChange={onChangeFormData}/>
            </Form.Group>
       </Form>
  );
}

export default LoginForm;