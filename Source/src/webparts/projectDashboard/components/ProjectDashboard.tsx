import * as React from 'react';
import styles from './ProjectDashboard.module.scss';
import { IProjectDashboardProps } from './IProjectDashboardProps';
import * as d3 from 'd3';
import * as nv from 'nvd3';
export default class ProjectDashboard extends React.Component<IProjectDashboardProps, void> {
  public render(): React.ReactElement<IProjectDashboardProps> {
    return (
      <div className={`${styles.projectDashboard} ms-Grid`}>
        <div className={styles.row} >
          <h1>Welcome to Clear View Project Dashboard</h1>
          <div className='nav'></div>
          <div className={styles.charts}>
            <div id='chart'><svg></svg></div>
            <div id='chart2'><svg></svg></div>
          </div>
          <div className='footer'>
            copyright (c) ClearView 2017.
          </div>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    const data = this.getData();
    nv.addGraph(() => {
      const chart = nv.models.pieChart()
        .x(d => d.label)
        .y(d => d.value)
        .showLabels(true);

      d3.select('#chart svg')
        .datum(data)
        .transition().duration(350)
        .call(chart);

      return chart;
    });

    nv.addGraph(() => {
      const chart = nv.models.pieChart()
        .x(d => d.label)
        .y(d => d.value)
        .showLabels(true)     // display pie label
        .labelThreshold(.05)  // configure the minimum slice size for labels to show up
        .labelType('percent') // configure what type of data to show in the label. Can be "key", "value" or "percent"
        .donut(true)          // turn on Donut mode. Makes pie chart look tasty!
        .donutRatio(0.35)     // configure how big you want the donut hole size to be.
        ;

      d3.select('#chart2 svg')
        .datum(data)
        .transition().duration(350)
        .call(chart);

      return chart;
    });


  }

  // pie chart example data. Note how there is only a single array of key-value pairs.
  private getData() {
    return [
      {
        'label': 'Lead Reviews',
        'value': 29.765957771107
      },
      {
        'label': 'Peer Reviews',
        'value': 0
      },
      {
        'label': 'Unit Testing',
        'value': 32.807804682612
      },
      {
        'label': 'RCI',
        'value': 196.45946739256
      },
      {
        'label': 'Visibility Matrix',
        'value': 0.19434030906893
      },
      {
        'label': 'Era Defects',
        'value': 98.079782601442
      },
      {
        'label': 'Chrous Defects',
        'value': 13.925743130903
      },
      {
        'label': 'Documentation',
        'value': 5.1387322875705
      }
    ];
  }
}
