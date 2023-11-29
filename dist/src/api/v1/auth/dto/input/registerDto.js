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
exports.RegisterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enum_1 = require("../../../user/enum");
class RegisterDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user@gmail.com' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '0984250491' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '@password!123PW' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: enum_1.UserType,
        isArray: true,
        example: Object.values(enum_1.UserType),
    }),
    (0, class_validator_1.IsEnum)(enum_1.UserType, { each: true }),
    __metadata("design:type", String)
], RegisterDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: enum_1.UserStatus,
        isArray: true,
        example: Object.values(enum_1.UserStatus),
    }),
    (0, class_validator_1.IsEnum)(enum_1.UserStatus, { each: true }),
    __metadata("design:type", String)
], RegisterDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "middle_name", void 0);
exports.RegisterDto = RegisterDto;
//# sourceMappingURL=registerDto.js.map