var tagsEl = document.getElementById('tags');
var textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', (e) => {
   createTags(e.target.value)
})

function createTags(input) {

   let tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

   tagsEl.innerHTML = ''

   tags.forEach(tag => {
      const tagEl = document.createElement('span')
      tagEl.classList.add('tag')
      tagEl.innerHTML = tag
      tagsEl.appendChild(tagEl)
   })


}


 