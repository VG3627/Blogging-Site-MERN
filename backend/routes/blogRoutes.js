const { Router } = require('express') 
const requireAuth = require('../middleware/requireAuth.js') ;
const blogController = require('../controllers/blogController')

const router = Router() 


router.get('/',blogController.blogs_get)
router.post('/',requireAuth,blogController.blogs_post)
router.get('/:id',blogController.blogsid_get)
router.delete('/:id',requireAuth,blogController.blogs_delete)


module.exports = router ;