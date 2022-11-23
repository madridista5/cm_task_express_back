import {checkIsName, checkIsPrice, checkNameLength} from "../src/validations/validation";

test('is name?', () => {
    expect(() => checkIsName({name: '', price: 1, updateDate: null})).toThrowError();
});

test('is the name length more than 100 characters?', () => {
    expect(() => checkNameLength({name: 'i44444fdfdfadfsdfja;dlfj;aslkdjf;adlskjf;dajf;klsdjf;ajsd;fkj;akdjf;lkjads;lfja;sdjf;asdkfk;jas;dkltem', price: 1, updateDate: null})).toThrowError();
});

test('is price?', () => {
    expect(() => checkIsPrice({name: 'item', price: 0,updateDate: null})).toThrowError();
});