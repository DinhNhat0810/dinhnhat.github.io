function app(){
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const openSearch = $('.search-bar')
    const searchBtn = $('.nav__middle-searchBox')
    const searchIcon =  $('.search-icon')
    const menu = $('.nav__primary')
    const languages = $('.language-switcher__dropdown')
    const languageSwitcher =  $('.language-switcher')

    var barcaApi = 'https://61cdc3b77067f600179c5c2c.mockapi.io/fcbarca/api/barca'

    function getData(callback) {
        fetch(barcaApi)
            .then(function(response) {
                return response.json()
            })
            .then(callback)
    }

    

    //Render allsite
    function renderSites(data) {
        const siteList = $('.allsite-panel__list')
        const sites = data[0].allsite
        var htmls = sites.map((site) => {
            return `
                <li class="allsite-panel__item">
                    <a href="" class="allsite-panel__item-link">
                        <div class="allsite-panel__item-img">
                            <div class="allsite-panel__img-square"></div>
                        </div>
                        <div class="allsite-panel__item-content">
                            <p class="allsite-panel__content-heading">${site.name}</p>
                            <p class="allsite-panel__content-des">${site.des}</p>
                        </div>
                    </a>
                </li>
            `
        })

        siteList.innerHTML = htmls.join('')
    }

    //Render newspaer
    function renderNewspaper(data) {
        const newspaperList = $('.newspaper__list')
        const newspapers = data[1].newspaper
        var htmls = newspapers.map(item => {
            return `
                <li class="newspaper__item">
                    <div class="newspaper__img">
                        <img src="${item.src}" alt="" class="newspaper__item-img">
                    </div>
                    <div class="newspaper__content">
                        <div class="newspaper__content-text">
                            <div class="newspaper__content-text-title">${item.title}</div>
                            <div class="newspaper__content-text-des">${item.des}</div>
                        </div>
                        <div class="newspaper__content-meta">
                            <div class="newspaper__content-meta-left">
                                <span>First Team</span>
                            </div>
                            <div class="newspaper__content-meta-time">
                                <svg class="thumbnail__time-icon icon" viewBox="0 0 88 88"><path d="M44 12.74a3.47 3.47 0 00-3.47 3.47V44a3.48 3.48 0 001.73 3l22.07 12.74a3.47 3.47 0 103.48-6L47.47 42V16.21A3.47 3.47 0 0044 12.74zM44 7A37.05 37.05 0 117 44 37 37 0 0144 7zm0-7a44 44 0 1044 44A44.05 44.05 0 0044 0z" fill-rule="evenodd"></path></svg>
                                ${item.time}
                            </div>
                    </div>
                    </div>
                </li>
            `
        })

        newspaperList.innerHTML = htmls.join('')
    }

    //Render barca newspaper more
    function renderNewspaperMore(data) {
        const newspaperList = $('.more-barca .newspaper__list')
        const newspapers = data[2].moreBarca
        var htmls = newspapers.map(item => {
            return `
                <li class="newspaper__item">
                    <div class="newspaper__img">
                        <img src="${item.src}" alt="" class="newspaper__item-img">
                    </div>
                    <div class="newspaper__content">
                        <div class="newspaper__content-text">
                            <div class="newspaper__content-text-title">${item.title}</div>
                            <div class="newspaper__content-text-des">${item.des}</div>
                        </div>
                        <div class="newspaper__content-meta">
                            <div class="newspaper__content-meta-left">
                                <span>${item.type}</span>
                            </div>
                            <div class="newspaper__content-meta-time">
                                <svg class="thumbnail__time-icon icon" viewBox="0 0 88 88"><path d="M44 12.74a3.47 3.47 0 00-3.47 3.47V44a3.48 3.48 0 001.73 3l22.07 12.74a3.47 3.47 0 103.48-6L47.47 42V16.21A3.47 3.47 0 0044 12.74zM44 7A37.05 37.05 0 117 44 37 37 0 0144 7zm0-7a44 44 0 1044 44A44.05 44.05 0 0044 0z" fill-rule="evenodd"></path></svg>
                                25 Dec 21
                            </div>
                    </div>
                    </div>
                </li>
            `
        })

        newspaperList.innerHTML = htmls.join('')
        
    }






    // Open search bar
    function searchBtnToggle(){
        
        searchBtn.addEventListener('click', function(){
            if (searchIcon.classList.contains('bx-search')) {
                searchIcon.classList.remove('bx-search')
                searchIcon.classList.add('bx-x')
                openSearch.classList.add('search-bar--open')
                 
            } else {
                searchIcon.classList.remove('bx-x')
                searchIcon.classList.add('bx-search')
                openSearch.classList.remove('search-bar--open')
            }
        
        })
    }

    //Open user registers
    function openUserRegister() {
        const open = $('.user-options__btn')
        const userOptions = $('.user-options__buttons-wrapper')
        const close = $('.user-options__mobile-close')

        open.addEventListener('click', function() {
            userOptions.style.transform = 'translateX(0)'
        })

        close.addEventListener('click', function() {
            userOptions.style.transform = 'translateX(100%)'
        })
    }

    //Open mobile menu
    function openMobileMenu() {
        const menuBtn = $('.mobile-menu__icon')

        menuBtn.addEventListener('click', function() {
            menu.style.transform = 'translateX(0)'
        })
    }

    //Close mobile menu
    function closeMobileMenu() {
        const closeBtn = $('.mobile-close-btn')
        closeBtn.addEventListener('click', function() {
            menu.style.transform = 'translateX(-110%)'
        })
    }

    //Nav active when click
    function navItemActive() {
        const items = $$('.nav__middle > .nav__middle-item')

        items.forEach(function(item) {
            
            item.addEventListener('click' , function() {
                $('.nav__middle-item.nav__middle-item--active').classList.remove('nav__middle-item--active')
                
                item.classList.add('nav__middle-item--active')
            })
        })

    }
    
    //Open languages switcher on mobile
    function openLanguageSwitch() {
        languageSwitcher.onclick = function() {
            languages.style.opacity = '1'
            languages.style.webkitTransform = 'translateY(0)'
            languages.style.transform = 'translateY(0)'
        }
    }
    
    //Close languages switcher on mobile
    function closeLanguageSwitch() {
        const close =  $('.language-switcher__mobile-close')

        close.ondblclick = function() {
            languages.style.opacity = '0'
            languages.style.webkitTransform = 'translateY(-110%)'
            languages.style.transform = 'translateY(-110%)'
           
        }
    }

    //Close dropdown menu
    function closeDropdownMenu() {
        const btns = $$('.nav__middle-dropdown-close')
        const menu = $$('.nav__middle-dropdown')
        
        btns.forEach((btn,index) => {

            btn.addEventListener('click' , function() {
                menu.forEach(item => {
                    if (item.classList.contains('close-menu')) {
                        item.classList.remove('close-menu')
                    }
                })
        
                if (btn.classList.contains('close-menu')) {
                    item.classList.remove('close-menu')
                } else {

                    menu[index].classList.add('close-menu')
                }   
            })
            
        })
        
       
    }


    //Close quick nav when scroll
    function scrollQuickNav() {
        const quickNav = $('.quick-nav')

        window.addEventListener('scroll', ()=>{
            if(this.scrollY >= 52){
                quickNav.classList.add('scroll-quick-nav')
            } else {
                quickNav.classList.remove('scroll-quick-nav')
            }

        })
    }

    //Open allsite panel
    function openAllSitePanel() {
        const allsite = $('.allsite')
        const openBtn = $('.allsite-btn')

        openBtn.addEventListener('click', function() {
            allsite.classList.toggle('open-allsite-panel')
        })
        
    }
    
    //Carousel zoom
    function carouselZoom() {
        const carousels = $$('.carousel-link')
        
        carousels.forEach(carousel => {
            carousel.addEventListener('mouseover', function() {
                $('.carousel-link.carousel--active').classList.remove('carousel--active')
                this.classList.add('carousel--active')
            })
        })
    }


    //Countdown Timer
    function countdownTimer() {
        const days = $('.days .countdown__value')
        const hours = $('.hours .countdown__value')
        const minutes = $('.minutes .countdown__value')
        const seconds = $('.seconds .countdown__value')
        
        const currentYear = new Date().getFullYear()

        const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`)

        function updateCountdownTime() {
            const currentTime = new Date()
            const diff = newYearTime - currentTime

            const d = Math.floor(diff / 1000 / 60 / 60 / 24)
            const h = Math.floor(diff / 1000 / 60 / 60) % 24
            const m = Math.floor(diff / 1000 / 60) % 60
            const s = Math.floor(diff / 1000) % 60

            days.innerHTML = d
            hours.innerHTML = h < 10 ? '0' + h : h
            minutes.innerHTML = m < 10 ? '0' + m : m
            seconds.innerHTML = s < 10 ? '0' + s : s
        }

        setInterval(updateCountdownTime,1000)
    }

    // Horizontally scroll
    function horizontally() {
        let currentScrollPosition = 0
        let scrollAmout = 600
        const btnPre = $('.scroller-controls__previous')
        const btnNext = $('.scroller-controls__next')

        const sCont = $('.matches-list')
        const hsScroll = $('.matches-item')
        
        btnPre.style.opacity = '0.3'
        btnNext.classList.add('hover-enable')
        
        let maxScroll = -sCont.offsetWidth + hsScroll.offsetWidth - 620

        function scrollHorizontally(val) {
            currentScrollPosition += (val * scrollAmout)

            if (currentScrollPosition > 0 ) {
                currentScrollPosition = 0
                btnPre.style.opacity = '0.3'
                btnPre.classList.remove('hover-enable')
                
            } else {
                btnPre.style.opacity = '1'
                btnPre.classList.add('hover-enable')
            }

            if (currentScrollPosition < maxScroll) {
                currentScrollPosition = maxScroll
                btnNext.style.opacity = '0.3'
                btnNext.classList.remove('hover-enable')
            } else {
                btnNext.style.opacity = '1'
                btnNext.classList.add('hover-enable')

            }

            sCont.style.left = currentScrollPosition + 'px'
        }

        btnPre.addEventListener('click', function() {
            scrollHorizontally(1)
        })

        btnNext.addEventListener('click', function() {
            scrollHorizontally(-1)
        })

    }

    // scrollFeaturePromo
    function scrollFeaturePromo() {
        const featurePromo = $('.featured-promo').offsetTop
        const featurePromoBg = $('.featured-promo__bg')

        window.onscroll = function() {
            if (this.scrollY >= (featurePromo - 120)) {
                featurePromoBg.classList.add('featured-promo__bg--active')
            }   

           
        }

    }




    function start(){
        searchBtnToggle()
        openUserRegister()
        openMobileMenu()
        closeMobileMenu()
        navItemActive()
        openLanguageSwitch()
        closeLanguageSwitch()
        closeDropdownMenu()
        scrollQuickNav()
        openAllSitePanel()
        carouselZoom()
        countdownTimer()
        horizontally()
        scrollFeaturePromo()
        getData(renderSites)
        getData(renderNewspaper)
        getData(renderNewspaperMore)
    }

    start()
}