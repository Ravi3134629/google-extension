let loggedUser = () =>{

      //All Bakground Settings


      var image = "img/fallback.jpg";
function getFirstImage()
{
      var lists = ['girls','mountains','green','dark','morning','noon','sunny','boys','sky','cars'];
      fetch(`https://source.unsplash.com/1440x990/?${lists[Math.floor(Math.random()*(0,lists.length))]}`).then((response)=>
      {
        document.querySelector('.hero').style.backgroundImage=`url(${response.url})`;
        document.querySelector('.applyFirst').innerHTML='Apply Background';
       
       
        image =response.url;
        
      }).catch(function(e) {
        console.log("error");
       console.log(e);
        
    });    
}



      function setBackgroundImage()
{
      let image = localStorage.getItem('image');
      if(image==null)
      {
            document.querySelector('.hero').style.backgroundImage='url(img/fallback.jpg)';
      }
      else
      {
            document.querySelector('.hero').style.backgroundImage=`url(${image})`;
      }
}
setBackgroundImage();



      //Change Random Backgrounds Using Unsplash
            function renderImage()
                        {
  
                        localStorage.setItem('image',image);
                        setBackgroundImage();
                        }

      //save image to localstorage

document.querySelector('.applyFirst').addEventListener('click',()=>{
      renderImage();
      document.querySelector('.mainsetup').style.display="inline";
      document.querySelector('.background').style.display='none';
      });



      //Attach click event on Next Button
      //attach an event to next button to change next backgrounds
document.querySelector('.getNext').addEventListener('click',()=>{
      
      getFirstImage();
});

      //All Background Settings Ends Here
      document.querySelector('.form').addEventListener('submit',(e)=>{
            e.preventDefault();
            let name= document.getElementById('uname').value;
            
            if(name.length)
            {
                  if(name.length<6)
            {
            alert('Please Provide Name Greater than 6 letters!');
            }
            else if(name.length>=6)
            {
            localStorage.setItem('ifFirst',true);
            localStorage.setItem('name',name);
            localStorage.setItem('image','img/fallback.jpg');
           //document.querySelector('.form').style.display="none";
           $('.form').hide();
           document.querySelector('.formcity').style.display="inline";
            
            }
            }
            else{
                  alert('Please provide someting in Name Field!');
            }
            });


            document.querySelector('.formcity').addEventListener('submit',(e)=>{
                  e.preventDefault();
                  let city = document.getElementById('city').value;
                  if(city.length)
                  {
                        if(city.length<3)
                        {
                              alert("Enter a Valid City name!");
                        }
                        else if(city.length<=32)
                        {
                              localStorage.setItem('city',city);
                             // window.location.href='index.html';
                             document.querySelector('.formcity').style.display="none";
                             document.querySelector('.background').style.display="inline";
                        }
                  }
                  else
                  {
                        alert("City name Required!");
                  }
            });



            //Complete Full Setup and Proceed To Main Page
            document.querySelector('.proceed').addEventListener('click',()=>{
                  window.location.href='index.html';
            });
}


//check here also is already user logged in or not

let flag = localStorage.getItem('isFirst');
if(flag==null)
{
      loggedUser();
}
else
{
     webkitConvertPointFromNodeToPage.location.href="index.html";
}