import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);


export default function SideBySideBarChart({ chartData }) {

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Male"
            valueField="numberMale"
            argumentField="ageGroup"
            color="#ffd700"
          />
          <BarSeries
            name="Female"
            valueField="numberFemale"
            argumentField="ageGroup"
            color="#c0c0c0"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Diseases Report" />
          <Stack />
        </Chart>
      </Paper>
    );
} 

// https://devexpress.github.io/devextreme-reactive/react/chart/demos/bar/side-by-side/
