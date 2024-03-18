// Фильтр на мобильных устройствах
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper')
const menuIcon = document.querySelector('.menu-icon')
const sidebar = document.querySelector('.sidebar')

sidebarToggleBtn.onclick = function() {
  menuIcon.classList.toggle('menu-icon-active')
  sidebar.classList.toggle('sidebar--mobile-active')
}

// Показать еще 3 карточки
const btnShowMoreCards = document.querySelector('.btn-more')
btnShowMoreCards.addEventListener('click', function() {
  const hiddenCards = document.querySelectorAll('.card-link--hidden')
  hiddenCards.forEach(item => item.classList.remove('card-link--hidden'))
})

// Показать/скрыть контент внутри виджетов
const widgets = document.querySelectorAll('.widget')