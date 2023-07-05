import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
  <MainCard title="Basic Typography">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6}>
        <SubCard title="출처">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <MuiTypography variant="h3" gutterBottom>
                sunshine 로고
              </MuiTypography>
              <MuiTypography
                variant="body2"
                color="primary"
                component={Link}
                href="https://kr.freepik.com/free-vector/flat-design-boho-sun-logo_31543514.htm#query=%ED%83%9C%EC%96%91%20%EB%A1%9C%EA%B3%A0&position=43&from_view=keyword&track=ais"
                target="_blank"
                display="block"
                underline="hover"
                gutterBottom
              >
                https://kr.freepik.com/free-vector/flat-design-boho-sun-logo_31543514
              </MuiTypography>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);

export default Typography;
