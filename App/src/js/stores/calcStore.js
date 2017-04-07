import {EventEmitter} from 'events';
import dispatch from '../dispatcher/appDispatcher';

class CalcStore extends EventEmitter {
    constructor() {
        super();
        this.calcData = {
            VG: 50,
            PG: 50,
            Nic: 6,
            flavours : [{
                name: 'test1',
                base: 'PG',
                perc: 15
            },{
                name: 'test4',
                base: 'PG',
                perc: 5
            },{
                name: 'test3',
                base: 'VG',
                perc: 9
            }
            ]
        };
    }
    setPGVG(val, first, second) {
        if (val > 100) {
            val = 100;
        } else if(val < 0) {
            val = 0;
        }
        this.calcData[first] = val;
        this.calcData[second] = 100 - val;
    }
    setNic(val) {
        if (val > 100) {
            val = 100;
        } else if(val < 0) {
            val = 0;
        }

    }
    addFlavour(flav) {
        this.calcData.flavours.push(flav);
    }
    removeFlavour(index) {
        this.calcData.flavours.splice(index,1);
    }
    emitChange() {
        this.emit('change');
    }
    addEventListener(listener) {
        this.on('change', listener);
    }
    removeEventListener(listener) {
        this.removeListener('change', listener);
    }

    registerDispatch() {
        dispatch.register((action) => {
            switch (action.actionType) {
                case 'ADD_PGVG':
                    this.setsetPGVGNic(action.val, action.first, action.second);
                    this.emitChange();
                    break;
                case 'ADD_FLAV':
                    this.addFlavour(action.val);
                    this.emitChange();
                    break;
                case 'REM_FLAV':
                    this.removeFlavour(action.val);
                    this.emitChange();
                    break;
                case 'ADD_NIC':
                    this.setNic(action.val);
                    this.emitChange();
                    break;
            
                default:
                    break;
            }
        })
    }
}

const calcStore = new CalcStore();

export default calcStore;