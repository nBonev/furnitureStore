import { Router } from "express";
import furnitureService from "../service/furnitureService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const furnitureController = Router();

function buildFilter(query) {
    const filterResult = Object.keys(query).reduce((filter, filterParams) => {
        const filterParamValue = query[filterParams].replaceAll('"', '');
        const searchParams = new URLSearchParams(filterParamValue);

        const result = {...filter, ...Object.fromEntries(searchParams.entries())};

        return result;

    }, {})
    
    return filterResult;

}

//Get all
furnitureController.get('/', async (req, res) => {
    const filter = buildFilter(req.query);
    
    const furnitures = await furnitureService.getAll(filter);
    
    res.json(furnitures);
});

//Get one
furnitureController.get('/:furnitureId', async (req, res) => {
    const furniture = await furnitureService.getOne(req.params.furnitureId);

    res.json(furniture);
});

//Create
furnitureController.post('/', isAuth, async (req, res) => {
    const furnitureDate = req.body;
    const userId = req.user.id;

    const newFurniture = await furnitureService.create(furnitureDate, userId);

    res.json(newFurniture);
});

//Update
furnitureController.put('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const furnitureDate = req.body;

    const updatedFurniture  = await furnitureService.update(furnitureId, furnitureDate);

    res.json(updatedFurniture);
});

//Delete
furnitureController.delete('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    await furnitureService.delete(furnitureId);

    res.json({ok: true});
});

export default furnitureController;