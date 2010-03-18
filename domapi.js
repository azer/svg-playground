log('To view source of this test case: http://azer.github.com/svg-playground/webkit.js');

var init = function()
{
  var container = window.container = document.createElement('object');
  container.setAttribute("type","image/svg+xml");
  container.setAttribute("data","foobar.svg");
  document.documentElement.appendChild( container );
}

var test_getSVGDocument = function()
{
  container.addEventListener('load',function()
  {
    assert( container.getSVGDocument() != undefined );
    test_getSVGDocument.result = true;
  },false);
}
test_getSVGDocument.async = true;

var test_load_event = function()
{
  container.addEventListener('load',function()
  {
    test_load_event.result = true;
  },false);
}
test_load_event.async = true;

var test_innerhtml = function()
{
  document.body.innerHTML = '<object id="svgobj" type="image/svg+xml" />';
  var svgobj = document.getElementById('svgobj');
  svgobj.addEventListener('load',function()
  {
    assert( svgobj.getSVGDocument() != undefined );
    test_innerhtml.result = true;
    svgobj.parentNode.removeChild(svgobj);
  },false);
  svgobj.data = "foobar.svg";
}
test_innerhtml.async = true;

init();
