/*-----XuTung Jin 301111889--------*/
/*-------index template js---------*/
/*---------2020-10-09--------------*/

// IIFE -- Immediately Inkoked Function Expression
"use strict";
(function(){
    function Start()
    {
       console.log("App started...");

       if(document.title === "CONTACT")
       {
           let sendButton = document.getElementById("send_contact");
           let cancelButton = document.getElementById("cancel_contact");

           let contact_name = document.getElementById("contact_name");
           let contact_phone = document.getElementById("contact_phone");
           let contact_mail = document.getElementById("contact_mail");
           let contact_message = document.getElementById("contact_message");
           
          
           
           cancelButton.addEventListener('click',(event) =>{
               event.preventDefault();
               if(confirm("Are you sure?"))
               location.href="/home";
           })

           sendButton.addEventListener('click',(event) =>{
            event.preventDefault();
            console.info(`Name   :${contact_name.value}
Phone  :${contact_phone.value}
Mail   :${contact_mail.value}
Message:${contact_message.value}
`)
          
        })
       }
    }
    window.addEventListener("load",Start);
    
    let title = document.title;
    console.log(`This is page: ${title}`);
})(); 


