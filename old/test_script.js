document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById('setRedColor');
	console.log(btn);
	btn.onclick = function() { document.querySelector('.h1').classList.toggle('blue'); }
	
	const btn2 = document.getElementById('button2');
	btn2.onclick = function() { document.querySelector('.h1').classList.toggle('red'); }
	
	const calculate = document.getElementById('calculate');
	calculate.onclick = function() {
		a1 = document.getElementById("a1").value
		b1 = document.getElementById("b1").value
		c1 = document.getElementById("c1").value
		is_all_numbers = true
		proble_text = ""
		
		if (!isNaN(a1) && !isNaN(parseFloat(a1))) { }
		else{
			proble_text += "Перше значення не число<br>"
			is_all_numbers = false
		}
		if (!isNaN(b1) && !isNaN(parseFloat(b1))) { }
		else{
			proble_text += "Друге значення не число<br>"
			is_all_numbers = false
		}
		if (!isNaN(c1) && !isNaN(parseFloat(c1))) { }
		else{
			proble_text += "Третє значення не число<br>"
			is_all_numbers = false
		}

		if (is_all_numbers){
			res = ""
			if (a1 == 0){
				res += "Дане рівняння не квадратне, але ХУЙ з ним, знайдемо і йому корені<br>"
				res += "Дано рівняння: " + (b1==1?"":b1) + "x = " + (-c1) + "<br>"
				if (b1 == 0) {
					if (c1 == 0)
						res += "Корені всі числа"
					else
						res += "НЕМАЄ КОРЕНІВ"
				}
				else{
					x = -c1/b1
					res += "Корінь: x = " + x
				}
			}
			else{
				res += "Дано рівняння: " + (a1==1?"":a1) + "x² + " + (b1==1?"":b1) + "x + " + c1 + " = 0" +  "<br>"
				
				a1 = parseFloat(a1)
				b1 = parseFloat(b1)
				c1 = parseFloat(c1)
				D = b1 * b1 - 4 * a1 * c1
				if (D < 0)
					res += "В даного рівняння НЕМАЄ КОРЕНІВ"
				else if (D == 0){
					x = -b1/(2*a1)
					res += "В даного рівняння ОДИН КОРІНЬ<br>x = " + x
				}
				else{
					x1 = (-b1 + Math.sqrt(D))/(2*a1)
					x2 = (-b1 - Math.sqrt(D))/(2*a1)
					res += "В даного рівняння ДВА КОРЕНІ<br>x1 = " + x1 + ",<br>x2 = " + x2
				}
				
			}
			document.getElementById("result").innerHTML = res;
		}
		else{
			document.getElementById("result").innerHTML = proble_text
		}
		
		
	}
	
});

var tables = document.getElementsByTagName('table');
for (var i=0; i<tables.length;i++){
 resizableGrid(tables[i]);
}

function resizableGrid(table) {
 var row = table.getElementsByTagName('tr')[0],
 cols = row ? row.children : undefined;
 if (!cols) return;
 
 table.style.overflow = 'hidden';
 
 var tableHeight = table.offsetHeight;
 
 for (var i=0;i<cols.length;i++){
  var div = createDiv(tableHeight);
  cols[i].appendChild(div);
  cols[i].style.position = 'relative';
  setListeners(div);
 }

 function setListeners(div){
  var pageX,curCol,nxtCol,curColWidth,nxtColWidth;

  div.addEventListener('mousedown', function (e) {
   curCol = e.target.parentElement;
   nxtCol = curCol.nextElementSibling;
   pageX = e.pageX; 
 
   var padding = paddingDiff(curCol);
 
   curColWidth = curCol.offsetWidth - padding;
   if (nxtCol)
    nxtColWidth = nxtCol.offsetWidth - padding;
  });

  div.addEventListener('mouseover', function (e) {
   e.target.style.borderRight = '2px solid #0000ff';
  })

  div.addEventListener('mouseout', function (e) {
   e.target.style.borderRight = '';
  })

  document.addEventListener('mousemove', function (e) {
   if (curCol) {
    var diffX = e.pageX - pageX;
 
    if (nxtCol)
     nxtCol.style.width = (nxtColWidth - (diffX))+'px';

    curCol.style.width = (curColWidth + diffX)+'px';
   }
  });

  document.addEventListener('mouseup', function (e) { 
   curCol = undefined;
   nxtCol = undefined;
   pageX = undefined;
   nxtColWidth = undefined;
   curColWidth = undefined
  });
 }
 
 function createDiv(height){
  var div = document.createElement('div');
  div.style.top = 0;
  div.style.right = 0;
  div.style.width = '5px';
  div.style.position = 'absolute';
  div.style.cursor = 'col-resize';
  div.style.userSelect = 'none';
  div.style.height = height + 'px';
  return div;
 }
 
 function paddingDiff(col){
 
  if (getStyleVal(col,'box-sizing') == 'border-box'){
   return 0;
  }
 
  var padLeft = getStyleVal(col,'padding-left');
  var padRight = getStyleVal(col,'padding-right');
  return (parseInt(padLeft) + parseInt(padRight));

 }

 function getStyleVal(elm,css){
  return (window.getComputedStyle(elm, null).getPropertyValue(css))
 }
};