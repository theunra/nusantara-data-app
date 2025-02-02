import { Col, Container, Row } from "react-bootstrap";

import TopPanel from "../features/Home/TopPanel";
import { VerticalBarChart, VerticalBarChartDataset } from "../features/Home/VerticalBarChart";

import { faker } from '@faker-js/faker';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { PieChart } from "../features/Home/PieChart";

  
function Home() {
    const navigate = useNavigate();
    const {logout} = useAuth();

    const labels = ['Label 1', 'Label 2', 'Label 3'];
    const datas : VerticalBarChartDataset[] = [
      {
          label: 'Category 1',
          data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      },
      {
          label: 'Category 2',
          data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      },
      {
        label: 'Category 2',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 }))
      },
    ];

    const onLogout = () => {
      logout();
      navigate('/');
    }

    return (
        <Container fluid style={{height: '100vh'}}>
            <TopPanel onLogoutClick={onLogout}/>
            <Row>
                <Col><VerticalBarChart labels={labels} datas={datas} title="Example Chart" /></Col>
                <Col><PieChart labels={labels} datas={datas} title="Pie"/></Col>
            </Row>
        </Container>
  );
}

export default Home;