var express = require("express"),
    router = express();

// router.use(express.static('/public'));
//router.use(express.static("public"));
router.get("/",(req,res)=>{
    res.render("./main/index");
})

module.exports = router;