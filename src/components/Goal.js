import react from 'react'
import { Card } from "react-bootstrap";

export default function Goal() {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src="https://media.npr.org/assets/img/2020/02/06/sls_block_1_cargo_inflight_moon_tright-e83011d998dc4c8d4794dfc1d8cd1ca1dbb19656.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>My Primary Goal</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}