document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const resultDiv = document.getElementById("result");
    const modal = document.getElementById("reviewModal");
    const modalContent = document.getElementById("modalContent");
    const closeModal = document.getElementById("closeModal");

    // Delay focusing slightly to ensure the input is fully loaded
    setTimeout(() => {
        searchInput.focus();
    }, 100);

    // Ensure the container keeps elements centered
    const centerContainer = document.createElement("div");
    centerContainer.classList.add("center-container");

    // Move input and result into the centered container
    searchInput.parentNode.insertBefore(centerContainer, searchInput);
    centerContainer.appendChild(searchInput);
    centerContainer.appendChild(resultDiv);

    // Default message when nothing is typed
    resultDiv.innerHTML = `Welcome to the <b>Projektor</b>, a tool designed to streamline recall and review of a mysterious individual's movie watch logbook.<br><br>Feel free to input any part of a movie's title. For example, "ani" will recall entries for <i>The <b>Ani</b>matrix</i> and <i>Ant-Man and the Wasp: Quantum<b>ani</b>a</i>, whereas "anim" refines the search further and omits the latter.<br><br>To see the review for each entry, tap/click on it.`;

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        if (query === "") {
            resultDiv.innerHTML = `Welcome to the <b>Projektor</b>, a tool designed to streamline recall and review of a mysterious individual's movie watch logbook.<br><br>Feel free to input any part of a movie's title. For example, "ani" will recall entries for <i>The <b>Ani</b>matrix</i> and <i>Ant-Man and the Wasp: Quantum<b>ani</b>a</i>, whereas "anim" refines the search further and omits the latter.<br><br>To see the review for each entry, tap/click on it.`;
            return;
        }

        // Search movies: now includes titles that contain the search query anywhere
        const filteredMovies = movies
            .filter(m => m.title.toLowerCase().includes(query))
            .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically

        if (filteredMovies.length > 0) {
            resultDiv.innerHTML = filteredMovies.map(movie =>
                `<div class="movie-entry" data-title="${movie.title}" data-review="${movie.review}">
                    <b>${movie.title} (${movie.released})</b><br>
                    Review Date: ${movie.reviewDate}<br>
                    Rating: ${movie.rating}
                </div>`
            ).join("<hr style='border-top: 1px solid #B2BD7E;'>");
        } else {
            resultDiv.innerHTML = "No movies found.";
        }
    });

    // Event delegation to capture clicks on dynamically generated movie entries
    resultDiv.addEventListener("click", (event) => {
        const target = event.target.closest(".movie-entry");
        if (target) {
            const title = target.dataset.title; // Get movie title
            const review = target.dataset.review; // Get movie review
            openModal(title, review);
        }
    });

    function openModal(title, review) {
        modalContent.innerHTML = `<h2 class="modal-title">${title}</h2><p class="modal-text">${review}</p>`;
        modal.style.display = "flex"; // Ensure modal is only displayed when triggered
    }

    // Close modal when clicking the close button
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
