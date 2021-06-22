import { WebPartContext } from '@microsoft/sp-webpart-base';
import { sp } from '@pnp/sp/presets/all';

export class SPService {
  constructor(private context: WebPartContext) {
    this.context = context;
    sp.setup({
      spfxContext: this.context,
    });
  }

  /**
   * getListItems
   * @param listName
   * @returns {Promise<any[]>}
   */
  public async getListItems(listName: string): Promise<any[]> {
    try {
      return await sp.web.lists.getByTitle(listName).items.select('Id, Title, Description').get();
    } catch (error) {
      Promise.reject(error);
    }
  }
}
