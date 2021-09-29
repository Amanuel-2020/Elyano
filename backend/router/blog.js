const router = require('express').Router()
const { CreateBlog, GetBlog, UpdateBlog, DeleteBlog} = require('../controllers/BlogController');
const {IsAuthorizeRole, IsVerify} = require('../middleWare/protectUser')
router.route('/admin/blog').post(IsVerify, IsAuthorizeRole('admin'), CreateBlog)
router.route('/blogs').get(GetBlog)
router.route('/blog/update/:id').put(IsVerify, IsAuthorizeRole('admin'), UpdateBlog)
router.route('/blog/delete/:id').delete(IsVerify, IsAuthorizeRole('admin'), DeleteBlog)

module.exports = router
