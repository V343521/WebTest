(function () {
    "use strict";
    const counterEl = document.getElementById('clickCounter');
    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const changeBioBtn = document.getElementById('changeBioBtn');
    const bioText = document.getElementById('bioText');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const avatar = document.getElementById('avatar');
    let clickCount = 0;
    let isDark = false;
    function updateCounter() {
        counterEl.textContent = clickCount;
    }
    function handleClick() {
        clickCount += 1;
        updateCounter();
        clickBtn.style.transform = 'scale(0.96)';
        setTimeout(() => { clickBtn.style.transform = ''; }, 150);
    }
    function handleReset() {
        clickCount = 0;
        updateCounter();
        resetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { resetBtn.style.transform = ''; }, 150);
    }
    let bioIndex = 0;
    function changeBio() {
        bioIndex = (bioIndex + 1) % bioVariants.length;
        bioText.textContent = bioVariants[bioIndex];
        bioText.style.transition = 'background 0.2s';
        bioText.style.background = '#d9d7f5';
        setTimeout(() => {
            bioText.style.background = body.classList.contains('dark') ? '#2a2a3b' : '#f8f9fe';
        }, 200);
    }
    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            body.classList.add('dark');
            themeToggle.textContent = 'Light theme';
            avatar.textContent = 'AS';
        } else {
            body.classList.remove('dark');
            themeToggle.textContent = 'Dark theme';
            avatar.textContent = 'AS';
        }
        try {
            localStorage.setItem('themePreference', isDark ? 'dark' : 'light');
        } catch (e) { }
    }
    function loadTheme() {
        try {
            const saved = localStorage.getItem('themePreference');
            if (saved === 'dark') {
                isDark = true;
                body.classList.add('dark');
                themeToggle.textContent = 'Light theme';
                avatar.textContent = 'AS';
            } else if (saved === 'light') {
                isDark = false;
                body.classList.remove('dark');
                themeToggle.textContent = 'Dark theme';
                avatar.textContent = 'AS';
            }
        } catch (e) { }
    }
    function resetCounterFromAvatar() {
        clickCount = 0;
        updateCounter();
        avatar.style.transform = 'scale(0.9) rotate(8deg)';
        setTimeout(() => { avatar.style.transform = ''; }, 250);
        bioText.textContent = 'Reset! Click again.';
        setTimeout(() => {
            bioText.textContent = bioVariants[bioIndex];
        }, 1200);
    }
    clickBtn.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', handleReset);
    changeBioBtn.addEventListener('click', changeBio);
    themeToggle.addEventListener('click', toggleTheme);
    avatar.addEventListener('dblclick', resetCounterFromAvatar);
    loadTheme();
    updateCounter();
    console.log('Mini site loaded! Enjoy.');
    console.log('Tip: double-click the avatar');
})();
(function () {
    "use strict";
    const counterEl = document.getElementById('clickCounter');
    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const changeBioBtn = document.getElementById('changeBioBtn');
    const bioText = document.getElementById('bioText');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const avatar = document.getElementById('avatar');
    let clickCount = 0;
    let isDark = false;
    function updateCounter() {
        counterEl.textContent = clickCount;
    }
    function handleClick() {
        clickCount += 1;
        updateCounter();
        clickBtn.style.transform = 'scale(0.96)';
        setTimeout(() => { clickBtn.style.transform = ''; }, 150);
    }
    function handleReset() {
        clickCount = 0;
        updateCounter();
        resetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { resetBtn.style.transform = ''; }, 150);
    }
    let bioIndex = 0;
    function changeBio() {
        bioIndex = (bioIndex + 1) % bioVariants.length;
        bioText.textContent = bioVariants[bioIndex];
        bioText.style.transition = 'background 0.2s';
        bioText.style.background = '#d9d7f5';
        setTimeout(() => {
            bioText.style.background = body.classList.contains('dark') ? '#2a2a3b' : '#f8f9fe';
        }, 200);
    }
    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            body.classList.add('dark');
            themeToggle.textContent = 'Light theme';
            avatar.textContent = 'AS';
        } else {
            body.classList.remove('dark');
            themeToggle.textContent = 'Dark theme';
            avatar.textContent = 'AS';
        }
        try {
            localStorage.setItem('themePreference', isDark ? 'dark' : 'light');
        } catch (e) { }
    }
    function loadTheme() {
        try {
            const saved = localStorage.getItem('themePreference');
            if (saved === 'dark') {
                isDark = true;
                body.classList.add('dark');
                themeToggle.textContent = 'Light theme';
                avatar.textContent = 'AS';
            } else if (saved === 'light') {
                isDark = false;
                body.classList.remove('dark');
                themeToggle.textContent = 'Dark theme';
                avatar.textContent = 'AS';
            }
        } catch (e) { }
    }
    function resetCounterFromAvatar() {
        clickCount = 0;
        updateCounter();
        avatar.style.transform = 'scale(0.9) rotate(8deg)';
        setTimeout(() => { avatar.style.transform = ''; }, 250);
        bioText.textContent = 'Reset! Click again.';
        setTimeout(() => {
            bioText.textContent = bioVariants[bioIndex];
        }, 1200);
    }
    clickBtn.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', handleReset);
    changeBioBtn.addEventListener('click', changeBio);
    themeToggle.addEventListener('click', toggleTheme);
    avatar.addEventListener('dblclick', resetCounterFromAvatar);
    loadTheme();
    updateCounter();
    console.log('Mini site loaded! Enjoy.');
    console.log('Tip: double-click the avatar');
})();
(function () {
    "use strict";
    const counterEl = document.getElementById('clickCounter');
    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const changeBioBtn = document.getElementById('changeBioBtn');
    const bioText = document.getElementById('bioText');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const avatar = document.getElementById('avatar');
    let clickCount = 0;
    let isDark = false;
    function updateCounter() {
        counterEl.textContent = clickCount;
    }
    function handleClick() {
        clickCount += 1;
        updateCounter();
        clickBtn.style.transform = 'scale(0.96)';
        setTimeout(() => { clickBtn.style.transform = ''; }, 150);
    }
    function handleReset() {
        clickCount = 0;
        updateCounter();
        resetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { resetBtn.style.transform = ''; }, 150);
    }
    let bioIndex = 0;
    function changeBio() {
        bioIndex = (bioIndex + 1) % bioVariants.length;
        bioText.textContent = bioVariants[bioIndex];
        bioText.style.transition = 'background 0.2s';
        bioText.style.background = '#d9d7f5';
        setTimeout(() => {
            bioText.style.background = body.classList.contains('dark') ? '#2a2a3b' : '#f8f9fe';
        }, 200);
    }
    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            body.classList.add('dark');
            themeToggle.textContent = 'Light theme';
            avatar.textContent = 'AS';
        } else {
            body.classList.remove('dark');
            themeToggle.textContent = 'Dark theme';
            avatar.textContent = 'AS';
        }
        try {
            localStorage.setItem('themePreference', isDark ? 'dark' : 'light');
        } catch (e) { }
    }
    function loadTheme() {
        try {
            const saved = localStorage.getItem('themePreference');
            if (saved === 'dark') {
                isDark = true;
                body.classList.add('dark');
                themeToggle.textContent = 'Light theme';
                avatar.textContent = 'AS';
            } else if (saved === 'light') {
                isDark = false;
                body.classList.remove('dark');
                themeToggle.textContent = 'Dark theme';
                avatar.textContent = 'AS';
            }
        } catch (e) { }
    }
    function resetCounterFromAvatar() {
        clickCount = 0;
        updateCounter();
        avatar.style.transform = 'scale(0.9) rotate(8deg)';
        setTimeout(() => { avatar.style.transform = ''; }, 250);
        bioText.textContent = 'Reset! Click again.';
        setTimeout(() => {
            bioText.textContent = bioVariants[bioIndex];
        }, 1200);
    }
    clickBtn.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', handleReset);
    changeBioBtn.addEventListener('click', changeBio);
    themeToggle.addEventListener('click', toggleTheme);
    avatar.addEventListener('dblclick', resetCounterFromAvatar);
    loadTheme();
    updateCounter();
    console.log('Mini site loaded! Enjoy.');
    console.log('Tip: double-click the avatar');
})();
(function () {
    "use strict";
    const counterEl = document.getElementById('clickCounter');
    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const changeBioBtn = document.getElementById('changeBioBtn');
    const bioText = document.getElementById('bioText');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const avatar = document.getElementById('avatar');
    let clickCount = 0;
    let isDark = false;
    function updateCounter() {
        counterEl.textContent = clickCount;
    }
    function handleClick() {
        clickCount += 1;
        updateCounter();
        clickBtn.style.transform = 'scale(0.96)';
        setTimeout(() => { clickBtn.style.transform = ''; }, 150);
    }
    function handleReset() {
        clickCount = 0;
        updateCounter();
        resetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { resetBtn.style.transform = ''; }, 150);
    }
    let bioIndex = 0;
    function changeBio() {
        bioIndex = (bioIndex + 1) % bioVariants.length;
        bioText.textContent = bioVariants[bioIndex];
        bioText.style.transition = 'background 0.2s';
        bioText.style.background = '#d9d7f5';
        setTimeout(() => {
            bioText.style.background = body.classList.contains('dark') ? '#2a2a3b' : '#f8f9fe';
        }, 200);
    }
    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            body.classList.add('dark');
            themeToggle.textContent = 'Light theme';
            avatar.textContent = 'AS';
        } else {
            body.classList.remove('dark');
            themeToggle.textContent = 'Dark theme';
            avatar.textContent = 'AS';
        }
        try {
            localStorage.setItem('themePreference', isDark ? 'dark' : 'light');
        } catch (e) { }
    }
    function loadTheme() {
        try {
            const saved = localStorage.getItem('themePreference');
            if (saved === 'dark') {
                isDark = true;
                body.classList.add('dark');
                themeToggle.textContent = 'Light theme';
                avatar.textContent = 'AS';
            } else if (saved === 'light') {
                isDark = false;
                body.classList.remove('dark');
                themeToggle.textContent = 'Dark theme';
                avatar.textContent = 'AS';
            }
        } catch (e) { }
    }
    function resetCounterFromAvatar() {
        clickCount = 0;
        updateCounter();
        avatar.style.transform = 'scale(0.9) rotate(8deg)';
        setTimeout(() => { avatar.style.transform = ''; }, 250);
        bioText.textContent = 'Reset! Click again.';
        setTimeout(() => {
            bioText.textContent = bioVariants[bioIndex];
        }, 1200);
    }
    clickBtn.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', handleReset);
    changeBioBtn.addEventListener('click', changeBio);
    themeToggle.addEventListener('click', toggleTheme);
    avatar.addEventListener('dblclick', resetCounterFromAvatar);
    loadTheme();
    updateCounter();
    console.log('Mini site loaded! Enjoy.');
    console.log('Tip: double-click the avatar');
})();
(function () {
    "use strict";
    const counterEl = document.getElementById('clickCounter');
    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const changeBioBtn = document.getElementById('changeBioBtn');
    const bioText = document.getElementById('bioText');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const avatar = document.getElementById('avatar');
    let clickCount = 0;
    let isDark = false;
    function updateCounter() {
        counterEl.textContent = clickCount;
    }
    function handleClick() {
        clickCount += 1;
        updateCounter();
        clickBtn.style.transform = 'scale(0.96)';
        setTimeout(() => { clickBtn.style.transform = ''; }, 150);
    }
    function handleReset() {
        clickCount = 0;
        updateCounter();
        resetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { resetBtn.style.transform = ''; }, 150);
    }
    let bioIndex = 0;
    function changeBio() {
        bioIndex = (bioIndex + 1) % bioVariants.length;
        bioText.textContent = bioVariants[bioIndex];
        bioText.style.transition = 'background 0.2s';
        bioText.style.background = '#d9d7f5';
        setTimeout(() => {
            bioText.style.background = body.classList.contains('dark') ? '#2a2a3b' : '#f8f9fe';
        }, 200);
    }
    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            body.classList.add('dark');
            themeToggle.textContent = 'Light theme';
            avatar.textContent = 'AS';
        } else {
            body.classList.remove('dark');
            themeToggle.textContent = 'Dark theme';
            avatar.textContent = 'AS';
        }
        try {
            localStorage.setItem('themePreference', isDark ? 'dark' : 'light');
        } catch (e) { }
    }
    function loadTheme() {
        try {
            const saved = localStorage.getItem('themePreference');
            if (saved === 'dark') {
                isDark = true;
                body.classList.add('dark');
                themeToggle.textContent = 'Light theme';
                avatar.textContent = 'AS';
            } else if (saved === 'light') {
                isDark = false;
                body.classList.remove('dark');
                themeToggle.textContent = 'Dark theme';
                avatar.textContent = 'AS';
            }
        } catch (e) { }
    }
    function resetCounterFromAvatar() {
        clickCount = 0;
        updateCounter();
        avatar.style.transform = 'scale(0.9) rotate(8deg)';
        setTimeout(() => { avatar.style.transform = ''; }, 250);
        bioText.textContent = 'Reset! Click again.';
        setTimeout(() => {
            bioText.textContent = bioVariants[bioIndex];
        }, 1200);
    }
    clickBtn.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', handleReset);
    changeBioBtn.addEventListener('click', changeBio);
    themeToggle.addEventListener('click', toggleTheme);
    avatar.addEventListener('dblclick', resetCounterFromAvatar);
    loadTheme();
    updateCounter();
    console.log('Mini site loaded! Enjoy.');
    console.log('Tip: double-click the avatar');
})();
(function () {
    "use strict";
    const counterEl = document.getElementById('clickCounter');
    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const changeBioBtn = document.getElementById('changeBioBtn');
    const bioText = document.getElementById('bioText');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const avatar = document.getElementById('avatar');
    let clickCount = 0;
    let isDark = false;
    function updateCounter() {
        counterEl.textContent = clickCount;
    }
    function handleClick() {
        clickCount += 1;
        updateCounter();
        clickBtn.style.transform = 'scale(0.96)';
        setTimeout(() => { clickBtn.style.transform = ''; }, 150);
    }
    function handleReset() {
        clickCount = 0;
        updateCounter();
        resetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { resetBtn.style.transform = ''; }, 150);
    }
    let bioIndex = 0;
    function changeBio() {
        bioIndex = (bioIndex + 1) % bioVariants.length;
        bioText.textContent = bioVariants[bioIndex];
        bioText.style.transition = 'background 0.2s';
        bioText.style.background = '#d9d7f5';
        setTimeout(() => {
            bioText.style.background = body.classList.contains('dark') ? '#2a2a3b' : '#f8f9fe';
        }, 200);
    }
    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            body.classList.add('dark');
            themeToggle.textContent = 'Light theme';
            avatar.textContent = 'AS';
        } else {
            body.classList.remove('dark');
            themeToggle.textContent = 'Dark theme';
            avatar.textContent = 'AS';
        }
        try {
            localStorage.setItem('themePreference', isDark ? 'dark' : 'light');
        } catch (e) { }
    }
    function loadTheme() {
        try {
            const saved = localStorage.getItem('themePreference');
            if (saved === 'dark') {
                isDark = true;
                body.classList.add('dark');
                themeToggle.textContent = 'Light theme';
                avatar.textContent = 'AS';
            } else if (saved === 'light') {
                isDark = false;
                body.classList.remove('dark');
                themeToggle.textContent = 'Dark theme';
                avatar.textContent = 'AS';
            }
        } catch (e) { }
    }
    function resetCounterFromAvatar() {
        clickCount = 0;
        updateCounter();
        avatar.style.transform = 'scale(0.9) rotate(8deg)';
        setTimeout(() => { avatar.style.transform = ''; }, 250);
        bioText.textContent = 'Reset! Click again.';
        setTimeout(() => {
            bioText.textContent = bioVariants[bioIndex];
        }, 1200);
    }
    clickBtn.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', handleReset);
    changeBioBtn.addEventListener('click', changeBio);
    themeToggle.addEventListener('click', toggleTheme);
    avatar.addEventListener('dblclick', resetCounterFromAvatar);
    loadTheme();
    updateCounter();
    console.log('Mini site loaded! Enjoy.');
    console.log('Tip: double-click the avatar');
})();
(function () {
    "use strict";
    const counterEl = document.getElementById('clickCounter');
    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const changeBioBtn = document.getElementById('changeBioBtn');
    const bioText = document.getElementById('bioText');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const avatar = document.getElementById('avatar');
    let clickCount = 0;
    let isDark = false;
    function updateCounter() {
        counterEl.textContent = clickCount;
    }
    function handleClick() {
        clickCount += 1;
        updateCounter();
        clickBtn.style.transform = 'scale(0.96)';
        setTimeout(() => { clickBtn.style.transform = ''; }, 150);
    }
    function handleReset() {
        clickCount = 0;
        updateCounter();
        resetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { resetBtn.style.transform = ''; }, 150);
    }
    let bioIndex = 0;
    function changeBio() {
        bioIndex = (bioIndex + 1) % bioVariants.length;
        bioText.textContent = bioVariants[bioIndex];
        bioText.style.transition = 'background 0.2s';
        bioText.style.background = '#d9d7f5';
        setTimeout(() => {
            bioText.style.background = body.classList.contains('dark') ? '#2a2a3b' : '#f8f9fe';
        }, 200);
    }
    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            body.classList.add('dark');
            themeToggle.textContent = 'Light theme';
            avatar.textContent = 'AS';
        } else {
            body.classList.remove('dark');
            themeToggle.textContent = 'Dark theme';
            avatar.textContent = 'AS';
        }
        try {
            localStorage.setItem('themePreference', isDark ? 'dark' : 'light');
        } catch (e) { }
    }
    function loadTheme() {
        try {
            const saved = localStorage.getItem('themePreference');
            if (saved === 'dark') {
                isDark = true;
                body.classList.add('dark');
                themeToggle.textContent = 'Light theme';
                avatar.textContent = 'AS';
            } else if (saved === 'light') {
                isDark = false;
                body.classList.remove('dark');
                themeToggle.textContent = 'Dark theme';
                avatar.textContent = 'AS';
            }
        } catch (e) { }
    }
    function resetCounterFromAvatar() {
        clickCount = 0;
        updateCounter();
        avatar.style.transform = 'scale(0.9) rotate(8deg)';
        setTimeout(() => { avatar.style.transform = ''; }, 250);
        bioText.textContent = 'Reset! Click again.';
        setTimeout(() => {
            bioText.textContent = bioVariants[bioIndex];
        }, 1200);
    }
    clickBtn.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', handleReset);
    changeBioBtn.addEventListener('click', changeBio);
    themeToggle.addEventListener('click', toggleTheme);
    avatar.addEventListener('dblclick', resetCounterFromAvatar);
    loadTheme();
    updateCounter();
    console.log('Mini site loaded! Enjoy.');
    console.log('Tip: double-click the avatar');
})();
(function () {
    "use strict";
    const counterEl = document.getElementById('clickCounter');
    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const changeBioBtn = document.getElementById('changeBioBtn');
    const bioText = document.getElementById('bioText');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const avatar = document.getElementById('avatar');
    let clickCount = 0;
    let isDark = false;
    function updateCounter() {
        counterEl.textContent = clickCount;
    }
    function handleClick() {
        clickCount += 1;
        updateCounter();
        clickBtn.style.transform = 'scale(0.96)';
        setTimeout(() => { clickBtn.style.transform = ''; }, 150);
    }
    function handleReset() {
        clickCount = 0;
        updateCounter();
        resetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { resetBtn.style.transform = ''; }, 150);
    }
    let bioIndex = 0;
    function changeBio() {
        bioIndex = (bioIndex + 1) % bioVariants.length;
        bioText.textContent = bioVariants[bioIndex];
        bioText.style.transition = 'background 0.2s';
        bioText.style.background = '#d9d7f5';
        setTimeout(() => {
            bioText.style.background = body.classList.contains('dark') ? '#2a2a3b' : '#f8f9fe';
        }, 200);
    }
    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            body.classList.add('dark');
            themeToggle.textContent = 'Light theme';
            avatar.textContent = 'AS';
        } else {
            body.classList.remove('dark');
            themeToggle.textContent = 'Dark theme';
            avatar.textContent = 'AS';
        }
        try {
            localStorage.setItem('themePreference', isDark ? 'dark' : 'light');
        } catch (e) { }
    }
    function loadTheme() {
        try {
            const saved = localStorage.getItem('themePreference');
            if (saved === 'dark') {
                isDark = true;
                body.classList.add('dark');
                themeToggle.textContent = 'Light theme';
                avatar.textContent = 'AS';
            } else if (saved === 'light') {
                isDark = false;
                body.classList.remove('dark');
                themeToggle.textContent = 'Dark theme';
                avatar.textContent = 'AS';
            }
        } catch (e) { }
    }
    function resetCounterFromAvatar() {
        clickCount = 0;
        updateCounter();
        avatar.style.transform = 'scale(0.9) rotate(8deg)';
        setTimeout(() => { avatar.style.transform = ''; }, 250);
        bioText.textContent = 'Reset! Click again.';
        setTimeout(() => {
            bioText.textContent = bioVariants[bioIndex];
        }, 1200);
    }
    clickBtn.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', handleReset);
    changeBioBtn.addEventListener('click', changeBio);
    themeToggle.addEventListener('click', toggleTheme);
    avatar.addEventListener('dblclick', resetCounterFromAvatar);
    loadTheme();
    updateCounter();
    console.log('Mini site loaded! Enjoy.');
    console.log('Tip: double-click the avatar');
})();
(function () {
    "use strict";
    const counterEl = document.getElementById('clickCounter');
    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const changeBioBtn = document.getElementById('changeBioBtn');
    const bioText = document.getElementById('bioText');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const avatar = document.getElementById('avatar');
    let clickCount = 0;
    let isDark = false;
    function updateCounter() {
        counterEl.textContent = clickCount;
    }
    function handleClick() {
        clickCount += 1;
        updateCounter();
        clickBtn.style.transform = 'scale(0.96)';
        setTimeout(() => { clickBtn.style.transform = ''; }, 150);
    }
    function handleReset() {
        clickCount = 0;
        updateCounter();
        resetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { resetBtn.style.transform = ''; }, 150);
    }
    let bioIndex = 0;
    function changeBio() {
        bioIndex = (bioIndex + 1) % bioVariants.length;
        bioText.textContent = bioVariants[bioIndex];
        bioText.style.transition = 'background 0.2s';
        bioText.style.background = '#d9d7f5';
        setTimeout(() => {
            bioText.style.background = body.classList.contains('dark') ? '#2a2a3b' : '#f8f9fe';
        }, 200);
    }
    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            body.classList.add('dark');
            themeToggle.textContent = 'Light theme';
            avatar.textContent = 'AS';
        } else {
            body.classList.remove('dark');
            themeToggle.textContent = 'Dark theme';
            avatar.textContent = 'AS';
        }
        try {
            localStorage.setItem('themePreference', isDark ? 'dark' : 'light');
        } catch (e) { }
    }
    function loadTheme() {
        try {
            const saved = localStorage.getItem('themePreference');
            if (saved === 'dark') {
                isDark = true;
                body.classList.add('dark');
                themeToggle.textContent = 'Light theme';
                avatar.textContent = 'AS';
            } else if (saved === 'light') {
                isDark = false;
                body.classList.remove('dark');
                themeToggle.textContent = 'Dark theme';
                avatar.textContent = 'AS';
            }
        } catch (e) { }
    }
    function resetCounterFromAvatar() {
        clickCount = 0;
        updateCounter();
        avatar.style.transform = 'scale(0.9) rotate(8deg)';
        setTimeout(() => { avatar.style.transform = ''; }, 250);
        bioText.textContent = 'Reset! Click again.';
        setTimeout(() => {
            bioText.textContent = bioVariants[bioIndex];
        }, 1200);
    }
    clickBtn.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', handleReset);
    changeBioBtn.addEventListener('click', changeBio);
    themeToggle.addEventListener('click', toggleTheme);
    avatar.addEventListener('dblclick', resetCounterFromAvatar);
    loadTheme();
    updateCounter();
    console.log('Mini site loaded! Enjoy.');
    console.log('Tip: double-click the avatar');
})();
