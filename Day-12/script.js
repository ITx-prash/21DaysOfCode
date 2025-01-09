// Example 1:
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("myParagraph").textContent =
      "The paragraph is changed.";
  });

// Example 2:
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    document
      .getElementById("citiesList")
      .firstElementChild.classList.add("highlight");
  });
// Uses classList.add("highlight") to add the CSS class "highlight" to that element
// Can also use classList.toggle("highlight") to add & remove class consecutively

// Example 3:
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";

  coffeeType.style.color = "red";
  coffeeType.style.backgroundColor = "black";
  coffeeType.style.padding = "15px";
});

// Example 4:
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});
document.getElementById("removeLast").addEventListener("click", function () {
  document.getElementById("shoppingList").lastElementChild.remove();
});

// Example 5:
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

// Example 6:
document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("Hola!");
});

// Example 7:
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert(`You selected: ${event.target.textContent}`);
  }
});

// Example 8:
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is : ${feedback}`;
    document.getElementById("feedbackDisplay").style.color = "red";
  });

// Example 9:
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded!";
});

// Example 10:
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    document.getElementById("descriptionText").classList.toggle("highlight");
  });
