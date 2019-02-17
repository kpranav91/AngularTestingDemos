import { EventEmitter } from '@angular/core';


export class VoteComponent{

    totalVotes:number=0;

    voteChange = new EventEmitter<number>();

    upVote(){
        this.totalVotes++;
        this.voteChange.emit(this.totalVotes);
    }

    downVote(){
        this.totalVotes--;
        this.voteChange.emit(this.totalVotes);
    }

    getTotalVotes(){
        return this.totalVotes;
    }

}