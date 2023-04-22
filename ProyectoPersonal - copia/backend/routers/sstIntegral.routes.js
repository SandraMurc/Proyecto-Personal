const sstIntegralController = require("../controllers/sstIntegral.controller");

module.exports = (app) => {
    app.get("/", sstIntegralController.homeSstIntegral);
    app.post("/sstIntegral/crear", sstIntegralController.crearSolicitud);
}