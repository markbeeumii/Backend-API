import { Book } from './../../../SchemaBook/SchemaBook';
import express, { Request, Response, Router } from "express";
import { knexCreateConnection } from "../../../lib/knexCreateConnection";
import { Auhtor } from "../../../SchemaBook/schemaAuthor";

export const GetAllAuthorQuery = async (req: Request, res: Response) => {
  const knex = knexCreateConnection().default;

  const loadBooks = async (author_id: number[]) => {
    const books: Book[] = await knex.table('books').whereIn('author_id', author_id)
    console.log(books)
    return author_id.map((id) => {
        return books.filter((book) => book.author_id===id)
    })
  }
  const authors: Auhtor[] = await knex
    .table("authors")
    .select("id","name", "phone_number", "profile_picture", "sex", "email")
    .orderBy("authors.id", "asc");

    
    if(authors) {
        return res.status(200).json({ authors : authors.map((author) => {
        return {
            ...author,
            books: loadBooks([author.id])
        }
    }) });
  }else{
    throw new Error("Fail to get books");
  }
};
