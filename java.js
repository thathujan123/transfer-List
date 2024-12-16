const availableList = document.getElementById('available-list');
const selectedList = document.getElementById('selected-list');

function moveItems(source, target) {
  const selectedItems = Array.from(source.querySelectorAll('input:checked')).map(input => input.parentElement);
  selectedItems.forEach(item => {
    item.querySelector('input').checked = false;
    target.appendChild(item);
  });
}

document.getElementById('btn-single-right').addEventListener('click', () => moveItems(availableList, selectedList));
document.getElementById('btn-single-left').addEventListener('click', () => moveItems(selectedList, availableList));

document.getElementById('btn-double-right').addEventListener('click', () => {
  Array.from(availableList.children).forEach(item => selectedList.appendChild(item));
});

document.getElementById('btn-double-left').addEventListener('click', () => {
  Array.from(selectedList.children).forEach(item => availableList.appendChild(item));
});
