const { hash } = window.location;

const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector("#message-container").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("#message-show h1").innerText = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#message-container").classList.add("hide");
  document.querySelector("#share-container").classList.remove("hide");

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);
  const linkInput = document.querySelector("#link-input");

  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
