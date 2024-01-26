const addProduct = () => {
  const button = document.querySelector("button");
  const ul = document.querySelector("ul");
  const input = document.querySelector('input');
  const li = document.createElement('li');
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox";

  li.innerText = input.value;
  ul.appendChild(li);
  li.appendChild(checkbox)
  input.value = "";
};

