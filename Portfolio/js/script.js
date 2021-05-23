'use sctrict'

// var userLang = navigator.language || navigator.userLanguage; 
let lang = window.navigator.language;
console.log(lang);

var introTextRu = document.querySelector(".intro_txt-ru");
    var introTextPl = document.querySelector(".intro_txt-pl");
    var photoLinkRu = document.querySelector(".photo_link-ru");
    var photoLinkPl = document.querySelector(".photo_link-pl");
    var projectTitleRu = document.getElementsByClassName("project__title-ru");
    var projectTitlePL = document.getElementsByClassName("project__title-pl");
    
    console.log(projectTitlePL);
    console.log(projectTitleRu);

if (lang == "pl"){   

    introTextRu.style.display = "none";
    introTextPl.style.display = "block";
    photoLinkRu.style.display = "none";
    photoLinkPl.style.display = "block";
    for (let i = 0; i < projectTitlePL.length; i++) {
        projectTitleRu[i].style.display = "none";
        projectTitlePL[i].style.display = "block";        
    }
    
}
if (lang == "ru"){
    
    introTextRu.style.display = "block";
    introTextPl.style.display = "none";
    photoLinkRu.style.display = "block";
    photoLinkPl.style.display = "none";
    for (let i = 0; i < projectTitlePL.length; i++) {
        console.log(i);
        projectTitleRu[i].style.display = "block";
        projectTitlePL[i].style.display = "none";        
    }
}