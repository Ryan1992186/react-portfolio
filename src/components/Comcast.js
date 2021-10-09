import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Backdrop } from '@mui/material';




export default function Comcast() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia onClick={handleToggle}
                        component="img"
                        height="auto"
                        image="https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/COMCAST-1611854661.jpg"
                    />
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <CardContent>
                            <Typography variant="body3" color="text.primary">
                                <CardContent>
                                    <Card className='Comcast'>
                                        Conducted tests on fiber optic cables and corrected faults.
                                        Installed, set up and repaired devices and system components.
                                        Read and interpreted technical documentation in order to accurately configure equipment.
                                        Provided IT and software trouble-shooting support to rest of the organization.
                                        Exceeded customer satisfaction by finding creative solutions to problems.
                                        Identified and rolled out both short- and long-term supply chain plans while optimizing procedures to decrease annual expenses.
                                        Reduced inventory losses through development and implementation of improved cycle count and accounting methodologies.
                                        Retained a 99.8-100% inventory accuracy for 4 consecutive years
                                        Provide field technicians updated knowledge on all new and upcoming products, while rolling out to calls to assist when needed.
                                        Transport product to multiple fulfillment centers and DCs to help maintain regional inventory levels.
                                        Manage "dark spokes" or unmanned warehouses by performing building maintenance, inventory levels, and equipment reconciles
                                        Provide excellent customer service to both internal customers and external, contractors included.
                                        Maintain a technician reconciliation accuracy count of 123.1% for all 5 consecutive years.
                                        Maintain a consistent understanding of OSP and Premise installation procedures.
                                        Process outdated equipment and materials for DCA utilizing ERP and EIS/CSG systems.
                                        Purge CMACs and SN of unknown origin from databases to retain consistent logical inventory for both technicians and warehouse.
                                        Create reports for internal and external Xfinity stores to review aging unreturned or activated equipment.
                                        Generate reports for upper management on regional spoke inventory levels and adjust accordingly by warehouse and technician needs.
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