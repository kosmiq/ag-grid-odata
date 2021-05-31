import { IServerSideGetRowsParams } from "@ag-grid-enterprise/all-modules";
import OdataProvider from "./classes/OdataProvider";
export declare class OdataProviderClient extends OdataProvider {
    getRows(params: IServerSideGetRowsParams): void;
}
export declare class OdataServerSideProvider extends OdataProvider {
    getRows(params: IServerSideGetRowsParams): void;
}
export { default as OdataProvider } from "./classes/OdataProvider";
