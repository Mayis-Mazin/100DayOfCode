var asyncMap=function(tasks,callback){
    //declare resultArray
    var resultArray=[];
    //declare resultCount
    var resultCount=0;

    //iterate through tasks
    for (var i=0;i<tasks.length;i++){
        //invoke task with custom cb
        (function(index){
            tasks[index](function(val){
                //store result of cb correct spot in resultArray
                resultArray[index]=val;
                //increment resultsCount
                resultCount++;
                //if resultCount matches number of tasks 
                if(resultCount===tasks.length){
                    //call callback on resultsArray
                    callback(resultArray);
                }

            });
        })(i);
    }

}