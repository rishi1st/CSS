// generate a random number
const randomColor = function(){
          const hex = '0123456789ABCDEF';
          let color = '#';
          for(let i = 0; i<6; i++){
              let randPos = Math.floor(Math.random()*16);
              color+=hex[randPos];
          }
          return color;
      };
      
      let intervalId;
      
      const startChange = function(button){
          intervalId = setInterval(() => changeBgc(button), 2000);
      
          function changeBgc(button){
              // update color name
              let rndcolor = randomColor();
              button.style.backgroundColor = rndcolor;
          }
      }
      
      const stopChange = function(){
          clearInterval(intervalId);
      }
      
      document.querySelectorAll('.item').forEach(button => {
          button.addEventListener('click', function() {
              startChange(this); // Pass the reference to the clicked button
          });
      });
      