import Furniture from "../models/Furniture.js"

export default {
    getAll() {
        return Furniture.find({});
    },
    create(furnitureData, userId) {
        return Furniture.create({...furnitureData, creator: userId});
    }
}