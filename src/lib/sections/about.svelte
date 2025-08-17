<script lang="ts">

	import { onMount } from "svelte";
	import { loadPagePromise } from "$lib/store";
	import { letterSlideIn, maskSlideIn } from "$lib/animations";
	import { loadImage, onScrolledIntoView } from "$lib/utils";
    import { scrollAnchorState, viewPortState } from "$lib/state.svelte";

	let section1Element: HTMLElement;
	let section2Element: HTMLElement;
	let profilePicContainer: HTMLElement;
	let profileImageSrc: string | null = null;

	// Promise which when resolved will trigger svelte animations
	let sectionOneResolve: (value?: any) => void;
	let sectionOnePromise = new Promise((resolve) => sectionOneResolve = resolve);
	let sectionTwoResolve: (value?: any) => void;
	let sectionTwoPromise = new Promise((resolve) => sectionTwoResolve = resolve);

	onMount(async () => {
		// Wait for page to load
		await loadPagePromise;
		// Set navbar about link's y location to top of aboutContainer
		scrollAnchorState.about = section1Element;

		viewPortState.slickscrollInstance.addOffset({
			element: profilePicContainer!,
			speedY: 0.8
		});

		onScrolledIntoView(section1Element, () => sectionOneResolve(true));
		onScrolledIntoView(section2Element, () => sectionTwoResolve(true));
		profileImageSrc = await loadImage("assets/imgs/profile-photo.jpg");
	});

	function titleIn(node: HTMLElement) {
		const titleAnimation = letterSlideIn(node, { delay: 15 });
		titleAnimation.anime();
	}

	// Add parallax scrolling offsets to slickScroll
	function addSlickScrollOffset(node: HTMLElement) {
		viewPortState.slickscrollInstance.addOffset({
			element: node,
			speedY: 0.8
		});
	}

</script>

