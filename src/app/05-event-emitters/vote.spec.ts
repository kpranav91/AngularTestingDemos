import { VoteComponent } from "./vote.component";
import { Component } from '@angular/core';



describe('vote component suite',()=>{
    var voteComponent:VoteComponent;


    beforeEach(()=>{
        voteComponent = new VoteComponent();
    });

    it('should raised vote change event when upVoted',()=>{
        let totalVotes = null;
        voteComponent.voteChange.subscribe(newVal=>totalVotes=newVal);
        voteComponent.upVote();
        expect(totalVotes).toBe(1);
    });
    it('should raised vote change event when downVoted',()=>{
        let totalVotes = null;
        voteComponent.voteChange.subscribe(newVal=>totalVotes=newVal);
        voteComponent.downVote();
        expect(totalVotes).toBe(-1);
    });
})