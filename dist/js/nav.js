'use strict';

var navMenu = document.querySelector('.nav-menu');
let isHidden = navMenu.style.display === 'none' ? true : false;
navMenu.setAttribute('aria-hidden', String( isHidden ) );
navMenu.setAttribute('aria-expanded', String( !isHidden ) );

var menuToggle = document.querySelector( '.nav-bar-toggle' );

navMenu.setAttribute('aria-labelledby','nav-bar-toggle');

menuToggle.addEventListener('click', 
    function(){
		let isHidden = navMenu.style.display === 'none' ? true : false;
		navMenu.style.display = isHidden ? 'block' : 'none';
		navMenu.setAttribute('aria-hidden', String( !isHidden ));
		navMenu.setAttribute('aria-expanded', String( isHidden ));
    }
);
