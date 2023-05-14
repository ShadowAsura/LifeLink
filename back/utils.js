const crypto = require('crypto');

function hash() {
  const hash = crypto.createHash('sha256');
  hash.update(req.body.password);
  return hash.digest('hex');
}

module.exports = {
  hash: hash
}
