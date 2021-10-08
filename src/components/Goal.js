// import React from 'react'
import { Card } from "react-bootstrap";

export default function Goal() {
    return (
        <div classname='mission-card'>
            <Card className="bg-dark text-white">
                <Card.Img src="https://genelab.nasa.gov/sites/default/files/inline-images/NASA_GeneLab_banner_0.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        <center>Don’t watch the clock; do what it does. Keep going. – Sam Levenson </center>
                    </Card.Text>
                    <Card.Text></Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}