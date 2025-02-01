import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

interface LoginAlertProps {
  show: boolean;
  onClick: Function;
}

function LoginAlert({show, onClick} : LoginAlertProps) {
  return (
    <>
      <Alert style={{position: 'fixed', left: '35vw', width: '30vw', marginTop: '30vh'}} className='p-4' show={show} variant="light">
        <h5>Warning</h5>
        <hr />
        <p style={{marginBottom: '15vh', paddingTop: '2vh'}}>Password Salah!</p>
        <div className="d-flex justify-content-end">
          <Button onClick={() => onClick(false)} variant="dark" className='rounded-0'>
            Close
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default LoginAlert;