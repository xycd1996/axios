declare const Axios: import("axios").AxiosInstance;
declare const retAxios: {
    get(url: string, params: any): Promise<import("axios").AxiosResponse<any>>;
    post(url: string, data: any): Promise<import("axios").AxiosResponse<any>>;
    put(url: string, data: any): Promise<import("axios").AxiosResponse<any>>;
    delete(url: string, params: any): Promise<import("axios").AxiosResponse<any>>;
    patch(url: string, data: any): Promise<import("axios").AxiosResponse<any>>;
};
export { Axios as config };
export default retAxios;
