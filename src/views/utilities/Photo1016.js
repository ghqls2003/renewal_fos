import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Album from 'photo-component/Album';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const Photos = () => (
  <MainCard title="2010~2016 사진들">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={12}>
        <Album />
      </Grid>
    </Grid>
  </MainCard>
);

export default Photos;
