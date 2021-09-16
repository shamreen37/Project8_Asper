/*===================*/
/*OLOR PICKER JS*/
clr_changerp.addEventListener('click', function() {
    document.getElementById("primary").click();
});
clr_changers.addEventListener('click', function() {
    document.getElementById("secondary").click();
});
/*==========================*/



function fetch() {
    var primary_value = document.getElementById("primary").value;
    document.querySelector('#clr_changerp').style.background = primary_value;
    document.getElementById("hex").innerText = primary_value;
    document.querySelector('#buy-btn').style.background = primary_value;
    document.querySelector('#start_btn').style.background = primary_value;
    document.querySelector('#ready-txt').style.color = primary_value;
    document.querySelector('#formSignUptxt').style.color = primary_value;
    document.querySelector('#submit_btn').style.background = primary_value;
}

function fetch2() {
    var secondary_value = document.getElementById("secondary").value;
    document.querySelector('#clr_changers').style.background = secondary_value;
    document.getElementById("hex2").innerText = secondary_value;
    document.querySelector('header').style.background = secondary_value;
    document.querySelector('#today-txt').style.color = secondary_value;
    marketing.style.color = secondary_value;
    for (var i = 0; i < doc.length; i++) {
        doc[i].style.background = "#f6f3fd";
        doc[i].style.color = secondary_value;
    }

    for (var j = 0; j < head.length; j++) {
        head[j].style.color = secondary_value;
    }
}


/*=====================*/
var marketing = document.querySelector('#marketing-txt');
var doc = document.getElementsByClassName('doc-icon-div');
var head = document.getElementsByClassName('text-heading');
//DEFAULT
delt_theme.addEventListener('click', function() {
    document.getElementById("primary").value = "#0061f2";
    document.querySelector('#clr_changerp').style.background = "#0061f2";
    document.getElementById("hex").innerText = "#0061f2";
    document.getElementById("secondary").value = "#6900c7";
    document.querySelector('#clr_changers').style.background = "#6900c7";
    document.getElementById("hex2").innerText = "#8039da";


    for (var i = 0; i < doc.length; i++) {
        doc[i].style.background = "#E4DDF7";
        doc[i].style.color = "#0061f2";
    }

    for (var j = 0; j < head.length; j++) {
        head[j].style.color = "#0061f2";
    }
    document.querySelector('header').style.background = "#6900c7";
    document.querySelector('#buy-btn').style.background = "#0061f2";
    document.querySelector('#formSignUptxt').style.color = "#0061f2";
    document.querySelector('#submit_btn').style.background = "#0061f2";
    marketing.style.background = "#E4DDF7";
    marketing.style.color = "#0061f2";
    document.querySelector('#ready-txt').style.color = "#0061f2";
    document.querySelector('#start_btn').style.background = "#0061f2";
    document.querySelector('#ready-txt').style.color = "#0061f2";
    document.querySelector('#today-txt').style.color = "#0061f2";
});

//FLAT

flat_theme.addEventListener('click', function() {
    document.getElementById("primary").value = "#1da1f5";
    document.getElementById("hex").innerText = "#1da1f5";
    document.querySelector('#clr_changerp').style.background = "#1da1f5";
    document.getElementById("secondary").value = "#8039da";
    document.querySelector('#clr_changers').style.background = "#8039da";
    document.getElementById("hex2").innerText = "#8039da";

    for (var i = 0; i < doc.length; i++) {
        doc[i].style.background = "#E4DDF7";
        doc[i].style.color = "#8039DA";
    }
    for (var j = 0; j < head.length; j++) {
        head[j].style.color = "#8039da";
    }
    document.querySelector('header').style.background = "#8039DA";
    document.querySelector('#buy-btn').style.background = "#8039DA";
    document.querySelector('#formSignUptxt').style.color = "#8039DA";
    document.querySelector('#submit_btn').style.background = "#8039DA";
    marketing.style.background = "#F3EAE9";
    marketing.style.color = "#8039DA";
    document.querySelector('#start_btn').style.background = "#8039DA";
    document.querySelector('#ready-txt').style.color = "#8039DA";
    document.querySelector('#today-txt').style.color = "#8039DA";
})

