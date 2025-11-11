(function () {
    'use strict';

    async function loadRandomTip() {
        const tipEl = document.querySelector('.randomTip');
        if (!tipEl) return;

        try {
            const res = await fetch('assets/scripts/tips.json', { cache: 'no-cache' });
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const tips = await res.json();
            if (!Array.isArray(tips) || tips.length === 0) throw new Error('No tips in JSON');
            const idx = Math.floor(Math.random() * tips.length);
            tipEl.innerHTML = tips[idx];
        } catch (err) {
            console.warn('Could not load tips.', err);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadRandomTip);
    } else {
        loadRandomTip();
    }
})();
