import {compute} from './compute';
describe('test fundamental',()=>{
    it('should return 0 for negative number',()=>{
        const result = compute(-5);
        expect(result).toBe(0);
    });
    it('should return +1 for positive number',()=>{
        const result = compute(1);
        expect(result).toBe(2);
    });    
    it('should return 6 for positive number',()=>{
        const result = compute(5);
        expect(result).toBe(6);
    });
})