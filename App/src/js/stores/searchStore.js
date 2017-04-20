import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/appDispatcher';

class CalcStore extends EventEmitter {
    constructor() {
        super();
        this.searchData = {

        };
        this.registerDispatch();
    }
    emitChange() {
        this.emit('change');
        console.log(this.calcData);
    }
    addEventListener(listener) {
        this.on('change', listener);
    }
    removeEventListener(listener) {
        this.removeListener('change', listener);
    }
    registerDispatch() {
        
        Dispatcher.register((action) => {
            switch (action.actionType) {
                case 'ADD_PGVG':
                    this.setPGVG(action.val, action.first, action.second);
                    this.emitChange();
                    break;
                case 'ADD_FLAV':
                    this.addFlavour(action.val);
                    this.emitChange();
                    break;
                case 'CHANGE_FLAV':
                    this.changeFlavour(action.index,action.val);
                    this.emitChange();
                    break;
                case 'REM_FLAV':
                    this.removeFlavour(action.val);
                    this.emitChange();
                    break;
                case 'SET_NIC':
                    this.setNic(action.val);
                    this.emitChange();
                    break;
                case 'SET_NICCON':
                    this.setNicCon(action.val);
                    this.emitChange();
                    break;
                case 'SET_AMOUNT':
                    this.setAmount(action.val);
                    this.emitChange();
            
                default:
                    break;
            }
        })
    }
}

const calcStore = new CalcStore();

export default calcStore;