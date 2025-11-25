// frontend/app.js
// Demo: Submit a vote and tally using MidnightVoting placeholder

class MidnightVoting {
    constructor() {
        this.votes = []; // encrypted votes
    }

    // Submit a private vote
    submitVote(voterPubKeyHash, encryptedVote) {
        this.votes.push({ voter: voterPubKeyHash, vote: encryptedVote });
        console.log(`Vote submitted for ${voterPubKeyHash}`);
    }

    // Tally votes privately
    tallyVotes() {
        console.log("Tallying votes privately...");
        return this.votes.length;
    }
}

// Initialize voting
const voting = new MidnightVoting();

// DOM Elements
const submitButton = document.createElement("button");
submitButton.textContent = "Submit Mock Vote";
const tallyButton = document.createElement("button");
tallyButton.textContent = "Tally Votes";
const output = document.createElement("div");

document.body.appendChild(submitButton);
document.body.appendChild(tallyButton);
document.body.appendChild(output);

// Event listeners
submitButton.addEventListener("click", () => {
    const voterHash = `pubKeyHashExample${voting.votes.length + 1}`;
    const encryptedVote = `encryptedVoteData${voting.votes.length + 1}`;
    voting.submitVote(voterHash, encryptedVote);
    output.innerHTML = `Submitted vote ${voting.votes.length} for ${voterHash}`;
});

tallyButton.addEventListener("click", () => {
    const total = voting.tallyVotes();
    output.innerHTML = `Total votes tallied: ${total}`;
});
