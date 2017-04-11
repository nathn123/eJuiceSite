import Dispatcher from '../dispatcher/appDispatcher'

export function ChangeVG(val) {
    console.log('Dispatcher hit ', val);
    
    Dispatcher.queueDispatch({
        actionType: 'ADD_PGVG',
        val: val,
        first: 'VG',
        second: 'PG',
    });
}

export function ChangePG(val) {
    Dispatcher.queueDispatch({
        actionType: 'ADD_PGVG',
        val: val,
        first: 'PG',
        second: 'VG',
    });
}
export function ChangeFlav (index, val) {
    Dispatcher.queueDispatch({
        actionType: 'CHANGE_FLAV',
        index: index,
        val: val
    });
}
export function ChangeNic (val) {
    Dispatcher.queueDispatch({
        actionType: 'SET_NIC',
        val: val
    });
}
export function ChangeNicCon (val) {
    Dispatcher.queueDispatch({
        actionType: 'SET_NICCON',
        val: val
    });
}
export function ChangeAmount (val) {
    Dispatcher.queueDispatch({
        actionType: 'SET_AMOUNT',
        val: val
    });
}
export function AddFlav (val) {
    if (Object.getOwnPropertyNames(val) == 0)
    {
        val.name = 'Custom',
        val.base = 'PG',
        val.perc = 15
    }
    Dispatcher.queueDispatch({
        actionType: 'ADD_FLAV',
        val: val
    });
}
export function RemoveFlav (val) {
    Dispatcher.queueDispatch({
        actionType: 'REM_FLAV',
        val: val
    });
}
