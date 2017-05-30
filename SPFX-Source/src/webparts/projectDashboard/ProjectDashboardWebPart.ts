import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'projectDashboardStrings';
import ProjectDashboard from './components/ProjectDashboard';
import { IProjectDashboardProps } from './components/IProjectDashboardProps';
import { IProjectDashboardWebPartProps } from './IProjectDashboardWebPartProps';

export default class ProjectDashboardWebPart extends BaseClientSideWebPart<IProjectDashboardWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IProjectDashboardProps > = React.createElement(
      ProjectDashboard,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}