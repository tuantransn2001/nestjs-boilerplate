"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const awaity_1 = require("awaity");
const common_2 = require("../common");
const utils_1 = require("../utils");
const api_enums_1 = require("../common/enums/api_enums");
const user_service_1 = require("../user/user.service");
const helper_1 = require("./helper");
let MessageService = class MessageService {
    constructor(userService) {
        this.userService = userService;
        this.handleGetAllConversationByMembers = async (conversationModel, members) => {
            try {
                const queryCondition = members.map(({ id, type }) => ({
                    [`members.id`]: id,
                    [`members.type`]: type,
                }));
                const foundConversation = await conversationModel.aggregate([
                    {
                        $match: {
                            $and: queryCondition,
                        },
                    },
                    {
                        $project: {
                            _id: 0,
                            isDelete: 0,
                            'members._id': 0,
                        },
                    },
                ]);
                const foundSingleConversation = foundConversation.find(({ members }) => (0, helper_1.isSingleChat)(members));
                return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, (0, common_2.isEmpty)(foundSingleConversation)
                    ? {}
                    : {
                        ...foundSingleConversation,
                        members: await this.handleGetFullUserDetailByIDList(foundSingleConversation.members),
                        messages: await this.handleFilterMessageAlreadyExist(foundSingleConversation.messages),
                    });
            }
            catch (err) {
                return (0, utils_1.errorHandler)(err);
            }
        };
        this.handleGetAllMessageByConversationID = async (ConversationModel, id) => {
            try {
                const foundConversation = await ConversationModel.findOne({
                    id,
                    isDelete: false,
                }, {
                    __v: 0,
                    isDelete: 0,
                    _id: 0,
                    'messages._id': 0,
                });
                if (!(0, common_2.isEmpty)(foundConversation)) {
                    const responseData = {
                        conversationID: id,
                        members: await this.handleGetFullUserDetailByIDList(foundConversation.members),
                        messages: await this.handleFilterMessageAlreadyExist(foundConversation.messages),
                    };
                    return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, responseData);
                }
                else {
                    return (0, utils_1.handleErrorNotFound)(api_enums_1.STATUS_MESSAGE.NOT_FOUND);
                }
            }
            catch (err) {
                return (0, utils_1.errorHandler)(err);
            }
        };
        this.handleGetFullUserDetailByIDList = async (members) => {
            if ((0, common_2.isEmpty)(members)) {
                return [];
            }
            else {
                const IDList = members.reduce((IdListResult, member) => {
                    const currentUserType = member.type;
                    const currentUserID = member.id;
                    IdListResult.ids[currentUserType].push(currentUserID);
                    return IdListResult;
                }, {
                    ids: { admin: [], user: [], guest: [] },
                });
                const result = (await this.userService.searchListUser(IDList));
                return Object.entries(result)
                    .map(([_, users]) => users)
                    .flat(1);
            }
        };
    }
    async handleFilterMessageAlreadyExist(messages) {
        if ((0, common_2.isEmpty)(messages))
            return [];
        const existMessages = await (0, awaity_1.reduce)(messages, async (messList, { content, sender, isDelete, id, createdAt, updatedAt }) => {
            if (!isDelete) {
                const senderDetail = await this.userService.findUniq(sender.id);
                messList.push({
                    id,
                    content,
                    sender: senderDetail === null || senderDetail === void 0 ? void 0 : senderDetail.toDto(),
                    createdAt,
                    updatedAt,
                });
            }
            return messList;
        }, []);
        return existMessages;
    }
};
MessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map