var winston = require('winston');
var config = require('config');
winston.emitErrs = true;


var logger = new winston.Logger(config.logger.common);

module.exports = logger;