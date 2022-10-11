var text_user = 0 ;

function postFunction(){
   var post = document.getElementById("text1").value;
  
    
    switch(text_user){
        case 0:
        topic1.textContent = post; 
        text_user ++
        break;

        case 1:
        comment1.textContent = post; 
        text_user ++
        break;

        case 2:
        comment2.textContent = post; 
        text_user ++
        break;
    }

}


function clearFunction(){
    
    topic1.textContent = ("");
    comment1.textContent = ("");
    comment2.textContent = ("");
    text1.textContent = ("");
    text_user = 0 ;
}



