/*
Alert-It Scroller script- By JavaScript Kit
For this and over 400+ free scripts, visit http://www.javascriptkit.com
This notice must stay intact
*/

//cambia el mensaje aquí:
var themsg='<span style="font:italic 22px Arial;color:red;"><b>Mensaje del scroller , texto a modificar en su fuente, color y velocidad" </a></b></span>'
var speed=6 //velocidad de scroller (1-10 o mas)
var loops=2 //specify number of times message scrolls across screen (an integer or "infinite")

function populatescroller(){
    var windowwidth=iecompattest().clientWidth
    document.getElementById("alertit").innerHTML=themsg
    document.getElementById("alertit").style.width=windowwidth
    document.getElementById("alertit").scrollAmount=speed
    document.getElementById("alertit").scrollDelay=20
    document.getElementById("alertit").loop=loops
    document.getElementById("alertit").onfinish=function(){
    document.getElementById("alertit").style.visibility="hidden"
    }
}

function iecompattest(){
    return (document.compatMode!="BackCompat")? document.documentElement : document.body
}

if (document.all && document.getElementById){
    window.onload=populatescroller
    window.onresize=populatescroller
}

                      