<div id="content-container" class="about" bind:this={section1Element}>
	{#await sectionOnePromise then _}
		<div class="content-wrapper">
			<h1 class="title" use:titleIn>
				Hey I'm <br>Jai Samyukth
			</h1>
			<div in:maskSlideIn={{ duration: 1200, reverse: true, delay: 150 }}>
				<p class="paragraph">
					I'm Jai Samyukth — a creator who blends luxury design, high-performance technology, and strategic execution. Co-founder of Genrec AI, building privacy-focused, high-impact AI solutions. My products are elegant, scalable, and unapologetically different.<br><br>I work with organizations and individuals to create beautiful, responsive, and scalable products tailor-made for them. Think we can make something great together? Let's talk over email.
				</p>
			</div>
			<div class="social-button-wrapper">
				<div in:maskSlideIn={{ delay: 400, reverse: true }}>
					<span class="button"><a href="mailto:placeholder@domain.com" target="_blank" class="clickable sublink link">Email Me</a></span>
				</div>
				<div in:maskSlideIn={{ delay: 700, reverse: true }}>
					<span class="button"><a href="https://github.com/jaisamyukth" target="_blank" class="clickable sublink link">Github</a></span>
				</div>
				<div in:maskSlideIn={{ delay: 1000, reverse: true }}>
					<span class="button"><a href="https://www.linkedin.com/in/jaisamyukth/" target="_blank" class="clickable sublink link">LinkedIn</a></span>
				</div>
			</div>
		</div>
		<div class="profile-image" use:addSlickScrollOffset bind:this={profilePicContainer}>
			{#if profileImageSrc}
				<div class="placeholder-profile">
					<img src={profileImageSrc} alt="Jai Samyukth Profile Photo" style="width: 100%; height: 100%; object-fit: cover;">
				</div>
			{/if}
		</div>
	{/await}
</div>

<div class="horizontal-flex" bind:this={section2Element}>
	{#await sectionTwoPromise then _}
		<ul class="list first">
			<li class="list-title">
				<div in:letterSlideIn={{ initDelay: 400 }}>
					technical expertise
				</div>
			</li>
			<li>
				<div in:letterSlideIn={{ initDelay: 550 }}>
					AI Integration
				</div>
				<div
					class="flex-item"
					in:maskSlideIn={{ delay: 600 }}>
					<span class="skill-tag">FastAPI</span>
					<span class="skill-tag">PostgreSQL</span>
					<span class="skill-tag">AWS</span>
				</div>
			</li>
			<li>
				<div in:letterSlideIn={{ initDelay: 650 }}>
					Frontend
				</div>
				<div class="flex-item" in:maskSlideIn={{ delay: 700 }}>
					<span class="skill-tag">SvelteKit</span>
					<span class="skill-tag">React</span>
					<span class="skill-tag">TypeScript</span>
				</div>
			</li>
			<li>
				<div in:letterSlideIn={{ initDelay: 750 }}>
					Design & Animation
				</div>
				<div class="flex-item" in:maskSlideIn={{ delay: 800 }}>
					<span class="skill-tag">UI/UX Design</span>
					<span class="skill-tag">Animation Systems</span>
					<span class="skill-tag">Three.js</span>
				</div>
			</li>
		</ul>
		<ul class="list second">
			<li class="list-title">
				<div in:letterSlideIn={{ initDelay: 900 }}>
					product strategy
				</div>
			</li>
			<li>
				<div in:letterSlideIn={{ initDelay: 1000 }}>
					Product Development
				</div>
				<div
					class="flex-item"
					in:maskSlideIn={{ delay: 1050 }}>
					<span class="skill-tag">Full-Stack Development</span>
					<span class="skill-tag">Cloud Architecture</span>
					<span class="skill-tag">Performance Optimization</span>
				</div>
			</li>
			<li>
				<div in:letterSlideIn={{ initDelay: 1150 }}>
					Business Strategy
				</div>
				<div
					class="flex-item"
					in:maskSlideIn={{ delay: 1200 }}>
					<span class="skill-tag">Product Strategy</span>
					<span class="skill-tag">AI Solutions</span>
					<span class="skill-tag">Scalable Systems</span>
				</div>
			</li>
		</ul>
	{/await}
</div>


<style lang="sass">

@use "../consts.sass" as consts

@include consts.textStyles()

#content-container.about
	display: flex
	flex-direction: row
	justify-content: space-between
	overflow: hidden
	padding: 0 5vw
	margin-top: 40vh
	position: relative
	padding-bottom: 5vh
	background-color: consts.$c_primary_bg

	.profile-image
		flex: 0.8
		overflow: hidden
		margin-top: -40vh
		position: relative

		.placeholder-profile
			height: 80%
			width: 90%
			border-radius: 1.5vh
			overflow: hidden

			img
				border-radius: 1.5vh

	.content-wrapper
		box-sizing: border-box
		flex: 1
		height: 100%
		margin: 0 2vw
		padding-right: 4vw
		display: flex
		flex-direction: column
		justify-content: center
		margin-top: 5vh
		box-sizing: border-box
		z-index: 2

		@media only screen and (max-width: 950px)
			&
				width: 80%

				h1
					font-size: 25vw !important

		h1
			font-size: 20vh
			font-weight: 400

		.paragraph
			margin-top: 10vh
			margin-left: 5vw
			position: relative
			width: 80%
			line-height: 1.5rem

			@media only screen and (max-width: 750px)
				&
					width: 100%
					margin-left: 0

			&::before
				content: ""
				position: absolute
				height: 1px
				width: 8vw
				right: 105%
				top: 1rem
				background-color: white
				

		.social-button-wrapper
			font-size: 3vh
			margin-left: 5vw
			margin-top: 4vh
			display: inline-block

			& :global(*:not(:last-child))
				margin-right: 2vw

			@media only screen and (max-width: 750px)
				&
					margin-left: 5vw


	@media only screen and (max-width: 950px)
		.profile-image
			display: none

.horizontal-flex
	display: flex
	flex-direction: row
	justify-content: space-between
	padding: 0 13vw
	margin-top: 12vh
	width: 100%
	box-sizing: border-box
	background-color: consts.$c_secondary_bg

	@media only screen and (max-width: 1080px)
		flex-direction: column
		padding: 0 8vw

	.list
		list-style-type: none
		text-align: left

		@media only screen and (max-width: 1080px)
			margin-top: 10vh

		li.list-title
			letter-spacing: 0.6vh
			font-size: 1.3vh
			font-weight: bold
			color: consts.$c_accent_gold

		li
			font-family: consts.$font
			text-transform: uppercase
			font-size: 2vh
			letter-spacing: 0.5vh
			padding: 2vh 0
			border-bottom: 1px solid #444
			display: flex
			flex-wrap: wrap
			flex-direction: row
			justify-content: space-between
			align-items: center
			column-gap: 10vw
			row-gap: 3vh

			.flex-item
				display: flex
				flex-wrap: wrap
				gap: 1vh

				.skill-tag
					background-color: rgba(212, 175, 55, 0.2)
					color: consts.$c_accent_gold
					padding: 0.5vh 1vh
					border-radius: 0.5vh
					font-size: 1.4vh
					font-weight: 600

</style>