import { AxiosResponse } from 'axios';
export declare const responseSuccess: (response: AxiosResponse, defaultConfig?: any) => Promise<never> | AxiosResponse<any>;
export declare const responseFail: (error: any, defaultConfig?: any) => any;
