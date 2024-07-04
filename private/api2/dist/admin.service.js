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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entitly/user.entity");
let AdminService = class AdminService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async addUser(_type, _id, _name, _password, _email, _major_id) {
        var _table = "";
        var _ext = "";
        if (_type == "admin") {
            _table = "admin";
        }
        else if (_type == "student") {
            _table = "student";
            _ext = ",'" + _major_id + "'";
        }
        else if (_type == "teacher") {
            _table = "teacher";
        }
        var _tmpJObject = { 'type': _type, 'id': _id, 'name': _name, 'password': _password, 'email': _email, 'major_id': _major_id };
        var data = await this.usersRepository.query("insert into " + _table + "  select '" + _id + "', '" + _name + "', '" + _password + "', '" + _email + "'" + _ext + ", curdate(), curdate(), NULL ");
        return {
            "statusCode": 200,
            "message": "success"
        };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminService);
//# sourceMappingURL=admin.service.js.map