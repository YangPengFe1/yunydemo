import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
export const env = {
  isLocal: () => Environment.type === EnvironmentType.Local,
  isTest: () => Environment.type === EnvironmentType.Test,
  isSharePoint: () => Environment.type === EnvironmentType.SharePoint,
  isClassicSharePoint: () =>
    Environment.type === EnvironmentType.ClassicSharePoint,
};
