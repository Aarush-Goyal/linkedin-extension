setTimeout(() => {
  let list = document.querySelectorAll("button");
  list.forEach((element) => {
    if (element.getAttribute("aria-label") != null) {
      let reg = /Invite/;
      let elementAriaLabel = element.getAttribute("aria-label").toString();
      let result = reg.exec(elementAriaLabel);
      console.log(result);
      if (result != null) {
        element.click();
      }
    }
  });
}, 10000);
