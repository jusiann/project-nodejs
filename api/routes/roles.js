var express = require('express');
var router = express.Router();
const isAuthenticated = true;
router.all("*", (req, res, next) => {
  if(isAuthenticated) {
    next();
} else {
  res.json({
    "success": false,
    "error": "Not Auth"
  })
}
})
router.get("/", (req, res, next) => {
  res.json({
    body: req.body,
    params: req.params,
    query: req.query,
    headers: req.headers
  })
});

module.exports = router;