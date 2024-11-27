/********************************************** Allow To Write *********************************/

var text=document.getElementById("result");
window.addEventListener('load', function(){
    text.setAttribute('contenteditable', 'true');
});

/********************************************** Button *******************************************/
function d1(){
    var get=document.getElementById("%");
    text.innerHTML+=get.innerHTML;
    }
    function d2(){
    var get2=document.getElementById("/");
    text.innerHTML+=get2.innerHTML;
    }
    function d3(){
    var get3=document.getElementById("1");
    text.innerHTML+=get3.innerHTML;
    }    
    function d4(){
    var get4=document.getElementById("2");
    text.innerHTML+=get4.innerHTML;
    }
    function d5(){
    var get5=document.getElementById("3");
    text.innerHTML+=get5.innerHTML;
    }
    function d6(){
    var get6=document.getElementById("*");
    text.innerHTML+=get6.innerHTML;
    }
    function d7(){
    var get7=document.getElementById("4");
    text.innerHTML+=get7.innerHTML;
    }    
    function d8(){
    var get8=document.getElementById("5");
    text.innerHTML+=get8.innerHTML;
    }
    function d9(){
    var get9=document.getElementById("6");
    text.innerHTML+=get9.innerHTML;
    }
    function d10(){
    var get10=document.getElementById("-");
    text.innerHTML+=get10.innerHTML;
    }
    function d11(){
    var get11=document.getElementById("7");
    text.innerHTML+=get11.innerHTML;
    }
    function d12(){
    var get12=document.getElementById("8");
    text.innerHTML+=get12.innerHTML;
    }    
    function d13(){
    var get13=document.getElementById("9");
    text.innerHTML+=get13.innerHTML;
    }
    function d14(){
    var get14=document.getElementById("+");
    text.innerHTML+=get14.innerHTML;
    }
    function d15(){
    var get15=document.getElementById("00");
    text.innerHTML+=get15.innerHTML;
    }
    function d16(){
    var get16=document.getElementById("0");
    text.innerHTML+=get16.innerHTML;
    }
    function d17(){
    var get17=document.getElementById(".");
    text.innerHTML+=get17.innerHTML;
    } 
    function d18(){
        var get18=document.getElementById("**");
        text.innerHTML+=get18.innerHTML;
    }
    function d19(){
        var get19=document.getElementById("e");
        text.innerHTML+=get19.innerHTML;
    } 
    function d20(){
        var get20=document.getElementById("(");
        text.innerHTML+=get20.innerHTML;
    }
    function d21(){
        var get21=document.getElementById(")");
        text.innerHTML+=get21.innerHTML;
    }   
    function d22(){
        var get22=document.getElementById("^");
        text.innerHTML+=get22.innerHTML;
    }   

/********************************************* Result *****************************************/

function r(){
    var text=document.getElementById("result").innerHTML;
    var text=document.getElementById("result").innerHTML=eval(text)
}

/********************************************* Clear text **************************************/     

 var clear=document.getElementById("clear");
 clear.addEventListener("click",function(){
    var text=document.getElementById("result").innerHTML="";
 });

/********************************************** One By One ***************************************/

var obo=document.getElementById("obo");
obo.addEventListener("click",function(){
    var text=document.getElementById("result").innerHTML;
    i=1;
   var splcie=text.substr(i);
   var text=document.getElementById("result").innerHTML=splcie;
   i++;
})
