import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/appDispatcher';

class CalcStore extends EventEmitter {
    constructor() {
        super();
        this.calcData = {
            Amount: 50,
            VG: 50,
            PG: 50,
            Nic: 6,
            NicBase: 'PG',
            NicCon: 72,
            flavours : [{
                name: 'test1',
                base: 'PG',
                perc: 10
            },{
                name: 'test4',
                base: 'PG',
                perc: 5
            },{
                name: 'test3',
                base: 'VG',
                perc: 5
            }
            ]
        };
        this.registerDispatch();
    }
    setPGVG(val, first, second) {
        if (val > 100) {
            val = 100;
        } else if(val < 0) {
            val = 0;
        }
        console.log('PG VG Hit , ', val);
        console.log(first, second);
        this.calcData[first] = val - 0;
        this.calcData[second] = 100 - val;
    }
    setNic(val) {
        console.log('Set Nic Val , ', val);
        if(isNaN(val)) {
            if(val === 'PG')
                this.calcData.NicBase = 'VG';
            else
                this.calcData.NicBase = 'PG';
        } else {
            if (val > 100) {
                val = 100;
            } else if(val < 0) {
                val = 0;
            }
            this.calcData.Nic = val;
        }
    }
    setNicCon(val) {
        this.calcData.NicCon = val;
    }
    addFlavour(flav) {
        this.calcData.flavours.push(flav);
    }
    changeFlavour(index, val) {
        console.log(val, index, ' >>>>>>>>>>>>>');
        if (isNaN(val)) {
            if(val === 'PG')
                this.calcData.flavours[index].base = 'VG';
            else if (val === 'VG')
                this.calcData.flavours[index].base = 'PG';
            else 
                this.calcData.flavours[index].name = val;
        } else {
            if (val <0) {
                val = 0;
            } else if (val > 100) {
                val = 100;
            }
            this.calcData.flavours[index].perc = val;
        }
    }
    removeFlavour(index) {
        let err = new Error();
        console.log(err);
        this.calcData.flavours.splice(index,1);
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
    getCalcData() {
        console.log('calc data pull , ', this.calcData);
        return this.calcData;
    }
    setAmount(val) {
        if (val < 0)
            val = 0;
        this.calcData.Amount = val;
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