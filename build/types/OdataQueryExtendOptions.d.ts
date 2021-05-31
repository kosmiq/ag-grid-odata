import OdataQueryOptions from "./OdataQueryOptions";
interface OdataQueryExtendOptions extends OdataQueryOptions {
    skip?: number;
    top?: number;
}
export default OdataQueryExtendOptions;
