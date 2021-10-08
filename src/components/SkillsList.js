import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack'
import { Backdrop } from '@mui/material';




export default function ActionAreaCard() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className='pivotpoint'>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia onClick={handleToggle}
            component="img"
            height="200"
            image="https://pbs.twimg.com/profile_images/1010174825086705664/QCtdQWjU.jpg"
          />
          <CardContent>
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <Typography variant="body3" color="text.primary">
                <CardContent>
                  <Card>
                    As a Pivot Point Consulting IT Desk Agent, I provided ongoing and upstanding customer support to clients ( MyChart, District Medical Group ) assisted patients and personell with any technical related issues and provide basic troubleshooting. Worked closely with upper echelon IT personal as well with escalations and any further requested assistance. 
                  </Card>
                </CardContent>
              </Typography>
            </Backdrop>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className='dreyers'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia onClick={handleToggle}
                component="img"
                border='dark'
                height="auto"
                image="https://www.dreyersgrandicecream.com/images/logo.png"
              />
              <CardContent>
                <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={open}
                  onClick={handleClose}
                >
                  <Typography variant="body3" color="text.primary">
                    <CardContent>
                      <Card>
                        As a Logistics Planner, and Freight Claims Analyst my duties included determining the scope and requirements of a project or operation, communicating with vendors to assess delivery details, and managing employees. You also analyze distribution processes to make improvements and prepare logistics reports for senior decision-makers.
                        While also providing freight claims responsibilities for damanged or MIA freight. I have extensive experience utilizing GPS freight tracking software, and SAP/TM Transportation Management Systems. With regards to my time at Dreyers I have built good relationships between both vendors and independent contractors.
                      </Card>
                    </CardContent>
                  </Typography>
                </Backdrop>
              </CardContent>
            </CardActionArea>
          </Card>
        <div className='comcast'>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia onClick={handleToggle}
                  component='img'
                  height='auto'
                  image='https://www.cordcuttersnews.com/wp-content/uploads/2020/04/Xfinity-logo.jpg'
                />
                <CardContent>
                  <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                  >
                    <Typography variant="body3" color="text.primary">
                      <CardContent>
                        <Card>
                          As a Comcast Warehouse Associate I was responsible for the Comcast inventory and non-inventory through the receiving, inventory storage and shipping functions (i.e. proper physical packing, preparing packing lists, contacting freight & parcel companies, receiving material shipments, maintaining inventory documents, utilization of computerized inventory systems, proper routing of packing slips and maintaining accurate inventory controls on all materials). Prepare, process all materials/equipment needed for business operations. Maintain physical safety and security of warehouse operations, reporting any potential loss/damages/safety hazards as appropriate to the Warehouse Management/Leadership. Works effectively with minimal to moderate supervision/guidance and is accountable for individual results and impact on team.
                        </Card>
                      </CardContent>
                    </Typography>
                  </Backdrop>
                </CardContent>
              </CardActionArea>
            </Card>
        </div>
      </div>
    </div>


  );
}