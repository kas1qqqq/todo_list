let list = document.querySelector('#list')
let input = document.querySelector('input')
let arrDisplay = document.querySelector('#array')
let countTask = document.getElementById('countTask')
countTask.innerHTML = 0
let arr = []
input.addEventListener('keypress', function (e) {
  if (e.key !== 'Enter') {
    return
  }
  arrDisplay.style.display = 'block'
  arrDisplay.classList.add('marginTop')
  document.querySelector('.info__wrap').classList.add('marginTop')
  let blocks = document.createElement('div')
  list.appendChild(blocks)
  blocks.classList.add(
    'items',
    'animate__animated',
    'animate__faster',
    'animate__fadeInDown'
  )
  let checkbox = document.createElement('input')
  let backspace = document.createElement('img')
  let label = document.createElement('label')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('id', 'checkbox_id')
  backspace.setAttribute('src', './backspace.svg')
  blocks.appendChild(checkbox)
  blocks.appendChild(label)
  blocks.appendChild(backspace)
  let inputValue = (label.textContent = input.value)
  if (!inputValue) {
    blocks.remove()
    return
  }
  arr.push(inputValue)
  console.log(arr)
  input.value = ''
  arrDisplay.innerHTML = 'Array: [ ' + arr + ' ]'
  countTask.innerHTML = arr.length
  let index = arr.indexOf(inputValue)
  checkbox.onclick = () => {
    if (checkbox.checked == 1) {
      arrDisplay.classList.add(
        'animate__animated',
        'animate__faster',
        'animate__headShake'
      )
      label.classList.add('check')
      arr.splice(index, 1)
      console.log(arr)
      countTask.innerHTML = arr.length
      arrDisplay.innerHTML = 'Array updated: [ ' + arr + ' ]'
    } else {
      arr.push(inputValue)
      arr.sort()
      console.log(arr)
      countTask.innerHTML = arr.length
      arrDisplay.innerHTML = 'Array returned: [ ' + arr + ' ]'
      arrDisplay.classList.remove(
        'animate__animated',
        'animate__faster',
        'animate__headShake'
      )
      label.classList.remove('check')
    }
  }
  backspace.onclick = () => {
    let del = arr.splice(index, 1)
    blocks.classList.add(
      'animate__animated',
      'animate__faster',
      'animate__fadeOutUp'
    )
    setTimeout(() => {
      blocks.remove(index)
    }, 500)
    countTask.innerHTML = arr.length
    arrDisplay.innerHTML = '[ ' + del + ' ]' + ' - removed'
    if (arr == 0) {
      setTimeout(() => {
        arrDisplay.classList.add(
          'animate__animated',
          'animate__fast',
          'animate__wobble'
        )
      }, 800)
      arrDisplay.innerHTML = 'Array is empty'
    }
    console.log(arr)
  }
})

function clearBtn() {
  countTask.innerHTML = arr.length = 0
  list.textContent = ''
  arrDisplay.style.display = 'none'
}
