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