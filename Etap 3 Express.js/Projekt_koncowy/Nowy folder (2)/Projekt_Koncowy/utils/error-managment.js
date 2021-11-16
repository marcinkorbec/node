function handleError(err, req, res, next) {
  console.log("i m here")
  res.render('error')
}

module.exports = {
  handleError
}
