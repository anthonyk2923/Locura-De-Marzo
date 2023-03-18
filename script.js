function fetchapi() {
  fetch('https://www.polltab.com/api/poll/Zp3kMKHHQ90s/')
    .then(res => {
      return res.json()
    })
    .then(data => {
      choicelist = (data.data.choices)

      const name0 = choicelist[0].text
      const name1 = choicelist[1].text
      document.getElementById("item0name").innerHTML = name0;
      document.getElementById("item1name").innerHTML = name1;

      const vote0 = choicelist[0].votes
      const vote1 = choicelist[1].votes
      document.getElementById("item0votes").innerHTML = vote0;
      document.getElementById("item1votes").innerHTML = vote1;
      console.log("fetched")

    })
}
setInterval(fetchapi, 5000);



// function fitText(outputSelector) {
//   // max font size in pixels
//   const maxFontSize = 50;
//   // get the DOM output element by its selector
//   let outputDiv = document.getElementById(outputSelector);
//   // get element's width
//   let width = outputDiv.clientWidth;
//   // get content's width
//   let contentWidth = outputDiv.scrollWidth;
//   // get fontSize
//   let fontSize = parseInt(window.getComputedStyle(outputDiv, null).getPropertyValue('font-size'), 10);
//   // if content's width is bigger then elements width - overflow
//   if (contentWidth > width) {
//     fontSize = Math.ceil(fontSize * width / contentWidth, 10);
//     fontSize = fontSize > maxFontSize ? fontSize = maxFontSize : fontSize - 1;
//     outputDiv.style.fontSize = fontSize + 'px';
//   } else {
//     // content is smaller then width... let's resize in 1 px until it fits 
//     while (contentWidth === width && fontSize < maxFontSize) {
//       fontSize = Math.ceil(fontSize) + 1;
//       fontSize = fontSize > maxFontSize ? fontSize = maxFontSize : fontSize;
//       outputDiv.style.fontSize = fontSize + 'px';
//       // update widths
//       width = outputDiv.clientWidth;
//       contentWidth = outputDiv.scrollWidth;
//       if (contentWidth > width) {
//         outputDiv.style.fontSize = fontSize - 1 + 'px';
//       }
//     }
//   }
// }