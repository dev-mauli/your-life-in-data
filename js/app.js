// Categories with emotional names and stats
const CATEGORIES = [
  {
    id: 'body',
    name: 'Your Heart & Body',
    emoji: '❤️',
    stats: [
      { id: 'heartbeats', label: 'Heartbeats', calc: (d) => Math.round(d.minutes * 72) },
      { id: 'breaths', label: 'Breaths taken', calc: (d) => Math.round(d.minutes * 14) },
      { id: 'blinks', label: 'Blinks', calc: (d) => Math.round(d.awakeMinutes * 17) },
      { id: 'hoursSlept', label: 'Hours slept', calc: (d) => Math.round(d.days * 7.5) }
    ]
  },
  {
    id: 'time',
    name: 'The Gift of Time',
    emoji: '⏳',
    stats: [
      { id: 'daysLived', label: 'Days lived', calc: (d) => Math.round(d.days) },
      { id: 'hoursLived', label: 'Hours lived', calc: (d) => Math.round(d.days * 24) },
      { id: 'minutesLived', label: 'Minutes lived', calc: (d) => Math.round(d.minutes) },
      { id: 'birthdays', label: 'Birthdays celebrated', calc: (d) => Math.floor(d.years) }
    ]
  },
  {
    id: 'nature',
    name: "The Sky You've Seen",
    emoji: '🌅',
    stats: [
      { id: 'sunrises', label: 'Sunrises witnessed', calc: (d) => Math.round(d.days) },
      { id: 'sunsets', label: 'Sunsets witnessed', calc: (d) => Math.round(d.days) },
      { id: 'fullMoons', label: 'Full moons seen', calc: (d) => Math.round(d.days / 29.5) },
      { id: 'rainbows', label: 'Rainbows (est.)', calc: (d) => Math.round(d.years * 8) },
      { id: 'rainyDays', label: 'Rainy days experienced', calc: (d) => Math.round(d.years * 100) }
    ]
  },
  {
    id: 'rituals',
    name: 'Small Daily Blessings',
    emoji: '☕',
    stats: [
      { id: 'showers', label: 'Showers taken', calc: (d) => Math.round(d.days * 0.9) },
      { id: 'coffee', label: 'Cups of coffee', calc: (d) => Math.round(d.days * 2) },
      { id: 'water', label: 'Gallons of water drunk', calc: (d) => Math.round(d.days * 0.5) },
      { id: 'teethBrush', label: 'Times teeth brushed', calc: (d) => Math.round(d.days * 2) }
    ]
  },
  {
    id: 'nourishment',
    name: 'What Fed You',
    emoji: '🍽️',
    stats: [
      { id: 'meals', label: 'Meals eaten', calc: (d) => Math.round(d.days * 3) },
      { id: 'pizzas', label: 'Pizzas (est.)', calc: (d) => Math.round(d.years * 26) },
      { id: 'mealsShared', label: 'Meals shared with others', calc: (d) => Math.round(d.days * 1.5) }
    ]
  },
  {
    id: 'movement',
    name: 'How You Moved Through Life',
    emoji: '👣',
    stats: [
      { id: 'steps', label: 'Steps taken', calc: (d) => Math.round(d.days * 6000) },
      { id: 'distanceWalked', label: 'Miles walked', calc: (d) => Math.round(d.days * 6000 * 2.5 / 5280) },
      { id: 'marathons', label: 'Marathons (steps equiv.)', calc: (d) => Math.round((d.days * 6000) / 55500) },
      { id: 'aroundEarth', label: 'Times around Earth', calc: (d) => ((d.days * 6000 * 2.5 / 5280) / 24901).toFixed(2) }
    ]
  },
  {
    id: 'stories',
    name: 'Stories That Shaped You',
    emoji: '📖',
    stats: [
      { id: 'books', label: 'Books read (est.)', calc: (d) => Math.round(d.years * 12) },
      { id: 'movies', label: 'Movies watched', calc: (d) => Math.round(d.years * 50) },
      { id: 'songs', label: 'Songs listened to', calc: (d) => Math.round(d.days * 40) }
    ]
  },
  {
    id: 'connection',
    name: 'Love & Connection',
    emoji: '💕',
    stats: [
      { id: 'hugs', label: 'Hugs given & received', calc: (d) => Math.round(d.days * 4) },
      { id: 'laughs', label: 'Times you laughed', calc: (d) => Math.round(d.days * 15) },
      { id: 'loveYouSaid', label: '"I love you" said (est.)', calc: (d) => Math.round(d.days * 3) },
      { id: 'thankYouSaid', label: '"Thank you" said', calc: (d) => Math.round(d.days * 8) },
      { id: 'smilesGiven', label: 'Smiles given', calc: (d) => Math.round(d.days * 20) }
    ]
  },
  {
    id: 'growth',
    name: 'The Marks of Life',
    emoji: '🌱',
    stats: [
      { id: 'haircuts', label: 'Haircuts', calc: (d) => Math.round(d.years * 6) },
      { id: 'candlesBlown', label: 'Birthday candles blown', calc: (d) => Math.round(d.years * 8) },
      { id: 'wishesMade', label: 'Wishes made (est.)', calc: (d) => Math.round(d.years * 12) }
    ]
  },
  {
    id: 'resilience',
    name: "What You've Survived",
    emoji: '🌊',
    stats: [
      { id: 'tears', label: 'Moments of tears (happy & sad)', calc: (d) => Math.round(d.years * 50) },
      { id: 'daysShowedUp', label: 'Days you showed up', calc: (d) => Math.round(d.days) },
      { id: 'tomorrowsGiven', label: "Tomorrows you've been given", calc: (d) => Math.round(d.days) }
    ]
  },
  {
    id: 'legacy',
    name: "What You've Given",
    emoji: '✨',
    stats: [
      { id: 'words', label: 'Words spoken', calc: (d) => Math.round(d.days * 16000) },
      { id: 'emails', label: 'Emails sent', calc: (d) => Math.round(d.days * 15) },
      { id: 'kindWords', label: 'Kind words (est.)', calc: (d) => Math.round(d.days * 100) }
    ]
  },
  {
    id: 'wonder',
    name: 'Moments of Wonder',
    emoji: '🌟',
    stats: [
      { id: 'yawns', label: 'Yawns', calc: (d) => Math.round(d.days * 5) },
      { id: 'sneezes', label: 'Sneezes', calc: (d) => Math.round(d.days) },
      { id: 'songsThatMoved', label: 'Songs that moved you', calc: (d) => Math.round(d.years * 24) },
      { id: 'momentsForgotten', label: 'Moments already forgotten', calc: (d) => Math.round(d.days * 100) }
    ]
  }
];

