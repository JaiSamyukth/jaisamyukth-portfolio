<script lang="ts">

    import { onMount } from "svelte";
    import { letterSlideIn, maskSlideIn } from "$lib/animations";
    import { loadPagePromise } from "$lib/store";
    import { onScrolledIntoView } from "$lib/utils";
    import { dataState } from "$lib/state.svelte";

    let footerContainerElement: HTMLElement = $state()!
    let logoElement: HTMLElement = $state()!; 
    let creditsElement: HTMLElement = $state()!; 
    let statusElement: HTMLElement = $state()!; 
    let fullEmailLinkElement: HTMLElement = $state()!;

    let signatureElement: HTMLImageElement = $state()!;

    const currentYear = new Date().getFullYear();
    
    function introAnimations() {

        // Scroll activated animations powered by anime instead of svelte transitions
        const logoAnimate = maskSlideIn(logoElement, {});
        const fullEmailLinkAnimate = letterSlideIn(fullEmailLinkElement, { delay: 6, initDelay: 150 });
        const creditsAnimate = maskSlideIn(creditsElement, { delay: 150 });
        const statusAnimate = letterSlideIn(statusElement, { delay: 6, initDelay: 100 });

        // Intersection observer to run animations when footer is in scroll view
        onScrolledIntoView(footerContainerElement, () => {
            logoAnimate.anime();
            creditsAnimate.anime();
            fullEmailLinkAnimate.anime();
            statusAnimate.anime();

            // Signature image animation
            signatureElement.animate([
                { opacity: 0, transform: 'translateY(20px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ], {
                duration: 1000,
                delay: 500,
                easing: 'cubic-bezier(.72,.3,.25,1)',
                fill: 'forwards'
            });
        });
    }

    onMount(async () => {
        await loadPagePromise;
        introAnimations();
    });

</script>



<div class="footer-wrapper" bind:this={footerContainerElement}>
    <!-- Left side -->
    <div class="flex-wrapper">
        <div class="logo-wrapper">
            <div class="inline-flex" bind:this={logoElement}>
                <div class="logo-text">JS</div>
            </div>
        </div>

        <div class="status-wrapper">
            <p class="large-text" bind:this={statusElement}>
                I am currently available for new projects,<br>reach out to discuss opportunities.
            </p>
            <a class="button large-text" bind:this={fullEmailLinkElement} href="mailto:placeholder@domain.com" target="_blank">placeholder@domain.com</a>
        </div>
        
        <div class="credits-wrapper" bind:this={creditsElement}>
            <p class="year">© {currentYear}</p>
            <p class="credits">
                Designed and developed by Jai Samyukth<br>
                Originally based on Musab Hassan's portfolio (MPL 2.0 Licensed)<br>
                <a class="clickable button no-decor" href="https://github.com/jaisamyukth/portfolio" target="_blank">
                    View source code on GitHub
                </a>
            </p>
        </div>
    </div>

    <!-- Right side -->
	<div class="flex-wrapper decor">
        <!-- Jai Samyukth Signature -->
        <img src="assets/imgs/signature.png" alt="Jai Samyukth Signature" class="name-signature" bind:this={signatureElement}>
    </div>
</div>



<style lang="sass">

@use "../consts.sass" as consts

@include consts.textStyles()

.footer-wrapper
    width: 100vw
    background-color: consts.$c_secondary_bg
    display: flex
    flex-direction: row
    justify-content: space-between
    padding: 15vh 13vw
    margin-top: 25vh
    box-sizing: border-box

    @media only screen and (max-width: 950px)
        .flex-wrapper.decor
            display: none !important

    @media only screen and (max-width: 950px)
        flex-direction: column-reverse

        .flex-wrapper:not(:first-child)
            margin-bottom: 15vh

    .inline-flex
        flex-grow: 1
        display: flex
        flex-direction: row
        align-items: center


    .logo-wrapper
        margin-bottom: 5vh

        .logo-text
            display: inline-block
            font-family: consts.$titleFont
            font-size: 6vh
            font-weight: 700
            color: consts.$c_accent_gold

    .status-wrapper
        .button.large-text
            margin-top: 2vh

    .credits-wrapper
        margin-top: 5vh
        color: rgba(255,255,255,0.3)

        p.year
            margin-bottom: 1vh
            font-family: consts.$font
            font-size: 1.8vh
            font-weight: normal
            color: rgba(255,255,255,0.3)

        .credits
            font-size: 1.5vh
            line-height: 125%
            white-space: nowrap
            color: rgba(255,255,255,0.3)

            .button
                color: rgba(255,255,255,0.3)

    .large-text
        font-size: 2.5vh

        @media only screen and (max-width: 950px)
            br
                display: none

    .flex-wrapper.decor
        display: flex
        flex-direction: column
        justify-content: center

        .name-signature
            width: 20vh
            max-height: 15vh
            object-fit: contain
            opacity: 0
            filter: brightness(0) saturate(100%) invert(77%) sepia(85%) saturate(1352%) hue-rotate(8deg) brightness(95%) contrast(89%)

</style>