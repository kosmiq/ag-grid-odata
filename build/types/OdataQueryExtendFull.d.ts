import OdataQueryExtendOptions from "./OdataQueryExtendOptions";
interface OdataQueryExtendFull extends OdataQueryExtendOptions {
    count?: boolean;
    apply?: Array<string>;
}
export default OdataQueryExtendFull;
