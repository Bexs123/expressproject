const router = require("express").Router();

//About route
router.get("/", (req, res) => {
    // Imagine this came from a database
    const data = {
        name: "bfox",
        hobbies: ["walking my dogs", "listening to music", "games"]
    };

    res.status(200);
    res.json(data);
});

module.exports = router;