import { AxiosRequestConfig } from 'axios';
export declare const requestSuccess: (config: AxiosRequestConfig) => AxiosRequestConfig;
export declare const requestFail: (error: any) => Promise<never>;
