# Voting System (JavaScript Map & Set)

A simple voting system built with **JavaScript, HTML, and CSS**.
This project demonstrates how to use **JavaScript Map and Set data structures** to create a poll system and prevent duplicate voting.

Users can:

* Add new voting options
* Vote for an option
* Prevent duplicate votes using `Set`
* View live poll results in the browser

---

## Project Demo

This project runs directly in the browser.

Features include:

* Add poll options dynamically
* Vote using a unique voter ID
* Prevent duplicate voting
* Display results in real time

Example output:

```
Poll Results:
Turkey: 2 votes
Morocco: 1 votes
Spain: 0 votes
```

---

## Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Application logic
* **Map** – Stores poll options
* **Set** – Prevents duplicate votes

---

## Project Structure

```
voting-system/
│
├── index.html   # Main webpage
├── style.css    # Styling for UI
├── script.js    # Voting logic using Map and Set
└── README.md    # Project documentation
```

---

## How the Voting System Works

### 1. Poll Storage

The poll is stored using a JavaScript `Map`.

```
const poll = new Map();
```

Each option is mapped to a **Set of voters**.

Example structure:

```
Turkey  → { traveler1, traveler2 }
Morocco → { traveler3 }
Spain   → { }
```

---

### 2. Adding an Option

The `addOption()` function:

* Prevents empty options
* Prevents duplicate options
* Adds a new option with an empty `Set`

Example:

```
addOption("Turkey")
```

Output:

```
Option "Turkey" added to the poll.
```

---

### 3. Voting

The `vote()` function requires:

```
vote(option, voterId)
```

Example:

```
vote("Turkey", "traveler1")
```

Rules:

* Option must exist
* Each voter can vote only once per option
* Duplicate votes are blocked

---

### 4. Display Results

The `displayResults()` function prints all poll results.

Example output:

```
Poll Results:
Turkey: 2 votes
Morocco: 1 votes
Spain: 0 votes
```

Vote counts are calculated using:

```
voters.size
```

---

## How to Run the Project

1. Clone the repository

```
git clone https://github.com/your-username/voting-system.git
```

2. Open the project folder

3. Open `index.html` in your browser

Or use **VS Code Live Server**.

---

## Learning Goals

This project helps practice:

* JavaScript **Map**
* JavaScript **Set**
* Preventing duplicate data
* DOM interaction
* Basic frontend UI development

---

## Future Improvements

Possible improvements for this project:

* Add vote percentage bars
* Store results using a database
* Convert to a **React application**
* Build a **Node.js API backend**
* Add user authentication

---

## Author

**Hafizur Rahman**
Computer Science & Engineering Student
Aspiring Software Developer

GitHub:
https://github.com/Hafizur-Rahman-SD


---

## License

This project is open-source and available for learning purposes.
