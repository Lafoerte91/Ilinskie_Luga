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

widgets.forEach(widget => {
  widget.addEventListener('click', function(evt) {
    if(evt.target.classList.contains('widget__title')) {
      evt.target.classList.toggle('widget__title--active')
      evt.target.nextElementSibling.classList.toggle('widget__body--hidden')
    }
  })
});

/* клие по кнопке Любая и отключение других чекбоксов*/
const checkBoxAny = document.querySelector('#location-05')
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]')

checkBoxAny.addEventListener('change', function() {
  if(this.checked) {
    topLocationCheckboxes.forEach(item => {
      item.checked = false
    });
  } 
})

topLocationCheckboxes.forEach(item => {
  item.addEventListener('change', function() {
    if(checkBoxAny.checked) {
      checkBoxAny.checked = false
    }
  })
})

/* Показать еще 3 доп опции с чекбоксами */
const showMoreOptions = document.querySelector('.widget__show-hidden')
const hiddenChecknboxes = document.querySelectorAll('.checkbox--hidden')

showMoreOptions.onclick = function() {
  // Если скрыты, показываем
  if(this.dataset.options == 'hidden') {
    hiddenChecknboxes.forEach(function(item) {
      item.style.display = 'block'
    })
    this.dataset.options = 'visible'
    this.innerText = 'Скрыть дополнительные опции'
  // Если видны, скрываем
  } else if(this.dataset.options == 'visible') {
    hiddenChecknboxes.forEach(function(item) {
      item.style.display = 'none'
    })
    this.innerText = 'Показать еще'
    this.dataset.options = 'hidden'
  }
}