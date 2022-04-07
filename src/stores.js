import {writable} from 'svelte/store';

let data = {'6410742040':{name :'Chidsanuphong',surename: 'Pengchai',number: '6410742040', pin: '1111'},
            '2222':{name :'Paul',surename: 'doe',number: '2222', pin: '2222'},
            '1111':{name :'Chidsanuphong',surename: 'Pengchai',number: '1111', pin: '1111'}};

export const accounts = writable(data);
export const islogin = writable(false);
export const mode = writable('');
export const account = writable('');
