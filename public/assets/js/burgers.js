const { networkInterfaces } = require("node:os");

$(function(){
 $(".eat-burger").on("click", function(event){
     const id=$(this).data("id");
     const newDevour=$(this).data("newdevour");

     const newDevourState={
         devour:newDevour
     };

     $.ajax("api/burgers/" + id,{
         method: "PUT",
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          data: newDevourState 
     })
     .then(function(){
         console.log("changed state to:", newDevour);
         location.reload();
     });

     
 });

 $(".add-burger").on("submit",function(event){
     event.preventDefault();

     const newBurger ={
         name: $("#ca").val().trim(),
         devour: $("#devoured").checked
     };
     $.ajax("api/burgers/" + id,{
        method: "POST",
        headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         data: newBurger
    })
    .then(function(){
        $("#ca").val()= '';
        console.log("added a new burger!");
        location.reload();
    });
 });

 $(".delete-burger").forEach(button.on("click", function(event){
     const id= event.attr("data-id");

     $.ajax("api/burgers/" + id,{
        method: "DELETE",
        
    })
    .then(function(res){
        console.log(res);
        console.log("Burger Deleted")
        location.reload();
    });



 }))
});