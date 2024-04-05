const router=require("express").Router();

router.use("/users",require("./users.js"))
router.use("/posts",require("./posts.js"))
router.use("/comments",require("./comments.js"))

module.exports=router

/*
User:
 [post] users/signup   (to sign up a new user)
 [post] users/signin   (to sign in )

Post:
 [get] posts/          (to get all posts)
 [post] posts/          (to create a new post)
 [delete] posts/:id       (to delete the post)       
  
Comment:
 [get] comments/:postid      (to get all comments of a post)
 [post] comments/:postid       (to comment on a post)
 [delete] comments/:commmentId   (to delete a comment)

*/