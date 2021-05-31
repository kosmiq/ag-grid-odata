import { ColDef, ColGroupDef, IGetRowsParams, IServerSideGetRowsParams, IServerSideGetRowsRequest } from "@ag-grid-community/all-modules";
import OdataQueryExtendOptions from "../types/OdataQueryExtendOptions";
import OdataQueryOptions from "../types/OdataQueryOptions";
import OdataProvider from "./OdataProvider";
declare class OdataProviderOptions {
    /**
     * Function for call odata api
     */
    callApi: (query: string) => Promise<any>;
    /**
     * Name of field contain count of record results in grouping odata query
     * @default childCount
     */
    groupCountFieldName?: string;
    /**
     * Use in odata build query
     * @default false
     */
    isCaseSensitiveStringFilter?: boolean;
    /**
     * Callback for extend odata query options for implement user logic
     */
    beforeRequest?: (options: OdataQueryOptions, provider: OdataProvider, request: IGetRowsParams | IServerSideGetRowsRequest) => void;
    /**
    * Callback for pivot or group for aplly column ag-grid settings
    * @example
    * <pre><code>
    * beforeSetSecondaryColumns = secondaryColumns => {
     for (let i = 0; i < secondaryColumns.length; i++) {
       const col = secondaryColumns[i]
       if (col.children) {
         beforeSetSecondaryColumns(col.children)
       } else {
         //Aplly new setting for group dyncamic created column
         // col.cellClassRules =
         // col.valueFormatter =
       }
     }
   }
    * </pre></code>
    */
    beforeSetSecondaryColumns?: (secondaryColDefs: (ColDef | ColGroupDef)[]) => void;
    /**
    * Callback invoked after load data
    * @param options odata provider options
    * @param rowData data for ag-grid
    * @param totalCount total count records
    *
    * @example
    * <pre><code>
         afterLoadData = (options, rowData, totalCount) => {
             if (options.skip === 0 && rowData.length > 0) {
             gridApi.columnController.autoSizeAllColumns()
             }
         }
    * </code></pre>
    */
    afterLoadData?: (options: OdataQueryExtendOptions, rowData: any[], totalCount: number) => void;
    /**
     * Callback for catch error
     */
    setError?: (error: any, params: IGetRowsParams | IServerSideGetRowsParams) => void;
    /**
     * List of columns by id/field are case sensitive for build odata query
     */
    caseSensitiveColumns?: string[];
}
export default OdataProviderOptions;
