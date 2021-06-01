function component() {
  console.log("Hello World!");  
  const element = document.createElement('div');

  element.innerHTML = "Hello webpack";
  return element;
}

document.body.appendChild(component());