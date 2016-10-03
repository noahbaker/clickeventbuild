  $(document).ready(function() {

// /*------------------1------------------*/
// 	// $('div').click(function (){
//  //    $("div").animate({width: '80%',}, 1000);
//  //  });

			var slideleft= 0;
   $(".slideleft").click(function(){
   		var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (slideleft==0) {
           $(this).animate({width: '75%'}, randomtime);
           slideleft++;
       }
       
       else if (slideleft==1) {
          $(this).animate({width: '50%'}, randomtime);
           slideleft++;
       }
       
       else if (slideleft==2) {
          $(this).animate({width: '25%'}, randomtime);
           slideleft++;
       }
       
       else if (slideleft==3) {
          $(this).animate({width: '2%'}, randomtime);
           slideleft++;
       }

   });


// /*------------------1------------------*/

	
			var slideright= 0;
   $(".slideright").click(function(){
      var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (slideright==0) {
          $(this).animate({width: '75%'}, randomtime);
           slideright++;
       }
       
       else if (slideright==1) {
          $(this).animate({width: '50%'}, randomtime);
           slideright++;
       }
       
       else if (slideright==2) {
          $(this).animate({width: '25%'}, randomtime);
           slideright++;
       }
       
       else if (slideright==3) {
          $(this).animate({width: '2%'}, randomtime);
           slideright++;
       }

});

// ------------------1------------------

	
			var slideup= 0;
   $(".slideup").click(function(){
            var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (slideup==0) {
          $(this).animate({height: '75%'}, randomtime);
           slideup++;
       }
       
       else if (slideup==1) {
        $(this).animate({height: '50%'}, randomtime);
           slideup++;
       }
       
       else if (slideup==2) {
        $(this).animate({height: '25%'}, randomtime);
           slideup++;
       }
       
       else if (slideup==3) {
        $(this).animate({height: '2%'}, randomtime);
           slideup++;
       }

});

// /*------------------1------------------*/

	
			var slidedown= 0;
   $(".slidedown").click(function(){
    var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (slidedown==0) {
         $(this).animate({height: '75%'}, randomtime);
           slidedown++;
       }
       
       else if (slidedown==1) {
         $(this).animate({height: '50%'}, randomtime);
           slidedown++;
       }
       
       else if (slidedown==2) {
         $(this).animate({height: '25%'}, randomtime);
           slidedown++;
       }
       
       else if (slidedown==3) {
         $(this).animate({height: '2%'}, randomtime);
           slidedown++;
       }

});

/*------------------1------------------*/

	
			var sizedown= 0;
   $(".sizedown").click(function(){
        var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
        var randomheight = Math.floor(Math.random() * (1000 -100 + 1)) + 100;
        var randomwidth = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
       if (sizedown==0) {
           $(this).animate({height:randomheight + "px"}, randomtime);
           $(this).animate({width:randomwidth + "px"}, randomtime);
          sizedown++;
       }
       
       else if (sizedown==1) {
           $(this).animate({height:randomheight + "px"}, randomtime);
           $(this).animate({width:randomwidth + "px"}, randomtime);
           sizedown++;
       }
       
       else if (sizedown==2) {
           $(this).animate({height:randomheight + "px"}, randomtime);
           $(this).animate({width:randomwidth + "px"}, randomtime);
           sizedown++;
       }
       
       else if (sizedown==3) {
           $(this).animate({height:randomheight + "px"}, randomtime);
           $(this).animate({width:randomwidth + "px"}, randomtime);
           sizedown++;
       }

       else if (sizedown==4) {
           $(this).css("height", "2%");
           $(this).css("width", "100%");
           sizedown++;
       }
});


/*------------------1------------------*/

	
			var a= 0;
   $("#a").click(function(){
       if (a==0) {
           $(".newt").animate({height: '100%'});
           $(".newt").animate({width: '50%'});
           a++;
       }
       
       else if (a==1) {
           $(".newt").animate({height: '50%'});
           $(".newt").animate({width: '25%'});
           a++;
       }
       
       else if (a==2) {
           $(".newt").animate({height: '25%'});
           $(".newt").animate({width: '100%'});
           a++;
       }
       
       else if (a==3) {
           $(".newt").animate({height: '2%'});
           $(".newt").animate({width: '75%'});
          a++;
       }
});


    var text= 0;
   $(".text").click(function(){
       if (text==0) {
            $(this).html("<h1>Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die.</h1>")
           text++;
       }
       
       else if (text==1) {
           $(this).html("<h1>Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die.</h1>");
           text++;
       }

       else if (text==2){
          $(this).html("<h1>Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die.</h1>")
          text++;       
       }

        else if (text==3){
          $(this).html("<h1>Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die.</h1>")
          text++;      
       }

         else if (text==4){
          $(this).html("<h1>Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Hello. My name is Inigo Montoya. You killed my father. Prepare to die.</h1>")
          text++; 
       }

        else if (text==5){
          $(this).hide ();
        text++; 
       }

   });

       var volcano= 0;
   $(".volcano").click(function(){
      var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (volcano==0) {
          $(this).animate({width: '125%'}, randomtime);
           volcano++;
       }
       
       else if (volcano==1) {
          $(this).animate({width: '200%'}, randomtime);
           volcano++;
       }
       
       else if (volcano==2) {
          $(this).animate({width: '500%'}, randomtime);
           volcano++;
       }
       
       else if (volcano==3) {
          $(this).animate({width: '2500%'}, randomtime);
           volcano++;
       }

        else if (volcano==4) {
          $(this).hide();
           volcano++;
       }

});

   $(".circle").click(function(){
        $(this).hide();
        $(".black").hide();
    });

     var harambe= 0;
   $(".harambe").click(function(){
        var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
        var randomheight = Math.floor(Math.random() * (1000 -10 + 1)) + 10;
        var randomwidth = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
       if (harambe==0) {
           $(this).animate({height:randomheight + "px"}, randomtime);
           $(this).animate({width:randomwidth + "px"}, randomtime);
          harambe++;
       }
       
       else if (harambe==1) {
           $(this).animate({height:randomheight + "px"}, randomtime);
           $(this).animate({width:randomwidth + "px"}, randomtime);
           harambe++;
       }
       
       else if (harambe==2) {
           $(this).animate({height:randomheight + "px"}, randomtime);
           $(this).animate({width:randomwidth + "px"}, randomtime);
           harambe++;
       }
});

        var lava= 0;
   $(".lava").click(function(){
      var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (lava==0) {
           $(this).animate({width: '75%'}, randomtime);
           lava++;
       }
       
       else if (lava==1) {
          $(this).animate({width: '50%'}, randomtime);
           lava++;
       }
       
       else if (lava==2) {
          $(this).animate({width: '25%'}, randomtime);
           lava++;
       }
       
       else if (lava==3) {
          $(this).animate({width: '2%'}, randomtime);
           lava++;
       }

   });

        var hillary= 0;
   $(".hillary").click(function(){
      var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (hillary==0) {
           $(this).animate({width: '75%'}, randomtime);
           hillary++;
       }
       
       else if (hillary==1) {
          $(this).animate({width: '50%'}, randomtime);
           hillary++;
       }
       
       else if (hillary==2) {
          $(this).animate({width: '25%'}, randomtime);
           hillary++;
       }
       
       else if (hillary==3) {
          $(this).animate({width: '2%'}, randomtime);
           hillary++;
       }

   });

           var fossil= 0;
   $(".fossil").click(function(){
      var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (fossil==0) {
           $(this).animate({width: '75%'}, randomtime);
           fossil++;
       }
       
       else if (fossil==1) {
          $(this).animate({width: '50%'}, randomtime);
           fossil++;
       }
       
       else if (fossil==2) {
          $(this).animate({width: '25%'}, randomtime);
           fossil++;
       }
       
       else if (fossil==3) {
          $(this).animate({width: '2%'}, randomtime);
           fossil++;
       }

   });

              var grumpycat= 0;
   $(".grumpycat").click(function(){
      var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (grumpycat==0) {
           $(this).animate({width: '75%'}, randomtime);
           grumpycat++;
       }
       
       else if (grumpycat==1) {
          $(this).animate({width: '50%'}, randomtime);
           grumpycat++;
       }
       
       else if (grumpycat==2) {
          $(this).animate({width: '25%'}, randomtime);
           grumpycat++;
       }
       
       else if (grumpycat==3) {
          $(this).animate({width: '2%'}, randomtime);
           grumpycat++;
       }

   });

var jordan= 0;
   $(".jordan").click(function(){
      var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (jordan==0) {
           $(this).animate({width: '75%'}, randomtime);
           jordan++;
       }
       
       else if (jordan==1) {
          $(this).animate({width: '50%'}, randomtime);
           jordan++;
       }
       
       else if (jordan==2) {
          $(this).animate({width: '25%'}, randomtime);
           jordan++;
       }
       
       else if (jordan==3) {
          $(this).animate({width: '2%'}, randomtime);
           jordan++;
       }

   });

   var snow= 0;
   $(".snow").click(function(){
      var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (snow==0) {
           $(this).animate({width: '75%'}, randomtime);
           snow++;
       }
       
       else if (snow==1) {
          $(this).animate({width: '50%'}, randomtime);
           snow++;
       }
       
       else if (snow==2) {
          $(this).animate({width: '25%'}, randomtime);
           snow++;
       }
       
       else if (snow==3) {
          $(this).animate({width: '2%'}, randomtime);
           snow++;
       }

   });

      var doge2= 0;
   $(".doge2").click(function(){
      var randomtime = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
       if (doge2==0) {
           $(this).animate({width: '75%'}, randomtime);
           doge2++;
       }
       
       else if (doge2==1) {
          $(this).animate({width: '50%'}, randomtime);
           doge2++;
       }
       
       else if (doge2==2) {
          $(this).animate({width: '25%'}, randomtime);
           doge2++;
       }
       
       else if (doge2==3) {
          $(this).animate({width: '2%'}, randomtime);
           doge2++;
       }

   });

});