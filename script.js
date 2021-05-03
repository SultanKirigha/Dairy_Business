function changeBg(){
    const images =[
        'url("Images/artis-kancs-55KdFMcKDr0-unsplash.jpg")',
        'url("Images/benjamin-bindewald-TdaC_x13XAI-unsplash.jpg")',
        'url("Images/frans-ruiter-62xqQdCBULk-unsplash.jpg")',
        'url("Images/hennie-stander-QYnStnPRc8I-unsplash.jpg")',
        'url("Images/jonas-koel-nnxWQZTmoxQ-unsplash.jpg")',
        'url("Images/lomig-HHpRh6rNQMo-unsplash.jpg")',
        'url("Images/miguel-angel-diaz-magister-9wW5UUpari0-unsplash.jpg")',



    ]
    const section = document.querySelector('section');
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}
setInterval(changeBg, 1500)

function showAlert()  {
    var myText = "Your Contract application form has been Submitted";
    alert (myText);
  }
  
  
  var  daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
  var  monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
  
  // Returns the number of days in the month in a given year (January=0)
  function getDaysInMonth(month,year){
  if ((month==1)&&(year%4==0)&&((year%100!=0)||(year%400==0))){
  return 29;
  }else{
  return daysInMonth[month];
  }
  }
  
  function dateClicked(day,month,year){
  document.forms.calendar.date.value = day+'/'+month+'/'+year;  
  
  }
  

  function setDisplayedMonth(month){
      if (month<0){
          alert('You have reached the beginning of this calendar');
        }else if (month>=months){
            alert('You have reached the end of this calendar');
         }else{
             for (var i=0;i<months;i++){
                 document.getElementById('calendarMonth'+i).style.display='none';
                }
                document.getElementById('calendarMonth'+month).style.display='block';
            }
  }

  window.onbeforeunload = function() {
    return "Dude, are you sure you want to leave? Think of the kittens!";
}

  function fn1(){
      var n1 = parseInt(document.getElementById('n1').value);
      var n2 = parseInt(document.getElementById('n2').value);
      var n3 = parseInt(document.getElementById('n3').value);
      var n4 = parseInt(document.getElementById('n4').value);
      var sum = (n1 + n2 + n3 + n4)
      if (fn1 == true);
      var sum = document.getElementById('results').value = (n1+n2+n3+n4);
      getElementById(results);
      console.log(sum);    
  }
  function fn2(){
    var n5 = parseInt(document.getElementById('n5').value);
    var n6 = parseInt(document.getElementById('n6').value);
    var n7 = parseInt(document.getElementById('n7').value);
    var n8 = parseInt(document.getElementById('n8').value);
    var sum = (n5 + n6 + n7 + n8)
    if (fn2 == true);
    var sum = document.getElementById('results1').value = (n5+n6+n7+n8);
    getElementById(results1);
    console.log(sum);    
}
function fn3(){
    var n9 = parseInt(document.getElementById('n9').value);
    var n10 = parseInt(document.getElementById('n10').value);
    var n11 = parseInt(document.getElementById('n11').value);
    var n12 = parseInt(document.getElementById('n12').value);
    var sum = (n9 + n10 + n11 + n12)
    if (fn3 == true);
    var sum = document.getElementById('results2').value = (n9+n10+n11+n12);
    getElementById(results2);
    console.log(sum);    
}
function fn4(){
    var n13 = parseInt(document.getElementById('n13').value);
    var n14 = parseInt(document.getElementById('n14').value);
    var n15 = parseInt(document.getElementById('n15').value);
    var n16 = parseInt(document.getElementById('n16').value);
    var sum = (n13 + n14 + n15 + n16)
    if (fn4 == true);
    var sum = document.getElementById('results3').value = (n13+n14+n15+n16);
    getElementById(results3);
    console.log(sum);    
}
function fn5(){
    var n17 = parseInt(document.getElementById('n17').value);
    var n18 = parseInt(document.getElementById('n18').value);
    var n19 = parseInt(document.getElementById('n19').value);
    var n20 = parseInt(document.getElementById('n20').value);
    var sum = (n17 + n18 + n19 + n20)
    if (fn5 == true);
    var sum = document.getElementById('results4').value = (n17+n18+n19+n20);
    getElementById(results4);
    console.log(sum);  
}
function fn6(){
    var n21 = parseInt(document.getElementById('n21').value);
    var n22 = parseInt(document.getElementById('n22').value);
    var n23 = parseInt(document.getElementById('n23').value);
    var n24 = parseInt(document.getElementById('n24').value);
    var sum = (n21 + n22 + n23 + n24)
    if (fn6 == true);
    var sum = document.getElementById('results5').value = (n21+n22+n23+n24);
    getElementById(results5);
    console.log(sum);  
}         
function total(){
    var results  = parseInt(document.getElementById('results').value);
    var results1 = parseInt(document.getElementById('results1').value);
    var results2 = parseInt(document.getElementById('results2').value);
    var results3 = parseInt(document.getElementById('results3').value);
    var results4 = parseInt(document.getElementById('results4').value);
    var results5 = parseInt(document.getElementById('results5').value);
    if (total == true);
    var sum = document.getElementById('Week').value = (results +results1 +results2 +results3 +results4 + results5)
    getElementById(Week);
    console.log(sum);

}
function Ksh(){
    var Week = parseInt(document.getElementById('Week').value);
    if (Ksh == true);
    var product = document.getElementById('kshWeek').value = (Week * 45);
    getElementById(kshWeek);
    console.log(product)
}
function Yr(){
    var kshWeek = parseInt(document.getElementById('kshWeek').value);
    if (Yr == true);
    var multy = document.getElementById('kshYear').value = (kshWeek * 4 * 12);
    getElementById(kshYear);
    console.log(multy)
}
function months(){
    var month ={
        January:31,
        February:29,
        March:31,
        April:30,
        May:31,
        June:30,
        July:31,
        August:31,
        September:30,
        October:31,
        November:30,
        December:31
    }
    if (months == true);
    var calculate = document.getElementById('Months').value  = (
        "Your income for January is" + (results * 31),
        "Your income for February is" + (results * 29),
        "Your income for March is" + (results * 31),
        "Your income for April is" + (results * 30),
        "Your income for May is" + (results * 31),
        "Your income for June is" + (results * 30),
        "Your income for July is" + (results * 31),
        "Your income for August is" + (results * 31),
        "Your income for September is" + (results * 30),
        "Your income for October is" + (results * 31),
        "Your income for November is" + (results * 30),
        "Your income for December is" +  (results * 31)
    )
    getElementById(Months);
    console.log(calculate)
}