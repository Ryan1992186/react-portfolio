import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Backdrop } from '@mui/material';




export default function PivotPoint() {
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
            image="https://pbs.twimg.com/profile_images/1010174825086705664/QCtdQWjU.jpg"
          />
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <CardContent>
              <Typography variant="body3" color="text.primary">
                <CardContent>
                  <Card className='PivotPoint'>
                    As a Pivot Point Consulting IT Desk Agent, I provided ongoing and upstanding customer support to clients ( MyChart, District Medical Group ) assisted patients and personell with any technical related issues and provide basic troubleshooting. Worked closely with upper echelon IT personal as well with escalations and any further requested assistance.
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