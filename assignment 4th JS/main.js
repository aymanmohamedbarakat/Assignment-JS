let studentDegreeInput = document.querySelector("#studentDegree");
const submitBtn = document.querySelector('.btn');
const resultShow = document.querySelector('.result');


let calcDegree = () => {
  let Degree = studentDegreeInput.value;
  let GPA = '';

  if (Degree < 0 || Degree > 100 || isNaN(Degree)) {
    resultShow.textContent = "This number not invaild";
    return;
  }

  Degree = +(Degree);

    if (Degree >= 90 ){
      GPA = 'A (Excellent)'
      resultShow.style.color = '#198754'; 
    } else if (Degree >= 75){
      GPA = 'B (Very Good)'
      resultShow.style.color = '#0d6efd'; 
    } else if (Degree >= 60){
      GPA = 'C (Good)'
      resultShow.style.color = '#6c757d'; 
    } else if ( Degree >= 50){
      GPA = 'D (Pass)';
      resultShow.style.color = '#ffc107'; 
    } else {
      GPA =  'F (Fail)';
      resultShow.style.color = '#dc3545';
    }
      resultShow.textContent = `Your GPA is: ${GPA}`;
      studentDegreeInput.value = '';
  }

  // من أجل الشياكة 

 
