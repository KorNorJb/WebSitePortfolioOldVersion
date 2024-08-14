// ----------------Scroll Animation----------------------------
const animItems = document.querySelectorAll("._anim-item");
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			}
			else {
				animItem.classList.remove('_active');
			}
		}

	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollleft = window.pageXOffset || document.documentElement.scrollleft,
			scrolltop = window.pageYOffset || document.documentElement.scrolltop;
		return {top: rect.top + scrolltop, left: rect.left + scrollleft}
	}
}
// ----------------Timer----------------------------
let timeend = new Date()
timeend= new Date(timeend.getFullYear()+1,0,1);
console.log(timeend)

function time() {
	today = new Date()
	today = Math.floor((timeend - today)/1000)
	tsec = today%60
	if (tsec<10) {
		tsec='0'+ tsec
	}
	today = Math.floor(today/60)
	tmin = today%60
	if (tmin<10) {
		tmin = '0' + tmin
	}
	today = Math.floor(today/60)
	thour = today%24
	today = Math.floor(today/24)
	timestr= today + " days " + thour + " hours " + tmin + " minutes " + tsec + " seconds";
	document.getElementById("timer1").innerHTML = timestr;
	window.setTimeout(time,1000)
}