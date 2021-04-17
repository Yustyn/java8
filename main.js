let $nav_li = document.querySelectorAll('.nav>li'),
    $subnav = document.querySelectorAll('.subnav'),
    $subnav_li = document.querySelectorAll('.subnav>li'),
    $overlay = document.querySelector(".overlay"),
    $article = document.querySelectorAll("article"),
    $close = document.querySelector(".close"),
    $arrow = document.querySelectorAll('.arrow'),
    $p = document.querySelectorAll("p"),
    ind = -1,
    index = -1

for(let i = 0; i < $nav_li.length; i++){
    $nav_li[i].addEventListener('click', ()=>{
        $subnav[i].classList.toggle('display')
        $arrow[i].classList.toggle('rotate')
    })
}

for(let i = 0; i < $subnav_li.length; i++){
    $subnav_li[i].addEventListener('mouseover', (event)=>{
        $subnav_li[i].classList.add('hovered')
    })
    $subnav_li[i].addEventListener('mouseout', (event)=>{
        $subnav_li[i].classList.remove('hovered')
    })
    $subnav_li[i].addEventListener('click', (event)=>{
        event.stopPropagation()
        $overlay.classList.add('d-flex')
        if($subnav_li[i].hasAttribute('data-message-id')){
            ind = +$subnav_li[i].getAttribute('data-message-id')
            $article[ind].classList.add('display')
        }
    })
} 

$close.addEventListener('click', (event)=>{
    $article[ind].classList.remove('display')
    $overlay.classList.remove('d-flex')
})

$overlay.addEventListener('click', (event)=>{
    $overlay.classList.remove('d-flex')
    $article[ind].classList.remove('display')
})