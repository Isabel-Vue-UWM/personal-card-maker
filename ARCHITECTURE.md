---
layout: default
title: Agent Guidelines
---

## Deployment Model
- Hosted on **GitHub Pages**
- Served as static files
- Automatically deployable from the main branch (or `/docs` folder if preferred)

---

## Core Components

### 1. Presentation Layer (UI)
**Responsible for rendering and layout**

- Built with semantic HTML
- Styled using plain CSS
- Mobile‑first and responsive
- Uses accessible components and friendly typography

Key UI elements: 
- Quote input form
- Quote/Affirmation cards
- Action buttons (save, delete, random, etc.)
- Empty/default states

---

### 2. Application Logic Layer
**Responsible for behavior and interaction**

Implemented in vanilla JavaScript: 
- Handles form input and validation
- Manages state (quotes in memory)
- Connects UI updates to stored data
- Handles events (clicks, submissions, keyboard input)

Core responsibilities: 
- Add a new affirmation
- Render affirmation cards
- Select a random or daily affirmation
- Delete or update stored affirmations

---

### 3. Storage Layer
**Responsible for persistence**

- Uses `window.localStorage`
- Stores data as serialized JSON
- Key-based storage (example: `affirmations_v1`)

Benefits:
- Works offline
- No account needed
- Data never leaves the user’s device

Limitations (accepted):
- Browser‑specific
- Data can be cleared by the user
- Not synced across devices

---

## Data Model

All affirmations are stored as an **array of objects**.

Example structure: 

```json
{
  "id": "uuid-or-timestamp",
  "text": "I am allowed to grow at my own pace.",
  "author": "Me",
  "tags": ["self-care", "growth"],
  "createdAt": "2026-05-05T13:00:00Z"
}