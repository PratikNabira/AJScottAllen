// Code goes here

var work = function() {
  console.log('work hard');
};

var doWork = function(f) {
  console.log('start');

  try {
    f();
  } catch (ex) {
    console.log(ex);
  }
  console.log('end');
};

doWork(work); // how to pass function to another function