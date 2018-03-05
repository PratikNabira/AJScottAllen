(function() {

  var createWorker = function() {

    var workCount = 0;

    var task1 = function() {
      workCount += 1;
      console.log('job1 ' + workCount);
    };
    var task2 = function() {
      workCount += 1;
      console.log('job2 ' + workCount);
    };

    return {
      job1: task1,
      job2: task2
    };

  };

  var worker = createWorker();
  worker.job1();
  createWorker().job2(); // call entire createWorker again and set workCount back to 0
  createWorker().job1(); // how to call function from function directly
  worker.job1();

}());