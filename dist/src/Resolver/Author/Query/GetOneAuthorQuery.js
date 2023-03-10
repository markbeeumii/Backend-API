"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneAuthorQuery = void 0;
const knexCreateConnection_1 = require("../../../lib/knexCreateConnection");
const GetOneAuthorQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const knex = (0, knexCreateConnection_1.knexCreateConnection)().default;
    const id = req.params.id;
    const [author] = yield knex
        .table('authors')
        .innerJoin('books', 'book_id', 'books.id')
        .select('name', 'phone_number', 'profile_picture', 'sex', 'email', 'books.name').where({ id });
    if (author === null || author === void 0 ? void 0 : author.id) {
        return res.status(200).json({
            book: Object.assign({}, author)
        });
    }
    else {
        return res.json({ status: false,
            message: 'Failed to get author' });
    }
});
exports.GetOneAuthorQuery = GetOneAuthorQuery;
//# sourceMappingURL=GetOneAuthorQuery.js.map