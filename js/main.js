const states 	= ['home', 'about', 'methods', 'guide']
let active		= 0;

let header		= '#sect-home > #header';
let sidenav		= '#sidebar > ul#nav';

$( document ).ready(async function() {
	$(header).html(states.map((o, i) => ("<div class='cursor-pointer " + o + (i == active ? ' active' : '') + "'>" + o + "</div>")).reverse().join(""));
	$(sidenav).html(states.map((o, i) => ("<li class='cursor-pointer " + o + (i == active ? ' active' : '') + "'>" + o + "</li>")).join(""));

	$( header + ' > div' + ', ' + sidenav + ' > li' ).click(function() {
		let next = $(this).text();

		setActive(next);
		$.scrollify.move("#" + next);
	});

	$.scrollify({
		section : ".scrolled",
		sectionName : "section-name",
		scrollSpeed: 1000,
    	before: beforeScroll,
	});
});

function beforeScroll(index, sections) {
	$( '#sidebar' ).toggleClass('hide', index == 0);
	setActive(states[index]);

}

function setActive(next) {
	$(  header + ' > div.active' + ', ' + sidenav + ' > li.active'  ).removeClass('active');
	$( header + ' > div.' + next + ', ' + sidenav + ' > li.' + next ).addClass('active');
}
// $(window).scroll(function(e) {
// 	if (!init) {
// 		let current = $(this).scrollTop();
//
// 		console.log(current);
//
// 		if (scrollrn >= current && active > 0) {
// 			active--;
// 		} else if (scrollrn < current && active < (states.length - 1)) {
// 			active++;
// 		}
//
// 		scrollTo(active * height);
// 	}
// });
//
// function scrollTo(scrollTop) {
// 	return new Promise((resolve, reject) => {
// 		$('html, body').animate({ scrollTop }, 500, () => { resolve() });
// 	});
// }
