

$(function(){
 $(".eat-burger").on("click", function(event){
     const id=$(this).data("id");
     const newDevour=$(this).data("newdevour");

     const newDevourState={
         devour:newDevour
     };

     $.ajax("api/burgers/" + id,{
         method: "PUT",
         
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
         devour: $("[name=devour]").val().trim()
     };
     $.ajax("api/burgers/",{
        method: "POST",
        
         
         data: newBurger
    })
    .then(function(){
        
        console.log("added a new burger!");
        location.reload();
    });
 });

 $(".delete-burger").on("click", function(event){
     const id= $(this).data("id");

     $.ajax("api/burgers/" + id,{
        method: "DELETE",
        
    })
    .then(function(){
        
        console.log("Burger Deleted")
        location.reload();
    });



 })
});