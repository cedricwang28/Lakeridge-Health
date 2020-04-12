$(function(){

    let ifOver70 = 0;
    let ifSmallCell = 0;
    let ifResectable = 0;
    let ifLimited = 0;

    //when answering lung cancer button
    $('.lungCancer').click(function(){
        $('.fourBt').hide();
        $('.over70').show();
    });

    //when answering yes or no on 'if over 70yrs' question
    $('.over70 .yes').click(function(){
        $('.over70').hide();
        $('.smallCellOrNot').show();
        ifOver70 = 1;
    });
    $('.over70 .no').click(function(){
        $('.over70').hide();
        $('.smallCellOrNot').show();
    });

    //when answering answer on 'if small cell' question
    $('.smallCellOrNot .small').click(function(){
        $('.smallCellOrNot').hide();
        $('.limitedOrNot').show();
    });
    $('.smallCellOrNot .nonSmall').click(function(){
        $('.smallCellOrNot').hide();
        $('.resectableOrNot').show();
    });

    //when answering limited on 'limited or extensive' question
    $('.limitedOrNot .limited').click(function(){
        $('.limitedOrNot').hide();
        $('.noTrial').show();
    });
    $('.limitedOrNot .extensive').click(function(){
        $('.limitedOrNot').hide();
        $('.maintenanceOrNot').show();
    });

    //when answering yes or no on 'if maintenance' question
    $('.maintenanceOrNot .yes').click(function(){
        $('.maintenanceOrNot').hide();
        $('.abbvie').show();
    });
    $('.maintenanceOrNot .no').click(function(){
        $('.maintenanceOrNot').hide();
        $('.noTrial').show();
    });

    //when answering 'if resectable' question
    $('.resectableOrNot .yes').click(function(){
        $('.resectableOrNot').hide();
        $('.adjuvantOrNot').show();
    });
    $('.resectableOrNot .no').click(function(){
        $('.maintenanceOrNot').hide();
        $('.123Line').show();
    });

    //when answering 'if adjuvant' question
    $('.adjuvantOrNot .yes').click(function(){
        $('.adjuvantOrNot').hide();
        if(ifOver70){
            $('.cctgAndBasket').show();
        }else{
            $('.cctg').show();
        }
        
    });
    $('.adjuvantOrNot .no').click(function(){
        $('.adjuvantOrNot').hide();
        $('.noTrial').show();
    });

    //when answering 'one two three line' question
    $('.123Line .one').click(function(){
        $('.123Line').hide();
        if(ifOver70){
           $('.rocheAndBasket').show();
        }else{
            $('.roche').show();
        }
        
    });
    $('.123Line .two').click(function(){
        $('.123Line').hide();
        if(ifOver70){
            $('.bmsAndBasket').show();
         }else{
             $('.bms').show();
         }
    });
    $('.123Line .three').click(function(){
        $('.123Line').hide();
        if(ifOver70){
            $('.5cStudy').show();
         }else{
             $('.noTrial').show();
         }
    });

    //when clicking 'start a new test'
    $('.restartTest').click(function(){
        $('.question').hide();
        ifOver70 = 0;
        $('.fourBt').show();
    });

    $('.newTest').click(function(){
        $('.question').hide();
        ifOver70 = 0;
        $('.fourBt').show();
    });
});