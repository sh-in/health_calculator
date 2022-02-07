'use strict'

// menu
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const spMenus = document.querySelectorAll('.overlay li a');
  
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
  spMenus.forEach(menu => {
    menu.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });
  });
}

// calculate
{
  let btn = document.getElementById("btn");
  btn.addEventListener("click", function(){
      //データをhtmlから取得する。 done
      let age = document.getElementById("age").value;
      let height = document.getElementById("heights").value;
      let weight = document.getElementById("weights").value;
      let genders = document.getElementsByName("gender");
      let gender;
      let calory, protein, fat, carb;
      for(var i=0; i<genders.length; i++){
          if(genders[i].checked){
              gender=genders[i].value;
              break;
          }
      }
      let activity_level = document.getElementById("activity_level").value;
      let purpose = document.getElementById("purpose").value;
      let diet = document.getElementById("diet_style").value;

      age=Number(age);
      height=Number(height);
      weight=Number(weight);
      activity_level=Number(activity_level);
      purpose=Number(purpose);

      //カロリーを計算する。 done
      if(gender=="male"){
          calory = (13.397*weight+4.799*height-5.677*age+88.362)*activity_level+purpose;
      }else{
          calory = (9.247*weight+3.097*height-4.33*age+447.593)*activity_level+purpose;
      }
      //栄養素の内訳を計算する。
      if(diet=="balance"){
          protein=calory*0.15/4;
          fat=calory*0.25/9;
          carb=calory*0.6/4;
      }else if(diet=="high_protein"){
          protein=weight*2;
          fat=calory*0.25/9;
          carb=(calory-protein*4-fat*9)/4;
      }else if(diet=="ketone"){
          protein=calory*0.2/4;
          fat=calory*0.75/9;
          carb=calory*0.05/4;
      }

      //計算結果を表示する。
      document.getElementById("calory").value=calory.toFixed(2);
      document.getElementById("carbo").value=carb.toFixed(2);
      document.getElementById("protein").value=protein.toFixed(2);
      document.getElementById("fat").value=fat.toFixed(2);
  }, false);
}