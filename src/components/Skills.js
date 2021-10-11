import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Card, Accordion} from 'react-bootstrap'


export default function Skills() {
    return (
        <div className='skills-set'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Proficient Skills</Accordion.Header>
                        <Accordion.Body>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Javascript</ListGroup.Item>
                                <ListGroup.Item>HTML</ListGroup.Item>
                                <ListGroup.Item>CSS(Cascading Style Sheets)</ListGroup.Item>
                                <ListGroup.Item>Node.JS</ListGroup.Item>
                                <ListGroup.Item>MySQL</ListGroup.Item>
                                <ListGroup.Item>GitHub</ListGroup.Item>
                                <ListGroup.Item>GitBash</ListGroup.Item>
                                <ListGroup.Item>Mongoose DB</ListGroup.Item>
                                <ListGroup.Item>MaterialUI</ListGroup.Item>
                                <ListGroup.Item>Wireframing Tools</ListGroup.Item>
                                <ListGroup.Item>.JSON</ListGroup.Item>
                                <ListGroup.Item>API Integration</ListGroup.Item>
                                <ListGroup.Item>Customer Service</ListGroup.Item>
                                <ListGroup.Item>Project Management</ListGroup.Item>
                                <ListGroup.Item>Transportation Planning</ListGroup.Item>
                                <ListGroup.Item>Documentation</ListGroup.Item>
                                <ListGroup.Item>Organization</ListGroup.Item>
                                <ListGroup.Item>Computer Hardware Systems</ListGroup.Item>
                                <ListGroup.Item>Windows Operating Systems</ListGroup.Item>
                                <ListGroup.Item>Excel</ListGroup.Item>
                                <ListGroup.Item>PowerPoint</ListGroup.Item>
                                <ListGroup.Item>Microsoft Outlook</ListGroup.Item>
                                <ListGroup.Item>Fiber Based Network Systems</ListGroup.Item>
                                <ListGroup.Item>SAP/TM</ListGroup.Item>
                                <ListGroup.Item>Microsoft Word</ListGroup.Item>
                                <ListGroup.Item>Technical support</ListGroup.Item>
                                <ListGroup.Item>Customer Service</ListGroup.Item>
                            </ListGroup>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
        </div>
    )
}