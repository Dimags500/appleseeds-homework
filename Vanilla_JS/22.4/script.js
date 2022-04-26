window.addEventListener("keyup", move);

function move(e) {
  if (e.keyCode == 13) {
    let currActive = document.querySelector("#player1-race .active");

    currActive.nextElementSibling.classList.add("active");
    currActive.classList.remove("active");

    if (currActive.nextElementSibling.classList.contains("finish")) {
      document.querySelector(".text-center").innerHTML = "winner is red";
      window.removeEventListener("keyup", move);
    }
  }

  if (e.keyCode == 32) {
    let currActive = document.querySelector("#player2-race .active");
    currActive.nextElementSibling.classList.add("active");
    currActive.classList.remove("active");

    if (currActive.nextElementSibling.classList.contains("finish")) {
      document.querySelector(".text-center").innerHTML = "winner is yellow";
      window.removeEventListener("keyup", move);
    }
  }
}
