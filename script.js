// Реализовать страницу, на которой будет 1 кнопка. 
//Нажатие на кнопку должно вызывать появление картинки (возмите любую из интернета) на 5 сек,
// после чего картинка должна пропадать.

const hitMeButton = document.getElementById('hitMe');


hitMeButton.addEventListener('click', showImage);

function showImage() {
    const image = document.getElementById('img02');
    
      image.style.display = "block";  

      setTimeout(function() {
          image.style.display = "none";  
      }, 5000);
    

}