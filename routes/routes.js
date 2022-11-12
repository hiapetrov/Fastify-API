const Items = require( '../items/Items' );
const { getItem, getItems, addItem, deleteItem, updateItem } = require( '../controllers/itemsController.js' )

const Item = {
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
                items: Item
                },
            },
        },
    handler: getItems
}

const geItemOpts = {
    schema: {
        response: {
            200: Item,
        }
    },
    handler: getItem
}

const postItemOpts = {
    schema: {
        response: {
            201: Item
        }
    },
    handler: addItem
}

const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                properties:{ 
                    message: {type:'string'}
                }, 
            }
        }
    },
    handler: deleteItem    
}

const updateItemOpts = {
    schema:{
        response: {
            200: Item
        }
    },
    handler: updateItem
}

function itemRoutes( fastify, options, done)  {
    //Get Items array
    fastify.get('/items', getItemsOpts )

    //Get single item
    fastify.get( '/items/:id', geItemOpts )

    //Add Item
    fastify.post( '/items', postItemOpts )

    //Delete item
    fastify.delete( '/items/:id', deleteItemOpts )

    //Update Item
    fastify.put( '/items/:id', updateItemOpts)


    done()
} 
 

module.exports = itemRoutes