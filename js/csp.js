function cheak(){
    var paswd = document.getElementById("passwdsIn").value;
    var number = 14
        if(paswd.length >= number){
        document.getElementById("txt").style.color="green"
        }else {
            document.getElementById('txt').style.color="red"
        }
    document.getElementById("count").innerHTML = "Length : " + paswd.length;
       if (paswd.match(/[0-9]/i)){
           document.getElementById('txt1').style.color="green"
       }else {
    document.getElementById('txt1').style.color="red"
       }
       if (paswd.match(/[A-Z]/i)){
    document.getElementById("txt2").style.color="green"
       }else {
    document.getElementById("txt2").style.color="red"
       }
       if(paswd.match(/[^A-Za-z0-9-' ']/i)){
    document.getElementById("txt3").style.color="green"
       }else{
    document.getElementById("txt3").style.color="red"
       }
      if(paswd.length >= number){
        if (paswd.match(/[0-9]/i)){
         if (paswd.match(/[A-Z]/i)){
           if(paswd.match(/[^A-Za-z0-9-' ']/i)){
    
    document.getElementById("finish").innerHTML="<h5 style='color:green'>✅ Your password is secured!</h5>"
                }else {
    document.getElementById("finish").innerHTML="<h5>⚠️ Your password is not secured!</h4>"
                }
             }else {
    document.getElementById("finish").innerHTML="<h5>⚠️ Your password is not secured!</h5>"
       }
          }else {
    document.getElementById("finish").innerHTML="<h5>⚠️ Your password is not secured!</h5>"
       }
       }else {
    document.getElementById("finish").innerHTML="<h5>⚠️ Your password is not secured!</h5>"
       }
    }
    var is_visible = false ;
    
    function seePasswd()
    {
        var input = document.getElementById("passwdsIn");
        var seepass = document.getElementById("visiblePasswd");
        
        if(is_visible) {
        input.type = 'password';
          is_visible = false; 
            seepass.style.color='#262626';
           }else{
        input.type = 'text';
           is_visible = true; 
               seepass.style.color='#262626';
        }
        
    }
   