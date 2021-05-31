declare interface CancelablePromise {
    promise: Promise<any>;
    cancel: () => void;
}
export default CancelablePromise;
