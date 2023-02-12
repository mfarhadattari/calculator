document.getElementById("light-btn").addEventListener("click", function () {
  const calculatorSection = document.getElementById("calculator-section");
  calculatorSection.style.backgroundColor = "white";
  document.body.style.backgroundColor = '#0F172A'
  document.getElementById('screen').style.backgroundColor = '#0F172A'
  const calBtns = document.getElementsByClassName('cal-btn') ;
  for (const calBtn of calBtns){
    calBtn.classList.remove('bg-red-700')
    calBtn.classList.add('bg-slate-900') ;
  }
});

document.getElementById("dark-btn").addEventListener("click", function () {
    const calculatorSection = document.getElementById("calculator-section");
    calculatorSection.style.backgroundColor = "#0F172A";
    document.body.style.backgroundColor = 'white'
    document.getElementById('screen').style.backgroundColor = 'white'
    const calBtns = document.getElementsByClassName('cal-btn') ;
    for (const calBtn of calBtns){
      calBtn.classList.remove('bg-slate-900');
      calBtn.classList.add('bg-red-700') ;
    }
  });
  
