</main>
<script src="/assets/js/vendor/jquery-1.11.2.min.js"></script>
<script src="/assets/js/vendor/html2canvas.js"></script>
<script src="/assets/js/partial/global.js"></script>
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-16453001-3', 'auto');
	ga('send', 'pageview');

	// ========================================
	// hack for iPhones
	// http://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
	// ========================================

	var iPhone4 = (window.screen.height == (960  / 2));
	var iPhone5 = (window.screen.height == (1136 / 2));
	var iPhone6 = (window.screen.height == (1334 / 2));

	window.addEventListener('load', function() {

		if ( iPhone4 || iPhone5 ) {
			setTimeout(function() {
				document.getElementsByTagName('html')[0].style.width = '320px';
			}, 300);
		}

		if ( iPhone6 ) {
			setTimeout(function() {
				document.getElementsByTagName('html')[0].style.width = '375px';
			}, 300);
		}

	}, false);

</script>

</body>
</html>