//SUNSET

sunset_theme.addEventListener('click', function() {
    document.getElementById("primary").value = "#f53b57";
    document.getElementById("hex").innerText = "#f53b57";
    document.querySelector('#clr_changerp').style.background = "#f53b57";
    document.getElementById("secondary").value = "#ff793f";
    document.querySelector('#clr_changers').style.background = "#ff793f";
    document.getElementById("hex2").innerText = "#ff793f";


    for (var i = 0; i < doc.length; i++) {
        doc[i].style.background = "#F3EAE9";
        doc[i].style.color = "#fb5d4b";
    }
    for (var j = 0; j < head.length; j++) {
        head[j].style.color = "#fb5d4b";
    }
    document.querySelector('header').style.background = "#ff793f";
    document.querySelector('#buy-btn').style.background = "#FB5D4B";
    document.querySelector('#formSignUptxt').style.color = "#FB5D4B";
    document.querySelector('#submit_btn').style.background = "#FB5D4B";
    marketing.style.background = "#F3EAE9";
    marketing.style.color = "#FB5D4B";
    document.querySelector('#start_btn').style.background = "#FB5D4B";
    document.querySelector('#ready-txt').style.color = "#FB5D4B";
    document.querySelector('#today-txt').style.color = "#FB5D4B";


})

//SUBTLE

subtle_theme.addEventListener('click', function() {
        document.getElementById("primary").value = "#6eabc2";
        document.getElementById("hex").innerText = "#6eabc2";
        document.querySelector('#clr_changerp').style.background = "#6eabc2";
        document.getElementById("secondary").value = "#506c6a";
        document.querySelector('#clr_changers').style.background = "#506c6a";
        document.getElementById("hex2").innerText = "#506c6a";


        for (var i = 0; i < doc.length; i++) {
            doc[i].style.background = "#e2e8ed";
            doc[i].style.color = "#506c6a";
        }
        for (var j = 0; j < head.length; j++) {
            head[j].style.color = "#506c6a";
        }
        document.querySelector('header').style.background = "#506C6A";
        document.querySelector('#buy-btn').style.background = "#506C6A";
        document.querySelector('#formSignUptxt').style.color = "#506C6A";
        document.querySelector('#submit_btn').style.background = "#506C6A";
        marketing.style.background = "#E2E8ED";
        marketing.style.color = "#506C6A";
        document.querySelector('#start_btn').style.background = "#506C6A";
        document.querySelector('#ready-txt').style.color = "#506C6A";
        document.querySelector('#today-txt').style.color = "#506C6A";
    })
    ////////////////////////////////////////////////////////////////////////
    //SEAFOAM

seafoam_theme.addEventListener('click', function() {
    document.getElementById("primary").value = "#06794f";
    document.getElementById("hex").innerText = "#06794f";
    document.querySelector('#clr_changerp').style.background = "#06794f";
    document.getElementById("secondary").value = "#0fa28b";
    document.querySelector('#clr_changers').style.background = "#0fa28b";
    document.getElementById("hex2").innerText = "#0fa28b";

    for (var i = 0; i < doc.length; i++) {
        doc[i].style.background = "#dbeef1";
        doc[i].style.color = "#06794f";
    }
    for (var j = 0; j < head.length; j++) {
        head[j].style.color = "#06794f";
    }
    document.querySelector('header').style.background = "#0FA28B";
    document.querySelector('#buy-btn').style.background = "#06794F";
    document.querySelector('#formSignUptxt').style.color = "#08805A";
    document.querySelector('#submit_btn').style.background = "#08805A";
    marketing.style.background = "#DBEEF1";
    marketing.style.color = "#08805A";
    document.querySelector('#start_btn').style.background = "#08805A";
    document.querySelector('#ready-txt').style.color = "#08805A";
    document.querySelector('#today-txt').style.color = "#08805A";
})