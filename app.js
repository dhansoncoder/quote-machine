$(document).ready(function(){
    console.log('Jquery thinks youre dumb')
    $("#button").on("click",async function(){
        console.log('and Jquery is right')
        $(".words").slideUp()

        var response= await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/")
        var parsedResponse=await response.json()
        console.log(parsedResponse)
        $(".quote-container").animate({height:"5px"}).delay(200).animate({height:"100%"})
        $(".words").slideDown(1000)

    })
})