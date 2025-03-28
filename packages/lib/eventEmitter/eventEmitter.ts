import { EventEmitter } from 'events';

// Create and export an instance of EventEmitter
const emitter = new EventEmitter();
emitter.setMaxListeners(20);
export default emitter;
