"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const uuid_1 = require("uuid");
const awaity_1 = require("awaity");
const enum_1 = require("../../../user/enum");
const faker_1 = require("@faker-js/faker");
const common_1 = require("../../../common/enums/common");
async function seed(knex) {
    const bulkData = [];
    const loop = 10000;
    const newUserArr = Array(loop).fill('test');
    await (0, awaity_1.each)(newUserArr, async (u, i) => {
        const randomStatus = i % 2 === 0 ? enum_1.UserStatus.ONLINE : enum_1.UserStatus.OFFLINE;
        const randomUserType = i % 2 === 0 ? enum_1.UserType.ADMIN : enum_1.UserType.USER;
        const fullName = faker_1.faker.internet.userName();
        const newU = {
            id: (0, uuid_1.v4)(),
            email: faker_1.faker.internet.email(),
            phone: faker_1.faker.phone.number(),
            password: faker_1.faker.internet.password(),
            first_name: fullName,
            search_name: fullName,
            last_name: randomUserType,
            status: randomStatus,
            type: randomUserType,
            middle_name: '',
            is_deleted: i % 2 === 0,
        };
        bulkData.push(newU);
    });
    await knex(common_1.ModelName.USER).del();
    await knex(common_1.ModelName.USER).insert(bulkData);
}
exports.seed = seed;
//# sourceMappingURL=user.js.map