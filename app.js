// ===========================
// State Management
// ===========================

// Storage key for localStorage
const STORAGE_KEY = 'affirmations_v1';

// In-memory cache of affirmations
let affirmations = [];

// Initialize app on load
document.addEventListener('DOMContentLoaded', () => {
  loadAffirmations();
  setupEventListeners();
  renderCards();
});

// ===========================
// Load and Save from Storage
// ===========================

// Load affirmations from localStorage
function loadAffirmations() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    affirmations = stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading affirmations:', error);
    affirmations = [];
  }
}

// Save affirmations to localStorage
function saveAffirmations() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(affirmations));
  } catch (error) {
    console.error('Error saving affirmations:', error);
  }
}

// ===========================
// Event Listeners Setup
// ===========================

function setupEventListeners() {
  // Form submission
  const form = document.getElementById('affirmationForm');
  if (form) {
    form.addEventListener('submit', handleAddAffirmation);
  }

  // Action buttons
  document.getElementById('viewAllBtn')?.addEventListener('click', handleViewAll);
  document.getElementById('randomBtn')?.addEventListener('click', handleShowRandom);
  document.getElementById('clearAllBtn')?.addEventListener('click', handleClearAll);

  // Modal buttons
  document.getElementById('confirmBtn')?.addEventListener('click', handleConfirmClear);
  document.getElementById('cancelBtn')?.addEventListener('click', closeConfirmModal);

  // Cards container delegation
  document.getElementById('cardsContainer')?.addEventListener('click', handleCardAction);
}

// ===========================
// Form Handling
// ===========================

function handleAddAffirmation(event) {
  event.preventDefault();

  const textInput = document.getElementById('affirmationText');
  const authorInput = document.getElementById('affirmationAuthor');
  const tagInput = document.getElementById('affirmationTag');

  const text = textInput.value.trim();
  const author = authorInput.value.trim() || 'You';
  const tag = tagInput.value.trim();

  // Validation
  if (!text) {
    alert('Please enter an affirmation');
    return;
  }

  // Create new affirmation object
  const newAffirmation = {
    id: Date.now().toString(),
    text: text,
    author: author,
    tag: tag,
    createdAt: new Date().toISOString()
  };

  // Add to collection and save
  affirmations.push(newAffirmation);
  saveAffirmations();

  // Reset form and show success
  document.getElementById('affirmationForm').reset();
  alert('Affirmation saved! 💛');

  // Render updated cards
  renderCards();
}

// ===========================
// View Actions
// ===========================

function handleViewAll() {
  renderCards();
}

function handleShowRandom() {
  if (affirmations.length === 0) {
    alert('No affirmations yet. Add one to get started!');
    return;
  }

  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const randomAffirmation = affirmations[randomIndex];

  // Display in a modal or update a single card display
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';

  const card = createCardElement(randomAffirmation);
  container.appendChild(card);
}

// ===========================
// Card Actions (Copy, Delete)
// ===========================

function handleCardAction(event) {
  const btn = event.target.closest('.card-btn');
  if (!btn) return;

  const cardId = btn.closest('.card')?.dataset.id;
  if (!cardId) return;

  if (btn.classList.contains('card-btn-copy')) {
    handleCopyCard(cardId);
  } else if (btn.classList.contains('card-btn-delete')) {
    handleDeleteCard(cardId);
  }
}

function handleCopyCard(id) {
  const affirmation = affirmations.find(a => a.id === id);
  if (!affirmation) return;

  const text = `"${affirmation.text}" — ${affirmation.author}`;

  navigator.clipboard.writeText(text).then(() => {
    alert('Copied to clipboard! 📋');
  }).catch(err => {
    console.error('Copy failed:', err);
  });
}

function handleDeleteCard(id) {
  affirmations = affirmations.filter(a => a.id !== id);
  saveAffirmations();
  renderCards();
}

// ===========================
// Clear All with Confirmation
// ===========================

function handleClearAll() {
  openConfirmModal();
}

function openConfirmModal() {
  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('confirmModal');

  overlay?.classList.remove('hidden');
  modal?.classList.remove('hidden');
}

function closeConfirmModal() {
  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('confirmModal');

  overlay?.classList.add('hidden');
  modal?.classList.add('hidden');
}

function handleConfirmClear() {
  affirmations = [];
  saveAffirmations();
  renderCards();
  closeConfirmModal();
  alert('All affirmations cleared.');
}

// ===========================
// Rendering
// ===========================

function renderCards() {
  const container = document.getElementById('cardsContainer');
  if (!container) return;

  container.innerHTML = '';

  if (affirmations.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No affirmations yet. Start by adding one to brighten your day! ✨</p>
      </div>
    `;
    return;
  }

  // Create cards for each affirmation
  affirmations.forEach((affirmation, index) => {
    const card = createCardElement(affirmation, index);
    container.appendChild(card);
  });
}

function createCardElement(affirmation, index = 0) {
  const card = document.createElement('div');
  card.className = `card gradient-${(index % 7) + 1}`;
  card.dataset.id = affirmation.id;

  const tagHTML = affirmation.tag
    ? `<span class="card-tag">${escapeHtml(affirmation.tag)}</span>`
    : '';

  card.innerHTML = `
    <p class="card-text">${escapeHtml(affirmation.text)}</p>
    <div class="card-meta">
      <div>
        <span class="card-author">${escapeHtml(affirmation.author)}</span>
        ${tagHTML}
      </div>
    </div>
    <div class="card-actions">
      <button class="card-btn card-btn-copy" title="Copy">📋 Copy</button>
      <button class="card-btn card-btn-delete" title="Delete">🗑️ Delete</button>
    </div>
  `;

  return card;
}

// ===========================
// Utility Functions
// ===========================

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
