(function() {

	var site = {

		init: function() {

			// site.moveStripes();
			site.carouselClick();
			site.carouselAutomate();
			site.highlightAssets();

		},

		carouselClick: function() {

			$('.control a').on('click', function() {

				var runner = $(this).closest('.control').data().runner;
				var slide = this.dataset.slide;

				$('#slides-' + runner)
					.removeClass('first')
					.removeClass('second')
					.removeClass('third')
					.removeClass('fourth')
					.addClass( slide );

				$('#control-' + runner + ' a').removeClass('active');
				$(this).addClass('active');

			});

		},

		carouselAutomate: function() {

			var interval = setInterval(function() {

				site.carouselNext();

			}, 3000);

			$('.slide').on('click', function() {

				clearTimeout( interval );

			});

		},

		carouselNext: function() {

			$('[data-slide]').removeClass('active');

			if ( $('.slides').hasClass('first') ) {
				$('.slides').removeClass('first').addClass('second');
				$('[data-slide="second"]').addClass('active');
			}

			else if ( $('.slides').hasClass('second') ) {
				$('.slides').removeClass('second').addClass('third');
				$('[data-slide="third"]').addClass('active');
			}

			else if ( $('.slides').hasClass('third') ) {
				$('.slides').removeClass('third').addClass('fourth');
				$('[data-slide="fourth"]').addClass('active');
			}

			else {
				$('.slides').removeClass('fourth').addClass('first');
				$('[data-slide="first"]').addClass('active');
			}

		},

		moveStripes: function() {

			if ( window.matchMedia('(max-width: 768px)').matches ) { return false; }

			var moveImgUp, moveImgLeft;

			moveImgUp = function moveImgUp( el, amount ) {
				$( el ).css({
					'transform' : 'translate3d(-50%, ' + amount + 'px, 0)'
				});
			}

			moveImgLeft = function moveImgLeft( el, amount ) {
				$( el ).css({
					'transform' : 'translate3d(' + amount + 'px, 0, 0)'
				});
			}

			window.addEventListener('scroll', function(e) {

				var y = window.scrollY * 1,
					x = window.scrollY / 8;

				moveImgUp('.stripes-up', -y);
				moveImgLeft('.stripes-left', -x);

			});

		},

		highlightAssets: function() {

			if ( window.matchMedia('(max-width: 768px)').matches ) { return false; }

			$('figure').hover(
				function() {
					$('figure:not(.info)').addClass('grayscale');
					$(this).removeClass('grayscale');
				}, function() {
					$('figure').removeClass('grayscale');
				}
			);

		}

	};

	site.init();

})();