import * as React from 'react';
import styles from './ProjectDashboard.module.scss';
import { IProjectDashboardProps } from './IProjectDashboardProps';
import * as d3 from 'd3';

export default class ProjectDashboard extends React.Component<IProjectDashboardProps, void> {
  public render(): React.ReactElement<IProjectDashboardProps> {
    return (
      <div className={styles.projectDashboard}>
        <div className={styles.row} >
          <h1>Welcome to Clear View Project Dashboard</h1>
          <div className={styles.charts}>
            <svg width="720" height="120">
              <circle cx="40" cy="60" r="10"></circle>
              <circle cx="80" cy="60" r="10"></circle>
              <circle cx="120" cy="60" r="10"></circle>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    let circle = d3.selectAll("circle");
    circle.style("fill", "steelblue");
    circle.attr("r", 30);
  }
}