function formatNumber(num) {
  const n = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(n)) return num;
  if (n >= 1e12) return (n / 1e12).toFixed(2) + 'T';
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(2) + 'K';
  return Math.round(n).toLocaleString();
}

function computeTimeData(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);
  if (birth > now) return null;
  const diffMs = now - birth;
  return {
    ms: diffMs,
    minutes: diffMs / (1000 * 60),
    days: diffMs / (1000 * 60 * 60 * 24),
    years: (diffMs / (1000 * 60 * 60 * 24)) / 365.25,
    awakeMinutes: (diffMs / (1000 * 60 * 60 * 24)) * (16 * 60)
  };
}

function buildCategoryList() {
  const list = document.getElementById('category-list');
  list.innerHTML = CATEGORIES.map(cat => {
    const statIds = cat.stats.map(s => s.id).join(',');
    return `
      <div class="category-block" data-category-id="${cat.id}">
        <div class="category-header" data-stat-ids="${statIds}">
          <span class="category-emoji">${cat.emoji}</span>
          <span>${cat.name}</span>
          <span class="category-count">${cat.stats.length} items</span>
        </div>
        <div class="stats-grid">
          ${cat.stats.map((stat, i) => `
            <label>
              <input type="checkbox" name="stat" value="${stat.id}" ${i === 0 && ['body','time','connection'].includes(cat.id) ? 'checked' : ''}>
              ${stat.label}
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function getSelectedStats() {
  return [...document.querySelectorAll('input[name="stat"]:checked')].map(cb => cb.value);
}

function renderReceipt(timeData, selectedIds, name, location) {
  let itemsHtml = '';
  let hasAny = false;

  CATEGORIES.forEach(cat => {
    const selectedInCat = cat.stats.filter(s => selectedIds.includes(s.id));
    if (selectedInCat.length === 0) return;

    hasAny = true;
    itemsHtml += `
      <div class="receipt-category">
        <div class="receipt-category-title">${cat.emoji} ${cat.name.toUpperCase()}</div>
        ${selectedInCat.map(stat => {
          const val = stat.calc(timeData);
          const displayVal = typeof val === 'number' ? formatNumber(val) : val;
          return `
            <div class="receipt-item">
              <span class="receipt-label">${stat.label}</span>
              <span class="receipt-dots"></span>
              <span class="receipt-value">${displayVal}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  });

  if (!hasAny) {
    itemsHtml = `
      <div class="receipt-item">
        <span class="receipt-label">Select at least one stat above</span>
        <span class="receipt-dots"></span>
        <span class="receipt-value">—</span>
      </div>
    `;
  }

  document.getElementById('receipt-items').innerHTML = itemsHtml;
  document.getElementById('receipt-date').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const nameEl = document.getElementById('receipt-name');
  if (name && name.trim()) {
    nameEl.textContent = 'FOR: ' + name.trim().toUpperCase();
    nameEl.style.display = 'block';
  } else {
    nameEl.style.display = 'none';
  }

  if (location && location.trim()) {
    document.getElementById('receipt-subtitle').textContent = location.trim().toUpperCase();
  } else {
    document.getElementById('receipt-subtitle').textContent = 'YOUR STATS SO FAR';
  }
}

// Initialize
buildCategoryList();

// Click category header to toggle all stats in that category
document.getElementById('category-list').addEventListener('click', (e) => {
  const header = e.target.closest('.category-header');
  if (!header) return;
  const statIds = header.dataset.statIds.split(',');
  const checkboxes = statIds.map(id => document.querySelector(`input[name="stat"][value="${id}"]`)).filter(Boolean);
  const allChecked = checkboxes.every(cb => cb.checked);
  checkboxes.forEach(cb => cb.checked = !allChecked);
});

document.getElementById('select-all').addEventListener('click', () => {
  document.querySelectorAll('input[name="stat"]').forEach(cb => cb.checked = true);
});

document.getElementById('select-none').addEventListener('click', () => {
  document.querySelectorAll('input[name="stat"]').forEach(cb => cb.checked = false);
});

document.getElementById('life-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const birthdate = document.getElementById('birthdate').value;
  const location = document.getElementById('location').value;
  const errorEl = document.getElementById('error-message');

  const timeData = computeTimeData(birthdate);

  if (!timeData) {
    errorEl.classList.add('visible');
    return;
  }

  errorEl.classList.remove('visible');
  renderReceipt(timeData, getSelectedStats(), name, location);
  document.getElementById('receipt-wrapper').classList.add('visible');
  document.getElementById('receipt-wrapper').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('download-btn').addEventListener('click', () => {
  const receipt = document.getElementById('receipt');
  const name = document.getElementById('name').value?.trim();
  html2canvas(receipt, {
    backgroundColor: '#faf8f5',
    scale: 2,
    useCORS: true
  }).then(canvas => {
    const link = document.createElement('a');
    const slug = name ? name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') : 'my';
    link.download = `${slug}-life-receipt.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});

// Set max date to today
document.getElementById('birthdate').max = new Date().toISOString().split('T')[0];
