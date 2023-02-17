import express,{Request, Response, Router} from 'express'
import { Auhtor } from '../../../SchemaBook/schemaAuthor'
import { knexCreateConnection } from '../../../lib/knexCreateConnection'
import { Book } from '../../../SchemaBook/SchemaBook'

export const GetOneAuthorQuery = async( req : Request, res : Response)=>{
    const knex = knexCreateConnection().default
    const id_req = Number(req.params.id)

    const books: Book[] = await knex.table('books').where({author_id: id_req})
    // const author: Auhtor await knex
    
    if(books){
        return res.status(200).json({
            books: books.map((book) => {
                return {
                    ...book
                }
            })
        })
    }else{
        return res.json({ 
            status: false, 
            message: 'Failed to get author' 
            });
    }
}