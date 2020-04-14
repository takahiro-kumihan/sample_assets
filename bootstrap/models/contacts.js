const mongoose = require("mongoose");

// for schema
const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  contents: String
});
// モデルの生成
//   MongoDB側とアプリ側で名称は一致していなくてもデータのやりとりが出来る。
//   大変柔軟な仕様なので、利用者が規則を持って運用するのが吉かと思われる。
//     文字列が同じであることを前提に、
//      ・単数複数を区別してない! => 複数形で統一
//      ・大文字小文字を区別しない! => DB側全小文字、アプリ側Capsで統一
//                                collection名の参照はDB側の設定ママ
// DB名はformの『Collection名：contacts』を使う
module.exports = mongoose.model("contacts", contactSchema);