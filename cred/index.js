

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
    }

let Intersect = (entries) => { 
    entries.forEach(entry => {
     
        if(entry.isIntersecting) {
        
        entry.target.classList.add('isVisible');
        } else {
        entry.target.classList.remove('myAnimation');   
        }

    });
}

   
let observer = new IntersectionObserver(Intersect, options);

document.querySelectorAll('.mobile')
.forEach(mobil => { observer.observe(mobil) });



const fadeOnScroll = () => {


    
    const sections = document.querySelectorAll('.fade-on-scroll');
    const options = {
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');

        } else {
          entry.target.classList.remove('fade-in')
          
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    }  );
  };
  
fadeOnScroll();












const sectionOne = document.querySelector('.dynamicImageOne');
const optionsOne = {
      root: document.querySelector("black-scroll-first-statement-anim fade-on-scroll "),

      threshold: [0.1,0.9]
      
    };
  
const observerOne = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        entry.target.classList.remove('animateOne');
      }else{
        console.log(entry)
        entry.target.classList.add('animateOne');
        }
    } )
} ,optionsOne)

observerOne.observe(sectionOne)



const sectionTwo = document.querySelector('.dynamicImageTwo');
const optionsTwo = {
      root: document.querySelector("black-scroll-second-statement-anim fade-on-scroll "),
      threshold: [0.1,0.9],
      
    };
  
const observerTwo = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
          entry.target.classList.remove('animateTwo');
        }else{
          entry.target.classList.add('animateTwo');
      }
          console.log(entry)
    } )
} ,optionsTwo)

observerOne.observe(sectionTwo)


const sectionThree = document.querySelector('.dynamicImageThree');
const optionsThree = {
      root: document.querySelector("black-scroll-third-statement-anim fade-on-scroll "),
      threshold: 0.5,
      
    };
  
const observerThree= new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
          entry.target.classList.remove('animateThree');
        }else{
          console.log(entry)
          entry.target.classList.add('animateThree');
        }
    } )
} ,optionsThree)

observerOne.observe(sectionThree)



const sectionFour = document.querySelector('.dynamicImageFour');
const optionsFour = {
      root: document.querySelector("black-scroll-fourth-statement-anim fade-on-scroll "),
      threshold: 0,
      
      
    };
  
const observerFour = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
          console.log(entry)
            entry.target.classList.add('animateFour');
        }else{
            console.log(entry)
            entry.target.classList.remove('animateFour');
        }
    } )
} ,optionsFour)

observerOne.observe(sectionFour)



