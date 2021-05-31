import {IServerSideGetRowsParams} from "@ag-grid-enterprise/all-modules";
import OdataProvider from "./classes/OdataProvider";

export class OdataProviderClient extends OdataProvider {
  public override getRows(params: IServerSideGetRowsParams) {
    super.getRows(params);
  }
}
export class OdataServerSideProvider extends OdataProvider {
  public override getRows(params: IServerSideGetRowsParams): void {
    super.getRows(params);
  }
}

export {default as OdataProvider} from "./classes/OdataProvider";
