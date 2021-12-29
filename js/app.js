const photo = document.querySelector('.photo')
const skills = document.querySelector('.skills')
console.log(skills)

photo.addEventListener('mouseover', (event)=>{
    photo.classList.add('active-photo')
})
photo.addEventListener('mouseout', (event)=>{
    photo.classList.remove('active-photo')
})

skills.addEventListener('mouseover', (event)=>{
    skills.classList.add('active-skills')
})
skills.addEventListener('mouseout', (event)=>{
    skills.classList.remove('active-skills')
})

