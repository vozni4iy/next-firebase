const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('main', '/','/index')
routes.add('signup', '/signup')
routes.add('admin', '/:id/admin')
routes.add('newcustomer', '/:id/newcustomer')
routes.add('customer', '/:uid/customers/:did')
routes.add('editcustomer', '/:uid/customers/:did/edit')
