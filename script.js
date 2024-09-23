// Sample thoughts array to simulate data storage
let thoughts = [];

// Function to submit a thought
function submitThought() {
    const thoughtInput = document.getElementById('thought-input').value;
    
    if(thoughtInput.trim() === '') {
        alert("Please enter a thought before submitting.");
        return;
    }

    const newThought = {
        id: thoughts.length + 1,
        text: thoughtInput,
        likes: 0,
        dislikes: 0,
        comments: []
    };

    thoughts.push(newThought);
    document.getElementById('thought-input').value = '';

    displayThoughts();
}

// Function to display all thoughts
function displayThoughts() {
    const thoughtsContainer = document.getElementById('thoughts-container');
    thoughtsContainer.innerHTML = '';

    thoughts.forEach(thought => {
        const thoughtDiv = document.createElement('div');
        thoughtDiv.classList.add('thought');
        thoughtDiv.innerHTML = `
            <p>${thought.text}</p>
            <div class="reactions">
                <button onclick="likeThought(${thought.id})">Like (${thought.likes})</button>
                <button onclick="dislikeThought(${thought.id})">Dislike (${thought.dislikes})</button>
            </div>
            <div class="comments">
                <input type="text" placeholder="Add a comment" id="comment-input-${thought.id}">
                <button onclick="addComment(${thought.id})">Comment</button>
                <ul id="comments-list-${thought.id}">
                    ${thought.comments.map(comment => `<li>${comment}</li>`).join('')}
                </ul>
            </div>
        `;
        thoughtsContainer.appendChild(thoughtDiv);
    });
}

// Function to like a thought
function likeThought(id) {
    const thought = thoughts.find(t => t.id === id);
    thought.likes++;
    displayThoughts();
}

// Function to dislike a thought
function dislikeThought(id) {
    const thought = thoughts.find(t => t.id === id);
    thought.dislikes++;
    displayThoughts();
}

// Function to add a comment
function addComment(id) {
    const commentInput = document.getElementById(`comment-input-${id}`).value;

    if(commentInput.trim() === '') {
        alert("Please enter a comment.");
        return;
    }

    const thought = thoughts.find(t => t.id === id);
    thought.comments.push(commentInput);
    displayThoughts();
}
