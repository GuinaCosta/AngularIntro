// Code goes here
//var program = function() { //One Global variable only way

(function() { //No global variable and selfcall function way
  var createWorker = function() {
    var workCount = 0;

    console.clear();

    var task1 = function() {
      workCount++;

      console.log("task1 " + workCount);
    };

    var task2 = function() {
      workCount++;

      console.log("task2 " + workCount);
    };

    var callTask = function(f) {
      f();
    };

    return {
      job1: task1,
      job2: task2,
      callTask: callTask
    };
  };

  var worker = createWorker();

  worker.job1();

  worker.job2();

  worker.job2();

  worker.job2();

  worker.callTask(worker.job1);
  worker.callTask(worker.job1);
}());

//program();