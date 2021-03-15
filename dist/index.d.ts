declare const Axios: import("axios").AxiosInstance;
declare const retAxios: {
    get: (url: string) => (params?: any) => Promise<any>;
    post: (url: string, options?: any) => (data?: any) => Promise<any>;
    put: (url: string) => (data?: any) => Promise<any>;
    delete: (url: string) => (params?: any) => Promise<any>;
    patch: (url: string) => (data?: any) => Promise<any>;
};
export declare const configure: (config: any) => void;
export { default as getDefaultConfig } from './config';
export { Axios as instance };
export default retAxios;
