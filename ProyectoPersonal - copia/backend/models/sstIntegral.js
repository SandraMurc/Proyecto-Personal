const mongoose = require("mongoose");

const SstIntegralSchema = new mongoose.Schema({
    nombre: String,
    telefono: String,
    email: String,
    detalle: String
});

const SstIntegral = mongoose.model("sstIntegral", SstIntegralSchema);
module.exports = SstIntegral;