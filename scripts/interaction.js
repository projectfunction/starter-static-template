
function whenPageReady(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
}


whenPageReady(function() {

    console.log('Page Ready!');

});