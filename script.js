document.getElementById("light-btn").addEventListener("click", function () {
  const calculatorSection = document.getElementById("calculator-section");
  calculatorSection.style.backgroundColor = "white";
  document.body.style.backgroundColor = '#0F172A'
  document.getElementById('screen').style.backgroundColor = '#0F172A'
  const calBtns = document.getElementsByClassName('cal-btn') ;
  for (const calBtn of calBtns){
    calBtn.style.backgroundColor = '#0F172A'
  }
});

document.getElementById("dark-btn").addEventListener("click", function () {
    const calculatorSection = document.getElementById("calculator-section");
    calculatorSection.style.backgroundColor = "#0F172A";
    document.body.style.backgroundColor = 'white'
    document.getElementById('screen').style.backgroundColor = 'white'
    const calBtns = document.getElementsByClassName('cal-btn') ;
    for (const calBtn of calBtns){
      calBtn.style.backgroundColor = '#B91C1C'
    }
  });
  
