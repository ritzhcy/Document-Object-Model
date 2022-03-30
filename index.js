//1. Write the code to access element which is having id as "text".
function one() 
{
    let result1 = document.getElementById('text');
    result1.innerText="Hey!";
}


//2. Write the code to access element which is having tag as "h1".
function two() 
{
    let result2 = document.getElementsByTagName('h2');
    result2[0].innerText="Hey!";
}


//3. Write the code to access element which is having class as "box".
function three() 
{
    let result3 = document.getElementsByClassName('box');
    result3[0].innerText="Hey!";
}


// 4. <h1>Hello </h1> Change the heading from "Hello" to "Hello World" 
//    using DOM functions.
function four() 
{
    let result4 = document.getElementsByTagName('h1');
    result4[1].innerText="Hello World";
        
}


// 5. Create three cards on HTML page and arrange them using flex property
//    in row or horizontal direction and also create button at the bottom
//    named "Change Flex direction". When user clicks on this button, the
//    cards arrangement should be changed to vertical direction.
function five() 
{
    document.getElementById('flex').style.flexDirection="column"
    document.getElementById('flex').style.alignItems="center"
}


//6. <h1>Hello </h1>Add one style attribute and give text color as red and
//   id attribute and give the id value as "heading" in the above given h1
//   tag using DOM functions.

function six() 
{
    document.getElementById('heading').style.color='red';
}


//7. Create an HTML page having content as Hello world and a button named
//   Replace Text. When user will click on this button page content should 
//   be changed to "Welcome to Elevation academy".
function seven() 
{
    document.getElementsByTagName('h1')[3].innerText="Welcome to Elevation academy";       
}


//8. Write code to implement timer clock using JS -- display HH:MM:SS -- 
//   the time should keep updating every second.
function clock()
{
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) 
    {
        hrs = 12;
    }

    if (hrs > 12) 
    {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) 
    {
        hrs = "0" + hrs;
    }
    if (mins < 10) 
    {
        mins = "0" + mins;
    }
    if (secs < 10) 
    {
        secs = "0" + secs;
    }
    hours.innerText = hrs+' :';
    minutes.innerText = mins +' :';
    seconds.innerText = secs +' :';
    am.innerText = am_pm;
}
setInterval(clock,1000);


//9. Create a select drop down for selecting Year 20-21, 21-22 etc. Print
//   the item text selected.
function getOption() 
{
    var r1 = document.getElementById("s1");
    var r2 = r1.value;
    document.getElementById("s2").innerText=r2;
}
