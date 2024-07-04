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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entitly/user.entity");
const jwt_1 = require("@nestjs/jwt");
let LoginService = class LoginService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async login(_id, _password) {
        console.log("_id=" + _id + " | _password=" + _password);
        var _ext = "";
        var _table = "";
        var _major_id = "";
        if (_id.substring(0, 1) == "A") {
            _table = "admin";
        }
        else if (_id.substring(0, 1) == "S") {
            _table = "student";
            _major_id = "major_id,";
        }
        else if (_id.substring(0, 1) == "T") {
            _table = "teacher";
        }
        if (_id != "undefined" && _password != "undefined") {
            _ext += " and " + _table + "_id='" + _id + "'";
            _ext += " and password='" + _password + "'";
        }
        var data = await this.usersRepository.query("select " + _table + "_id, name, email," + _major_id + " created_at, updated_at,'" + _table + "' as type from " + _table + " where 1=1" + _ext);
        console.log(JSON.stringify(data));
        if (JSON.stringify(data) == "[]") {
            throw new common_1.UnauthorizedException();
        }
        console.log('select * from ' + _table + ' where 1=1' + _ext);
        console.log("return=" + JSON.stringify(data[0].name));
        const payload = {
            id: _id,
            sub: _id,
            name: data[0].name,
            email: data[0].email,
            major_id: data[0].major_id,
            userType: _table
        };
        const token = await this.jwtService.sign(payload);
        console.log("token=" + token);
        if (_ext != "") {
            await this.usersRepository.query("update " + _table + " set token='" + token + "' where 1=1" + _ext);
        }
        return {
            "statusCode": 200,
            "message": "success",
            access_token: token,
            data: data[0]
        };
    }
    async logout(_token, _type) {
        console.log("_token=" + _token);
        var _ext = "";
        if (_token != "undefined") {
            _ext += " and token='" + _token + "'";
        }
        if (_ext != "") {
            await this.usersRepository.query("update " + _type + " set token=NULL where 1=1" + _ext);
        }
        return {
            "statusCode": 200,
            "message": "success"
        };
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], LoginService);
//# sourceMappingURL=login.service.js.map