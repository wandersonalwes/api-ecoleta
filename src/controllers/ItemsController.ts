import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");
    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `${process.env.APP_URL}/uploads/${item.image}`,
      };
    });

    response.json(serializedItems);
  }
}

export default ItemsController;
