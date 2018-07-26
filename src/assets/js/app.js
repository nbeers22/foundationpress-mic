import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	nav   : true,
  	loop  : true,
  	items : 5,
  	margin: 20,
  	autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
  	navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
  	responsive:{
	    0:{
	        items:1
	    },
	    600:{
	        items:3
	    },
	    1000:{
	        items:5
	    }
    }
  });
});
