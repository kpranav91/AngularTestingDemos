export class VoteComponent{
    vote:number=0;
    upVote(){
        this.vote = this.vote+1;
    }

    downVote(){
        this.vote = this.vote-1;        
    }
}