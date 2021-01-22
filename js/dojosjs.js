console.log("Go Chuck !");
let chuckok = document.querySelector("div");
chuckok.addEventListener("mouseover", () =>chuckok.style.borderRadius = 0);
chuckok.addEventListener("mouseout", () => chuckok.style.borderRadius = "50%");

let coll = document.querySelectorAll("header");
let i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.visibility === "hidden" || content.style.visibility === "" )
         {
            content.style.visibility = "visible"; 
            content.style.height = "auto";
        }  else {
            content.style.visibility = "hidden";
            content.style.height = "0px"
        }

    });
}

class Dojo{
    constructor(principal,pied){
        this.principal = principal;
        this.pied = pied
    }
    headernav = () => {
        const from = document.createElement("nav");
        return from;
    }
    footernav = () => {
        const petit = document.createElement("nav");
        return petit;
    }
}

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
    console.log(xhr.readyState)
    if(xhr.readyState === 4 && xhr.status === 200){
        const datas = JSON.parse(xhr.response);
        for (const dojo of datas) {
            const from = new Dojo(dojo.principal, dojo.pied);
            const headerhtml = from.headernav();
            const footerhtml = from.footernav();
            const headerElt = document.querySelector("header");
            const footerElt = document.querySelector("footer");
            headerElt.appendChild(headerhtml);
            footerElt.appendChild(footerhtml);
        }
    }
})

xhr.open("GET", "./data/menu.json", true);
xhr.send();