import PropTypes from 'prop-types';

// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">일정</Typography>
                    </Grid>
                    <Grid item>
                      {/* <DemoItem label="Uncontrolled calendar">
                        <DateRangeCalendar defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]} />
                      </DemoItem>
                      <DemoItem label="Controlled calendar">
                        <DateRangeCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                      </DemoItem> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
