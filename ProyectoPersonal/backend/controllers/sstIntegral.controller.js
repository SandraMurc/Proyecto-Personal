const SstIntegralModel = require("../models/sstIntegral");

module.exports.homeSstIntegral = async (request, response) => {
    var result = await SstIntegralModel.find();
    response.json(result);
}

module.exports.crearSolicitud = async (request, response) => {
    var data = request.body;
    
    var nuevaSolicitud = new SstIntegralModel(data);
    var result = await nuevaSolicitud.save();

    response.json(result);
}