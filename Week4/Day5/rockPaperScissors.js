const rockPaperPermutations=roundCount=>{
    if(roundCount===0)return[]
    const permutations=[]
    function playRound(plays){
        if(plays.length===roundCount){
            permutations.push(plays)
            return
        }
        ['r','p','s'].forEach(paly=>{
            playRound(plays+play)
        })
    }
    playPound('')
    return permutations
}
