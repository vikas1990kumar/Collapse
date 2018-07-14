   

  $(document).ready(() => {

     $("#p1").hide()
     $("#p2").hide()
     $("#p3").hide()


     
  
   $("#perform1").click(() => {


        $("#p1").slideToggle()
        $("#p2").hide()
        $("#p3").hide()
        
    })

   $("#perform2").click(() => {

          //hides the p2 div by default
       
        $("#p2").slideToggle() 
        $("#p1").hide()
        $("#p3").hide()  

    })

   $("#perform3").click(() => {

          $("#p3").slideToggle()
          $("#p1").hide()
          $("#p2").hide()   

    })
    


})