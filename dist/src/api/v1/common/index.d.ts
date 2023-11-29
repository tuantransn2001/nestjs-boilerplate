import { ObjectType } from './types/common';
import { IHealthCheck } from '../health-check/shared/healthCheck.interface';
export declare const isEmpty: (target: ObjectType | any[] | string) => boolean;
export declare const getCurrentTime: () => Date;
export declare const healthCheck: IHealthCheck;
