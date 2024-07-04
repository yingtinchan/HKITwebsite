"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserTypeByID = exports.checkJwtIsAdmin = void 0;
var jwt = require('jsonwebtoken');
const common_1 = require("@nestjs/common");
const config_json_1 = __importDefault(require("../config/config.json"));
function checkJwtIsAdmin(token) {
    jwt.verify(token, config_json_1.default.SECRET_KEY, function (err, decoded) {
        console.log(decoded.userType);
        if (decoded.userType != "ADMIN") {
            throw new common_1.UnauthorizedException();
        }
    });
    return true;
}
exports.checkJwtIsAdmin = checkJwtIsAdmin;
async function checkUserTypeByID(_id) {
    var _table = "";
    if (_id.substring(0, 1) == "A") {
        _table = "admin";
    }
    else if (_id.substring(0, 1) == "S") {
        _table = "student";
    }
    else if (_id.substring(0, 1) == "T") {
        _table = "teacher";
    }
    console.log("_table=" + _table);
    return _table;
}
exports.checkUserTypeByID = checkUserTypeByID;
//# sourceMappingURL=function.js.map