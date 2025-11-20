document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;
  let scrollPeakY = lastScrollY;
  const glassEffectHeader = document.querySelector(".glassEffectHeader");
  const glassEffectCon = document.querySelector(".glassEffect");
  const glassEffectLogo = document.querySelector(".glassEffectLogo");
  const glassIconHeader = document.querySelectorAll(".glassIconHeader");

  addEventListener("scroll", () => {
    let currentScrollY = window.scrollY;
    const UPWARD_THRESHOLD = 50;

    if (currentScrollY > lastScrollY) {
      scrollPeakY = currentScrollY;

      glassEffectLogo.classList.remove("glassEffectLogoAnimation");
      glassEffectCon.classList.remove("glassEffectAnimation");
      glassEffectLogo.classList.add("glassEffectLogoAnimationOut");
      glassEffectCon.classList.add("glassEffectAnimationOut");

      glassIconHeader.forEach((icon) => {
        icon.classList.remove("glassEffectInsideAnimation");
      });

      // Set glassEffectHeader display none after animation
      setTimeout(() => {
        glassEffectHeader.style.display = "none";
      }, "100");
    } else if (currentScrollY < lastScrollY) {
      if (
        scrollPeakY - currentScrollY >= UPWARD_THRESHOLD ||
        currentScrollY <= 50
      ) {
        glassEffectLogo.classList.remove("glassEffectLogoAnimationOut");
        glassEffectCon.classList.remove("glassEffectAnimationOut");

        // Set glassEffectHeader display flex before animation
        glassEffectHeader.style.display = "flex";
        
        glassEffectLogo.classList.add("glassEffectLogoAnimation");
        glassEffectCon.classList.add("glassEffectAnimation");

        glassIconHeader.forEach((icon) => {
          icon.classList.add("glassEffectInsideAnimation");
        });
      }
    } else {
      glassEffectLogo.classList.remove("glassEffectLogoAnimation");
      glassEffectCon.classList.remove("glassEffectAnimation");
      glassEffectLogo.classList.add("glassEffectLogoAnimationOut");
      glassEffectCon.classList.add("glassEffectAnimationOut");

      glassIconHeader.forEach((icon) => {
        icon.classList.remove("glassEffectInsideAnimation");
      });

      // Set glassEffectHeader display none after animation
      setTimeout(() => {
        glassEffectHeader.style.display = "none";
      }, "100");
    }

    lastScrollY = currentScrollY;
  });
});
