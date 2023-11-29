import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { Device } from './device.model';
import { BlockList } from './blockList.model';
export declare class UserAccess extends BaseModel {
    static get tableName(): ModelName;
    token: string;
    user_id: string;
    device_id: string;
    static get joinSchema(): {
        type: string;
        required: string[];
        properties: {
            id: {
                type: string;
            };
            token: {
                type: string;
            };
            user_id: {
                type: string;
            };
            device_id: {
                type: string;
            };
        };
    };
    static get relationMappings(): {
        devices: {
            relation: import("objection").RelationType;
            modelClass: typeof Device;
            join: {
                from: string;
                to: string;
            };
        };
        blockList: {
            relation: import("objection").RelationType;
            modelClass: typeof BlockList;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
