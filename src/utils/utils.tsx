import React from 'react';

export const hideMenuOnScrollDown = () => {
    /* When the user scrolls down, hide the nav-top. When the user scrolls up, show the navbar */
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        const TopNav: HTMLElement | null = document.querySelector("#nav-top")
        // console.log("prevScrollpos", prevScrollpos, "currentScrollPos", currentScrollPos)
        if ((prevScrollpos > currentScrollPos)) {
            TopNav ? TopNav.style.top = "0" : null;
        } else if (currentScrollPos !== 0) {
            TopNav ? TopNav.style.top = "-60px" : null;
        } else {
            TopNav ? TopNav.style.top = "0" : null;
        }
        prevScrollpos = currentScrollPos;
    }
}