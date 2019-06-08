const express = require("express");
const router = express.Router();
const CanchasServices = require("../../../services/canchasServices");
const canchasServices = new CanchasServices();
router.get("/", async (req, res, next) => {
  const { tags } = req.query;
  console.log("req", req.query);

  try {
    const canchas = await canchasServices.getCanchas({ tags });
    res.status(200).json({
      data: canchas,
      message: "canchas listed"
    });
  } catch (error) {
    next(error);
  }
});
router.get("/:canchaId", async (req, res, next) => {
  const { canchaId } = req.params;
  console.log("req", req.params);

  try {
    const cancha = await canchasServices.getCancha({ canchaId });
    res.status(200).json({
      data: cancha,
      message: "listando una cancha"
    });
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  const { body: cancha } = req;
  console.log("req", req.body);

  try {
    const canchaCreate = await canchasServices.createCancha({ cancha });
    res.status(201).json({
      data: canchaCreate,
      message: "cancha creada"
    });
  } catch (error) {
    next(error);
  }
});
router.put("/:canchaId", async (req, res, next) => {
  const { canchaId } = req.params;
  const { body: cancha } = req;
  console.log("req", req.params, req.body);

  try {
    const canchaActualizar = await canchasServices.updateCancha({
      canchaId,
      cancha
    });
    res.status(201).json({
      data: canchaActualizar,
      message: "cancha actualizada"
    });
  } catch (error) {
    next(error);
  }
});
router.delete("/:canchaId", async (req, res, next) => {
  const { canchaId } = req.params;
  console.log("req", req.params);

  try {
    const cancha = await canchasServices.deleteCancha({ canchaId });
    res.status(200).json({
      data: cancha,
      message: "cancha eliminada"
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
