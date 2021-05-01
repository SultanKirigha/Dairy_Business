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
  
  // Performs an action when a date is clicked
  function dateClicked(day,month,year){
  document.forms.calendar.date.value = day+'/'+month+'/'+year;  
  
  }
  
  // Sets the displayed month
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