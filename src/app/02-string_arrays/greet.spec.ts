import {greet} from './greet';

describe('greet suite',()=>{
    it('should return name is message',()=>{
        expect(greet('Pranav')).toContain('Pranav');
    });
});