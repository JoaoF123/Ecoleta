import {Request, Response} from 'express';
import Knex from '../database/connection';

class ItemsController {

    async index(request: Request, response: Response) {

        const items = await Knex('items').select('*');

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                name: item.title,
                image_url: `http://192.168.15.14:3333/uploads/${item.image}`
            };
        });

        return response.json(serializedItems);
    }
}

export default ItemsController;