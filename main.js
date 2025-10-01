let dragSrcEl = null;

function addGame() {
  const name = document.getElementById('game-name').value;
  const link = document.getElementById('game-link').value;
  const thumb = document.getElementById('game-thumb').value || 'https://via.placeholder.com/150/00fff7/000000?text=Game';

  if (!name || !link) return alert('Enter game name and link! skibidi, veiny ahh dih, rizz maxed');

  const grid = document.getElementById('grid-container');

  const item = document.createElement('div');
  item.className = 'grid-item';
  item.draggable = true;
  item.innerHTML = `<img src="${thumb}" alt="${name}"><p>${name}</p>`;
  item.onclick = () => loadGame(link);

  // Drag & Drop
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragover', dragOver);
  item.addEventListener('drop', drop);
  item.addEventListener('dragend', dragEnd);

  grid.appendChild(item);

  document.getElementById('game-name').value = '';
  document.getElementById('game-link').value = '';
  document.getElementById('game-thumb').value = '';
}

function loadGame(link) {
  document.getElementById('game-frame').src = link;
}

// Drag & Drop functions
function dragStart(e) { dragSrcEl = this; e.dataTransfer.effectAllowed = 'move'; }
function dragOver(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }
function drop(e) {
  e.stopPropagation();
  if (dragSrcEl !== this) {
    const parent = this.parentNode;
    parent.insertBefore(dragSrcEl, this.nextSibling);
  }
}
function dragEnd() { dragSrcEl = null; }
