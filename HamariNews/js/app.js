const activepage = window.location.pathname;
console.log(activepage)
const navlinks = document.querySelectorAll("nav a").forEach(link => {
    if(link.href.includes(`{$activepage}`)){
        console.log(activepage)
    }
})