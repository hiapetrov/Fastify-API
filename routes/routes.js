const Items = require( '../items/Items' );

function itemRoutes( fastify, options, done)  {
    fastify.get('/items', (req, res) => {
        res.send(Items)
    })

    fastify.get( '/items/:id', ( req, res ) => {     
        const { id } = req.params
        const item = Items.find( ( item ) => item.id === id)
        res.send( item )
     })
     
    done()
} 
 

module.exports = itemRoutes