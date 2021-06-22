import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  IPropertyPaneCheckboxProps,
  PropertyPaneCheckbox,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as $ from 'jquery';
import * as strings from 'FabricAndFluentDemoWebPartStrings';
import FabricAndFluentDemo from './app/FabricAndFluentDemo';
import { IFabricAndFluentDemoProps } from './app/IFabricAndFluentDemoProps';
import { env } from './utils/env';
export interface IFabricAndFluentDemoWebPartProps {
  description: string;
  fullBleed: boolean;
  fullBleedCheckbox: boolean;
}

export default class FabricAndFluentDemoWebPart extends BaseClientSideWebPart<IFabricAndFluentDemoWebPartProps> {
  constructor() {
    super();
  }
  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      if (env.isLocal() && this.properties.fullBleedCheckbox) {
        $('#workbenchPageContent').prop('style', 'max-width: none; left: 0; right: 0; top: 0');
        $('.SPCanvas-canvas').prop('style', 'max-width: none');
        $('.CanvasZone').prop('style', 'max-width: none');
      } else {
        $('#workbenchPageContent').removeProp('style');
        $('.SPCanvas-canvas').removeProp('style');
        $('.CanvasZone').removeProp('style');
      }
    });
  }

  public render(): void {
    const element: React.ReactElement<IFabricAndFluentDemoProps> = React.createElement(FabricAndFluentDemo, {
      description: this.properties.description,
      context: this.context,
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('fullBleed', {
                  label: strings.FullBleedFieldLabel,
                }),
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                }),
                PropertyPaneCheckbox('fullBleedCheckbox', {
                  checked: strings.FullBleedCheckboxFieldLabel,
                  disabled: false,
                  text: 'Full Screen',
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
