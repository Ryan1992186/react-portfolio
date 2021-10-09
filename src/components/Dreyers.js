import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Backdrop } from '@mui/material';




export default function Dreyers() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Card sx={{ maxWidth: 450 }}>
                <CardActionArea>
                    <CardMedia onClick={handleToggle}
                        component="img"
                        height="auto"
                        image="https://www.dreyersgrandicecream.com/images/logo.png"
                    />
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <CardContent>
                            <Typography variant="body3" color="text.primary">
                                <CardContent>
                                    <Card className='Dreyers'>
                                        Researched and recommended cost-effective transportation methods utilizing fourkites carrier tracking.
                                        Planned travel routes within SAP/TM
                                        Dispatch load tenders to external customers (carriers)
                                        Processed LTL/FTL trailers based on load details and customer order requirements.
                                        Research overage, shortage, and damaged product by examining carrier and customer documentation.
                                        Utilized SAP/TM to schedule appointments in and out of network.
                                        Maintain expeptional customer relations with in and out of network customers.
                                        Took on the role of Freight Claims 11/2020 - Current.
                                        Research and file all claim documentation relative to transportation damages while minimizing cost and risk per the carmak ammendnent.
                                        Utilizing company portal, enter and and all claims related to product overages, shortages, and damages either on or off-site with customer
                                        Utilize SAP/TM and R/3 functions to process full order refusals
                                        Reviewed coverage determinations, investigated and evaluated claims and negotiated settlements.
                                        Gathered proper documentation and data to prepare claims for submission.
                                        Followed all company procedures to keep data confidential.
                                        Cultivated carrier relations and tracked financials to ensure optimum performance.
                                        Worked with vendors to obtain optimal prices and delivery schedules.
                                    </Card>
                                </CardContent>
                            </Typography>
                        </CardContent>
                    </Backdrop>
                </CardActionArea>
            </Card>
        </div>
    );
}