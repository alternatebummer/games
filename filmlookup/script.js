document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const resultDiv = document.getElementById("result");
    // Ensure the container keeps elements centered
    const centerContainer = document.createElement("div");
    centerContainer.classList.add("center-container");
    // Move input and result into the centered container
    searchInput.parentNode.insertBefore(centerContainer, searchInput);
    centerContainer.appendChild(searchInput);
    centerContainer.appendChild(resultDiv);
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        if (query === "") {
            resultDiv.innerHTML = "Type a single letter to receive an alphabetized list of all movies beginning with that letter. Continue to type the movie title out to narrow down search results.</p>";
            return;
        }
        const filteredMovies = movies
            .filter(m => m.title.toLowerCase().startsWith(query))
            .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically

        if (filteredMovies.length > 0) {
            resultDiv.innerHTML = filteredMovies.map(movie =>`<b>${movie.title} (${movie.released})</b><br>Review Date: ${movie.reviewDate}<br>Rating: ${movie.rating}`).join("<hr style='border-top: 1px solid #B2BD7E;'>");
        } else {
            resultDiv.innerHTML = "No movies found.";
        }
    });
});
