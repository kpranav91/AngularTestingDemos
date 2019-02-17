import {VoteComponent} from './vote.component';

describe('Vote Component Suite ',()=>{
    let voteComponent:VoteComponent = new VoteComponent();
    beforeEach(()=>{
        voteComponent = new VoteComponent();
    })
    it('should increment vote by 1',()=>{
        voteComponent.upVote();
        
        expect(voteComponent.vote).toBe(1);
    });
    it('should decrement vote by 1',()=>{
        voteComponent.downVote();
       
        expect(voteComponent.vote).toBe(-1);
    });

});