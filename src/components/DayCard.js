import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import { DayWrapper } from "../styles";

const DayCard = () => {
    return (
        <Col>
            <DayWrapper >
                <Card>
                    <CardHeader>Card Header</CardHeader>
                    <CardBody>
                        <h3>69°</h3>
                        {/* <img  /> */}
                        <p><strong>High:</strong> 96°</p>
                        <p><strong>Low:</strong> 43°</p>
                        <p><strong>Precip:</strong> </p>
                    </CardBody>
                </Card>
            </DayWrapper>
        </Col>
    )
}

export default DayCard;