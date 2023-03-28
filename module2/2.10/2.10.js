'use strict';
const amountCandidates = parseInt(prompt('Enter a number of candidates: '));
let candidates = [];
for (let i = 0; i < amountCandidates; i++) {
  let candidateName = prompt(`Please, enter a name for candidate ${i+1}: `);
  const candidate = {
    name: candidateName,
    votes: 0,
  };
  candidates.push(candidate);
}

const amountVoters = parseInt(prompt('Enter a number of voters: '));
for (let i = 0; i < amountVoters; i++) {
  const vote = prompt(
      `Voter ${i+1}: Who do you want to vote for? Enter candidate name.`);
  const candi = candidates.find(c => c.name === vote);
  if (candi) {   //if candidate name is found, adds one vote
    candi.votes++;
  }
}

const sortedCandidates = candidates.sort((a, b) => b.votes - a.votes);
const winner = sortedCandidates[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log('Results:');
for (let person of sortedCandidates) {
  console.log(`${person.name}: ${person.votes} votes`);
}