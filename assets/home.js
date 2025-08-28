function getElement(id)
{
   return document.getElementById(id)
}

document.getElementById('cardbox').addEventListener("click", function(e) {
    if (e.target.classList.contains("btn2")) {
        const maincoin = getElement("coin");
let coinValue = Number(maincoin.innerText); 

const totalcoin = coinValue - 20;

if (totalcoin< 0) {
    alert("Not enough coins");
    return;
} 

         const title = cardbox.parentNode.parentNode.children[0].children[0].children[0].children[1].children[0].innerText
             const number = cardbox.parentNode.parentNode.children[0].children[0].children[0].children[2].children[0].innerText
             

        alert(title+number);
      
      maincoin.innerText = totalcoin; 

    }
});
