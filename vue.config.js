const { NODE_ENV } = process.env

module.exports = {
  publicPath: NODE_ENV === "prod" ? "/dragonite/" : "/"
}
