//make clock



let time = document.querySelector('.times');

const makeClock = ()=>{
      var date = new Date();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();

      let name = localStorage.getItem('name');
      if(name==null)
      {
            name='';
      }
      else
      {
            name=localStorage.getItem('name');
      }

      //change greetings according to time

      console.log(h+':'+m+':'+s);
      if(m<10)
      {
            time.textContent = h+':'+'0'+m;
      }
      else
      {
            time.textContent = h+':'+m;
      }
      if(h<12)
      {
            document.querySelector('.greeting').innerHTML=`Good <i class="fas fa-sun has-text-warning"></i>,${name}`;
      }
      else if(h>=12 && h<=17)
      {
            document.querySelector('.greeting').innerHTML=`Good Afternoon,${name}`;
      }
      else if (h >= 17 && h<=20)
      {
            document.querySelector('.greeting').innerHTML=`Good Evening,${name}`;  
      }
      else
      {
            document.querySelector('.greeting').innerHTML=`Good <i class="fas fa-moon has-text-danger"></i>,${name}`;
      }
}

setInterval(makeClock,1000);

makeClock();

var image = "";
function getFirstImage()
{
      var lists = ['girls','mountains','green','dark','morning','noon','sunny','boys','sky','cars'];
      fetch(`https://source.unsplash.com/1440x990/?${lists[Math.floor(Math.random()*(0,lists.length))]}`).then((response)=>
      {
        document.querySelector('.preview').style.backgroundImage=`url(${response.url})`;
        document.querySelector('.hero').style.backgroundImage=`url(${response.url})`;
        image =response.url;
        
      }).catch(function() {
        console.log("error");
        document.querySelector('.prev').innerHTML=`<h1>Turn ON Internet! And Try Again!</h1>
        <div class="buttons">
                        <a href="#" class="button is-primary apply">Apply Background</a>
                        <a href="#" class="button is-danger next">Next</a>
                       </div>`;
        
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






// open and remove google apps bar

// open app bar
document.querySelector('.gapps').addEventListener('click',()=>{
document.querySelector('.modal').classList.add('is-active');
document.querySelector('.main').style.visibility='hidden';
});

//close app bar
document.querySelector('.close_apps').addEventListener('click',()=>{
      document.querySelector('.modal').classList.remove('is-active');
      document.querySelector('.main').style.visibility='visible';
      });



//open background settings
document.querySelector('.walls').addEventListener('click',()=>{
document.querySelector('.preview').style.backgroundImage=`url(${localStorage.getItem('image')})`;
document.querySelector('.backgrounds').classList.add('is-active');
document.querySelector('.main').style.visibility='hidden';
});

//close backgrounds bar
document.querySelector('.close_walls').addEventListener('click',()=>{
      document.querySelector('.backgrounds').classList.remove('is-active');
      document.querySelector('.main').style.visibility='visible';
      document.querySelector('.hero').style.backgroundImage=`url(${localStorage.getItem('image')})`;
      });


      //Delete All Data of The User From Localstorage And Start the User Setup From Intitally

      document.querySelector('.bin').addEventListener('click',()=>{
            localStorage.clear();
            alert("User Data Deleted! Setup a New user!");
            window.location.href="welcome.html";
      })




      //Show a Welcome Screen to The User who Comes To Homepage for First Time To Get Name



      let checkFirst = ()=>{
            let ifFirst = localStorage.getItem('ifFirst');
            console.log(ifFirst);
            if(ifFirst!=null)
            {
                  console.log('User Already Setted!');
            }
            else
            {
                  window.location.href='welcome.html';
            }
      }

      checkFirst();


//save image to localstorage

document.querySelector('.apply').addEventListener('click',()=>{
renderImage();
document.querySelector('.backgrounds').classList.remove('is-active');
document.querySelector('.main').style.visibility='visible';
});


//attach an event to next button to change next backgrounds
document.querySelector('.next').addEventListener('click',()=>{
      getFirstImage();
});



// Function to get quotes from the api using ajax get request


/*function getQuote() {
      $.ajax({
        url: 'https://api.quotable.io/random',
        type: 'GET',
        success: function (data) {
          console.log(data);
          document.querySelector('.quotes').innerHTML=`<h2 class="is-subtitle is-size-5 has-text-centered quotes">"${data['content']}"</h2>`;
          //$('#quote').html('"' + data['content'] + '-by ' + data['author'] + '"');
          //$('#quote').attr('data-clipboard-text', '"' + data['content'] + '-by ' + data['author'] + '"');
        },
        error: function (e) {
          console.log(e);
        }
      })
    }
    getQuote();

 setInterval(getQuote,30000);*/

 /*Weather Funtion start from here*/
 function getWeather(city) {
      var url = "https://api.openweathermap.org/data/2.5/weather?q=" + localStorage.getItem('city') + "&APPID=16020d8d307b65395a579b8cdb9b33dd&units=metric";
  
  
      $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
          console.log(data)
          var weatherData = data;
          var desc = weatherData.weather[0].main;
          var icon = weatherData.weather[0].icon;
          var upperDesc = desc.toUpperCase();
          var temp = Math.floor(parseFloat(weatherData.main.temp));
          var temp_min = parseInt(weatherData.main.temp_min);
          var temp_max = parseInt(weatherData.main.temp_max);
          var country = weatherData.sys.country;
          var sunrise = weatherData.sys.sunrise;
          var sunset = weatherData.sys.sunset;
          console.log(country); //console only for debugging
          console.log(temp);
          console.log(icon);
  
  
  
  
          console.log(desc);
          //$('#temp').html(temp);
          //$('#city').html(city);
          document.querySelector('.city').innerHTML=localStorage.getItem('city');
          document.querySelector('.temp').innerHTML=temp+`<sup>o</sup>C`;
          document.querySelector('.icons').setAttribute('src',`http://openweathermap.org/img/wn/${icon}@2x.png`);
          //$('#temp_info').html(desc + '<br>Minimum:' + temp_min + '<br>Maximum:' + temp_max);
          
  
          
  
  
  
          
  
          //**Update Ends Here */
  
        }, // fallback incase of api error
        error: function (e) {
          console.log(e)
        var statuscode = e.status; //or whatever
        //$('#temp').html(city);
          
          if (statuscode == 400) {
            console.log('There is an error city not found!');
          }
          else if (statuscode == 404) {
            console.log('Bad Request!');
          }
      
        }
      });
  
      // all this are done in weather function
    }



 //get city 

 function getCity()
 {
   $.ajax({
 url:'https://ipinfo.io/json',
 'type':'GET',
 success:function(data)
 {
 console.log(data);
 var userinfo = data;
 var city = userinfo.city;
 var country = userinfo.country;
 console.log(city+"("+country+")");
 //$("#city").text(city);
 //$("#nav_city").text(city);
 //$("#inner_city").text(city+"("+country+")");
 
 getWeather(city);
 },error:function(e)
 {
console.log('Error while fetching city!');
getWeather(localStorage.getItem('city'));
 }
 });
 }
 
   //call the above function to get City
   getCity();
