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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
var jwt = require('jsonwebtoken');
const config_json_1 = __importDefault(require("./config/config.json"));
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    addUser(body, req) {
        jwt.verify(req.headers.authorization, config_json_1.default.SECRET_KEY, function (err, decoded) {
            console.log(decoded.userType);
            if (decoded.userType != "admin") {
                throw new common_1.UnauthorizedException();
            }
        });
        console.log("req=" + req.headers.authorization);
        console.log('body=' + JSON.stringify(body));
        return this.adminService.addUser(body.type, body.id, body.name, body.password, body.email, body.major_id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('/addUser'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "addUser", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map