log('To view source of this test: http://azer.github.com/svg-playground/webkit.js');
var test_getSVGDocument = function()
{
  /**
   * Case 1: getSVGDocument method returns undefined, like all of the attributes.
   */
  var container = window.container = document.createElement('object');
  container.setAttribute("type","image/svg+xml");
  container.setAttribute("data","foobar.svg");
  document.body.appendChild( container );

  assert( container.getSVGDocument() );
}

var test_load_event = function()
{
 /**
  * Case 2: Load event doesn't work
  */
  container.addEventListener('load',function()
  {
    print('Load event works');
  },false);
}

