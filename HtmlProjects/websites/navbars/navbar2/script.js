let sections=document.querySelectorAll('section')
let navlinks=document.querySelectorAll('ul li')

window.addEventListener(
    'scroll',
    ()=>{
        let current='';
        let scrollTop=pageYOffset;
        sections.forEach(
            section=>{
                let sectionTop=section.offsetTop;  
                if(scrollTop>=sectionTop-60){
                    current=section.getAttribute('id');
                }

            }
        );
        navlinks.forEach(
            li=>{
                li.classList.remove('active');
                if(li.classList.contains(current)){
                    li.classList.add('active');
                }

            }
        )

    }
)