# PhantomDAO

**Tagline:** Private votes, verifiable stakes — governance reimagined on Midnight and Cardano.

## Overview
PhantomDAO is a cross-chain, privacy-preserving governance framework. Governance tokens are anchored on Cardano, ensuring verifiable stake, while votes, proposals, and quorum are executed privately on Midnight using zero-knowledge proofs. This allows DAOs, companies, and organizations to conduct confidential, auditable governance without exposing individual votes.

## Vision
- Enable confidential, verifiable governance across chains.
- Serve as a reference DApp for developers building private governance solutions.
- Promote adoption of Midnight’s privacy features and Cardano’s secure staking model.

## Features
- Cross-chain integration: Cardano tokens → Midnight private vote execution.
- Zero-knowledge vote tallying for privacy.
- Open-source, fully auditable protocol mechanics.
- Extensible for DAOs, enterprise governance, or regulatory-compliant voting.

## Repository Structure
- contracts/ – Skeleton smart contracts for Cardano and Midnight.
- frontend/ – Minimal DApp interface scaffolding with interactive demo.
- docs/ – Architecture diagrams, milestones, and reference documentation.
- assets/ – Placeholder for diagrams, icons, or images.

## License
This project is open source under the MIT License.

## Status
Project is in planning and early development stages. This repository serves as the official reference implementation for the PhantomDAO proposal.

---

### How to Run the PhantomDAO Demo (Windows / WSL)

#### Prerequisites
- Windows 10/11 with WSL2 installed (Ubuntu recommended)
- Git installed
- Node.js (v18+) and npm installed
- Web browser (Chrome, Edge, Firefox)

#### Clone the Repo
Open WSL terminal and run:  
```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/PhantomDAO.git
cd PhantomDAO/frontend
```

#### Install a Local Server
```bash
npm install -g http-server
```

#### Run the Demo
```bash
http-server -c-1
```
- Open your browser and go to: http://localhost:8080
- You will see the PhantomDAO interactive demo page.

#### Demo Instructions
- Click "Submit Mock Vote" to simulate a confidential vote.
- Click "Tally Votes" to see the total number of votes submitted.
- Repeat to simulate multiple participants.

#### Notes
- This demo uses placeholder contracts; no real ADA or Midnight transactions occur.
- Demonstrates cross-chain, privacy-preserving governance logic interactively.
