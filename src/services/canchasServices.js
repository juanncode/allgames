// const canchasMocks = require("../utils/canchasMocks");
const MongoLib = require("../../lib/mongo");
class CanchasServices {
  constructor() {
    this.collection = "canchas";
    this.mongoDB = new MongoLib();
  }
  async getCanchas({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const canchas = await this.mongoDB.getAll(this.collection, query);
    return canchas || [];
  }
  async getCancha({ canchaId }) {
    const cancha = await this.mongoDB.get(this.collection, canchaId);
    return cancha || [];
  }
  async createCancha({ cancha }) {
    const createNewCancha = await this.mongoDB.create(this.collection, cancha);
    return createNewCancha;
  }
  async updateCancha({ canchaId, cancha }) {
    const updateCanchaId = await this.mongoDB.update(
      this.collection,
      canchaId,
      cancha
    );
    return updateCanchaId;
  }
  async deleteCancha({ canchaId }) {
    const deleteCanchaId = await this.mongoDB.delete(this.collection, canchaId);
    return deleteCanchaId;
  }
}
module.exports = CanchasServices;
