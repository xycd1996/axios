interface Config {
    beforeRequest?: (data: any, headers: any) => void;
    onError?: (error: any) => void;
}
declare const configure: (config?: Config) => {
    beforeRequest: (() => void) | ((data: any, headers: any) => void);
    onError: (() => void) | ((error: any) => void);
};
export default configure;
