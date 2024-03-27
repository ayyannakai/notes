let btn = document.querySelector('.notes')



btn.addEventListener('click',()=>{
    
    let notes  = document.createElement('textarea')
    notes.classList.add('notesContent')
    btn.after(notes)
  
})

