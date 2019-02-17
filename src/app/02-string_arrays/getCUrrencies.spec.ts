import {getCurrencies} from './getCurrencies';

describe('getCurrencies Suite',()=>{
    it('should contain INR as currency in Array',()=>{
        const currencyList = getCurrencies();
        expect(currencyList).toContain('USD');
        expect(currencyList).toContain('INR');
    });
});

