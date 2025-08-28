function getElement(id)
{
   return document.getElementById(id)
}

document.getElementById('cardbox').addEventListener("click", function(e) {
    if (e.target.classList.contains("btn2")) {
        const title = cardbox.parentNode.parentNode.children[0].children[0].children[0].children[1].children[0].innerText
             const number = cardbox.parentNode.parentNode.children[0].children[0].children[0].children[2].children[0].innerText
             

        alert(title+number);
      // Update coin
        const maincoin = getElement("coin");
        let coinValue = Number(maincoin.innerText); // convert string to number
        const totalcoin = coinValue - 20;
        maincoin.innerText = totalcoin; 

    }
});
