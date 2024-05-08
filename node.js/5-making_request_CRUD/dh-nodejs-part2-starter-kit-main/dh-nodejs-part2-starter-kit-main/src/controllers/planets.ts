import { Request, Response } from "express";
import Joi from "joi";

type Planet = {
    id: number,
    name: string
};

type Planets = Planet[];

let planets: Planets = [
    { id: 1, name: 'Earth' },
    { id: 2, name: 'Mars' }
];

const validatePlanet = (planet: Planet) => {
    const schema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required()
    });
    return schema.validate(planet);
}

const getAll = (req: Request, res: Response) => {
    res.status(200).json(planets)
}

const getOneById = (req: Request, res: Response) => {
    const { id } = req.params;
    const planet = planets.find(p => p.id === Number(id))
    res.status(200).json(planet)
}

const create = (req: Request, res: Response) => {
    const { id, name } = req.body
    const newPlanet: Planet = { id, name }

    const { error } = validatePlanet(newPlanet);
    if (error) return res.status(400).json({ error: error.details[0].message });

    planets.push(newPlanet);
    res.status(201).json({ msg: 'The planet was created' });

}

const upadateById = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body
    planets = planets.map(p => p.id === Number(id) ? ({ ...p, name }) : p)
    res.status(200).json({ msg: 'Planet updated' })
}

const deleteById = (req: Request, res: Response) => {
    const { id } = req.params
    planets = planets.filter(p => p.id !== Number(id))

    res.status(200).json({ msg: 'Planet was deleted' })
}

export {
    getAll, getOneById, create, upadateById, deleteById
}