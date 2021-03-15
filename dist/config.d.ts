interface Config {
    beforeRequest?: (data: any, headers: any) => void;
}
declare const configure: (config?: Config) => {
    beforeRequest: (() => void) | ((data: any, headers: any) => void);
};
export default configure;
