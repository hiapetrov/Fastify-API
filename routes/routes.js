const Items = require( '../items/Items' );

const itemSchema = {
    type: 'object',
    properties: {
        id:{ type: 'string' },
        name:{ type: 'string' },
        },
}

const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: itemSchema
                },
            },
        },
    }
const geItemOpts = {
    schema: {
        response: {
            200: itemSchema,
        }
    }
}

function itemRoutes( fastify, options, done)  {
    //Get Items array
    fastify.get('/items', getItemsOpts, (req, res) => {
        res.send(Items)
    })
    //Get single item
    fastify.get( '/items/:id', geItemOpts, ( req, res ) => {     
        const { id } = req.params
        const item = Items.find( ( item ) => item.id === id)
        res.send( item )
     })
     
    done()
} 
 

module.exports = itemRoutes