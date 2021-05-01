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
  function functionAlert(msg, myYes) {
     var confirmBox = $("#confirm");
     confirmBox.find(".message").text(msg);
     confirmBox.find(".yes").unbind().click(function() {
        confirmBox.hide();
     });
     confirmBox.find(".yes").click(myYes);
     confirmBox.show();
  }
