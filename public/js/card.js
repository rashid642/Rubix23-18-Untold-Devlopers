for(let i=1; ; i++){
    let cardID = document.getElementById(`card-${i}`);
    if(cardID == null)
    break;
    $(`#card-${i}`).hover(function(){
        if($(this).hasClass("active")){
            $(`#card-${i} .button`).slideUp(function(){
                $(`#card-${i}`).removeClass("active");
            })
        }
        else{
            $(`#card-${i}`).addClass("active");
            $(`#card-${i} .button`).stop().slideDown();
        }
    })
}