document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();

    // Get the values of the title and description input fields
    let titlec = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    console.log(`title=${titlec}, description=${description}`);

    // Create a new card element
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";
    card.style.backgroundColor = "#f1aeb5";
    card.style.color = "rgb(13, 90, 2)";

    // Add content to the card
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">Title: ${titlec}</h5>
            <p class="card-text">Description: ${description}</p>
        </div>
    `;

    // Append the card to the container
    document.getElementById("card-container").appendChild(card);

    // Clear the input fields
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";

    // Store todos in localStorage
    let todos = JSON.parse(localStorage.getItem("Todos")) || [];
    todos.push({ title: titlec, description: description });
    localStorage.setItem("Todos", JSON.stringify(todos));
});

document.getElementById("delete").addEventListener("click", (e) => {
    e.preventDefault();
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    localStorage.removeItem("Todos");
});

// Load todos from localStorage on page load
window.addEventListener("load", () => {
    let todos = JSON.parse(localStorage.getItem("Todos")) || [];
    todos.forEach(todo => {
        let card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";
        card.style.backgroundColor = "#f1aeb5";
        card.style.color = "rgb(13, 90, 2)";

        // Add content to the card
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Title: ${todo.title}</h5>
                <p class="card-text">Description: ${todo.description}</p>
            </div>
        `;

        // Append the card to the container
        document.getElementById("card-container").appendChild(card);
    });
});
