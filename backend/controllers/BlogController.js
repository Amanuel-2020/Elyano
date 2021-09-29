const Blog = require('../model/blog');

exports.CreateBlog = async(req, res) =>{
    const{title, image, link} = req.body;

    const blog = await Blog.create({
        title,
        image,
        link
    })

    res.status(200).json({
        success: true,
        blog
    })
}

exports.GetBlog = async(req, res) =>{
    const blogs = await Blog.find()
    res.status(200).json({
        success: true,
        blogs
    })
}

exports.UpdateBlog = async(req, res) =>{
    let blog = await Blog.findById(req.params.id)

    if(!blog){
        res.status(404).json({
            success: false,
            message: "not found"
        })
    }
   blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
       new: true,
       runValidators: true,
       useFindAndModify: false
    
   })
 res.status(200).json({
     success: true,
     blog
 })   
}

exports.DeleteBlog = async(req, res) =>{
    const blog = await Blog.findById(req.params.id)
    if(!blog){
        res.status(404).json({
            success: false,
            message: "Not found"
        })
    }
    await Blog.findOneAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        message: "blog successfully deleted."
    })
}