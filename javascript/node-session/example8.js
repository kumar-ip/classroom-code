const { time } = require('console');
const EventEmitter = require('events');

class TimeSheetLogEmitter extends EventEmitter {};

const timeSheetEmitter = new TimeSheetLogEmitter();

timeSheetEmitter.on('event', message => console.error(message));
timeSheetEmitter.on('event', message => console.warn(message));

timeSheetEmitter.emit('event', 'Hello');