Template.post_rank.helpers({
  oneBasedRank: function(){
    if (typeof this.rank !== 'undefined') {
      return this.rank + 1;
    }},

  pipelineScore: function(){
    return this.impact+this.need+this.missionfit+this.legality+this.currentmoney+this.futuremoney+this.cost+this.talent+this.technicalrisk+this.internalchampion+this.communityofusers+this.communityofpartners+this.portfoliofit+this.exitstrategies+this.existingdata;}
});
