$(document).ready(function(){
    console.log('Jquery thinks youre dumb')
    $("#button").on("click",async function(){
        console.log('and Jquery is right')
        $(".words").slideUp()

        var response= await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
        

        var parsedResponse=await response.json()
     /*   
        var lengthoflist=parsedResponse.data.length
        var randomnumber=Math.floor(Math.random()*lengthoflist)
        */
       console.log(parsedResponse.data[0].quoteText)
       $("#quote-text").text(parsedResponse.data[0].quoteText)
       $("#quote-name").text("- "+parsedResponse.data[0].quoteAuthor)
        
    
        
    
        $(".quote-container").animate({height:"5px"}).delay(200).animate({height:"100%"})
        $(".words").slideDown(1000)

    })
})