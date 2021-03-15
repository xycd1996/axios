import { AxiosResponse } from 'axios';
export declare const responseSuccess: (response: AxiosResponse) => AxiosResponse<any>;
export declare const responseFail: (error: any) => any;
