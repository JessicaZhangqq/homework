

const Logger = require('logplease');
const loggerVar=Logger.create('utils');
// Hello Node.js (use debug method)
loggerVar.debug('Hello Node.js');

// Node.js is great!! (use info method)
loggerVar.info('Node.js is great!!');

// Warning, Warning, I think we have a Warning (use warn method)
loggerVar.warn('Warning, Warning, I think we have a Warning');

// Mayday Mayday, we have an errro, repeat.. we have an error (use error method)
loggerVar.error('Mayday, Mayday, we have an error, repeat...We have an error');
