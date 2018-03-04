require('smoothscroll-polyfill').polyfill();

class Project  {

	constructor(slug) {
		this.slug = slug
		this.pos = 0
		this.ease = BezierEasing(.25,.1,.25,1)
	}

	pageIn(){
		this.init()
	}

	init() {
		this.sliderStarted = false
		this.currentSlider = 0
		this.animateSliderBind = this.animateSlider.bind(this)
		const ready = this.ready.bind(this)
		loader.loadpage(this.slug).then(
			this.success.bind(this),
			this.failure.bind(this)
		)
	}

	success(response){
		this.page = response.find('.page')
		this.ready()
	}

	failure(error){
	}

	ready() {

		this.container = $('.parallax__container', this.page)
		this.boxes = $('.box', this.page);
		this.loader = $('.image-loader')
		this.beforeFooter = $('#beforeFooter');
		this.projectsFooter = $('#projectsFooter');
		this.overlay = $('.overlay');
		this.hasVideo = this.container.find('video').length > 0
		this.video = this.container.find('video')[0]

		this.loader.find('.is-visible').removeClass('is-visible')

		$('video', this.page).each(function () {
		 	enableInlineVideo(this, {
				iPad: true
			});
		 });

		config.body.removeClass('has-dark-cover')
		this.darkcover = $('.cover', this.page).hasClass('has-dark-cover')
		if(this.darkcover){
			config.body.addClass('has-dark-cover')
		}

		this.renderQueue = this.renders.bind(this)
		stage.on("stage:scroll", this.renderQueue)
		this.resizeQueue = this.resizeQue.bind(this)
		stage.on("stage:resize", this.resizeQueue)

		this.startPage()
	}


	startPage() {

		//

		config.body.addClass( `is-${this.slug}` )
		this.resizeQue(stage)

		const hasbg = config.body.hasClass('has-bg') || config.body.hasClass('animate-bg')

		if(hasbg){

	 		TweenMax.to(this.loader, 1, {
				alpha: 0,
	 			clearProps: 'all',
	 			onComplete: this.removeLoader,
	 			onCompleteScope: this,
				force3D: true,
				delay: config.delay
			})

			TweenMax.to(this.page, 0, {
				alpha: 1,
				ease: Expo.easeInOut,
				force3D: true,
				clearProps: 'transform',
				delay: config.delay

			})
		}

		else {
			TweenMax.to(this.page, 1, {
				alpha: 1,
				ease: Expo.easeInOut,
				onComplete: this.removeLoader,
				onCompleteScope: this

			})
		}

		NProgress.done()


	}

	removeLoader(){

		$('.bg').removeClass('is-loading')
		config.body.removeClass(`is-loading start has-bg animate-bg`)
		$('.footer__bg .is-visible').removeClass('is-visible')
		window.scroll({ top: stage.halfh, left: 0, behavior: 'smooth' });
	}

	resizeQue(e){

		if(!e)
			e = stage

		if(stage.w < 768){
			!this.sliderStarted && this.startSlider()
		}
		else {
			this.sliderStarted && this.stopSlider()
		}

		this.boxes.each((i, el) => {

				const box = $(el)
				const rect = box.offset()
				const height = box.height()
				const width = box.width()

				const shift = box.hasClass('project--shift') ? .1*e.w : 0
				const text = box.hasClass('project--text') ? .05*e.w : 0

				box.data('bottom', rect.top  + height +  text + shift)
				box.data('top', rect.top  + text + shift)
				box.data('left', rect.left)
				box.data('width', width)
				box.data('height', height)
		})

		const top = config.body.height() - stage.h
		this.hh = top
		this.beforeFooter[0].dataset.top = top
		this.renders(stage)

	}

	startSlider(){
		this.sliderStarted = true
		TweenMax.delayedCall(3, this.animateSliderBind)
		//this.animateSlider()
	}

	stopSlider(){
		TweenMax.killDelayedCallsTo(this.animateSliderBind)
		this.sliderStarted = false
		this.currentSlider = 0;
		TweenMax.set($('.group__container'), { clearProps: 'all'})

	}

	animateSlider(){

		this.currentSlider  = this.currentSlider + 1
		if(this.currentSlider == 4) this.currentSlider = 0
		const slide = 25*this.currentSlider

		if(this.currentSlider){
			TweenMax.to($('.group__container'), 1, { x :`-${slide}%`, force3D: true})
			TweenMax.delayedCall(3, this.animateSliderBind)
		}
		else {
			TweenMax.set($('.group__container'), { x :`-${slide}%`, force3D: true})
			TweenMax.delayedCall(1.5, this.animateSliderBind)
		}

	}


	renders(e) {

		if(e.scrolltop < e.h + 100) {
			TweenMax.set(this.container, {y: -(e.scrolltop/9), force3D: true})
			this.hasVideo && this.video.play()
		}
		else {

			TweenMax.set(this.container, {y: -3*e.h})
			this.hasVideo && this.video.pause()
		}



		const hascover = e.scrolltop + .03*e.w + 20 - e.h < 0
		config.body.toggleClass('has-cover', hascover)

		this.boxes.each((i, el) => {

			const box = $(el)
			const index = box.data('height')
			const token = box.data('top')
			const inview =  e.scrolltop + e.h > token && e.scrolltop < token + index;
			const loading = e.scrolltop <= token - e.h;

			box.toggleClass('in-view', inview)
			box.toggleClass('hide', loading)

		})

		const ftoken = config.body.height() - e.h
		const pview = e.scrolltop  + e.halfh
		let halfview = e.scrolltop  + e.halfh > ftoken

		if(e.scrollDirection > 0 && !config.infos.isDevice ){
			halfview = e.scrolltop > ftoken
		}

		config.body.toggleClass('footer-visible', halfview )
		const max = Math.min( Math.max((ftoken - pview)/e.h, 0) , 1)
		TweenMax.set(this.overlay, {alpha: this.ease(max*2) })


	}

	fakeOut(done){
		TweenMax.to($(this.page), .7, {y: -stage.halfh, opacity:0, ease: new Ease(BezierEasing(.42,0,.3,1))})
		TweenMax.fromTo($('.footer__bg'), .7, {opacity: 0}, {opacity: 1,  ease: new Ease(BezierEasing(.42,0,.3,1)),  onComplete:done , delay: .6})
	}

	pageOut(done){
		stage.removeListener("stage:scroll", this.renderQueue)
		stage.removeListener("stage:resize", this.resizeQueue)
		config.body.removeClass( `is-${this.slug}` )
		this.animateOut(done)
	}

	animateOut(done) {
		this.destroy(done)
	}

	destroy(done) {

		this.stopSlider()
		config.body.removeClass('has-dark-cover')
		config.body.removeClass('footer-visible')
		done()

	}

}

module.exports = Project
