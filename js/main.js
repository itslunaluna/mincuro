// ========================================
// MAIN APPLICATION
// ========================================
const links = typeof LINKS !== 'undefined' ? LINKS : {};

// ========================================
// RENDER SHOP LINKS
// ========================================
function renderShopLinks() {
    const container = document.getElementById('shopLinks');
    if (!container) return;

    const shops = [
        { 
            url: links.shopee, 
            label: 'Shop on Shopee',
            className: 'btn-shop'
        },
        { 
            url: links.tiktokShop, 
            label: 'Shop on TikTok Shop',
            className: 'btn-shop btn-shop-secondary'
        },
        { 
            url: links.tokopedia, 
            label: 'Shop on Tokopedia',
            className: 'btn-shop btn-shop-tertiary'
        }
    ];

    container.innerHTML = shops.map(shop => `
        <a href="${shop.url}" 
           class="${shop.className}" 
           target="_blank" 
           rel="noopener noreferrer">
            ${shop.label}
        </a>
    `).join('');
}

// ========================================
// RENDER SOCIAL LINKS
// ========================================
function renderSocialLinks() {
    const container = document.getElementById('socialLinks');
    if (!container) return;

    const socials = [
        { 
            url: links.instagram, 
            label: 'Instagram',
            icon: getInstagramIcon()
        },
        { 
            url: links.tiktok, 
            label: 'TikTok',
            icon: getTikTokIcon()
        },
        { 
            url: links.pinterest, 
            label: 'Pinterest',
            icon: getPinterestIcon()
        }
    ];

    container.innerHTML = socials.map(social => `
        <a href="${social.url}" 
           class="social-link" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="${social.label}">
            ${social.icon}
        </a>
    `).join('');
}

// ========================================
// RENDER CONTACT
// ========================================
function renderContact() {
    const container = document.getElementById('contactEmail');
    if (!container) return;

    container.innerHTML = `
        <a href="mailto:${links.email}">
            ${links.email}
        </a>
    `;
}

// ========================================
// SOCIAL ICONS (SVG)
// ========================================
function getInstagramIcon() {
    return `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    `;
}

function getTikTokIcon() {
    return `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
    `;
}

function getPinterestIcon() {
    return `
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.23 2.63 7.84 6.35 9.28-.09-1.22-.02-2.69.3-3.86l1.1-4.65s-.28-.56-.28-1.39c0-1.3.75-2.27 1.68-2.27.79 0 1.17.59 1.17 1.3 0 .79-.5 1.96-.76 3.05-.22.91.46 1.65 1.36 1.65 1.63 0 2.88-1.72 2.88-4.2 0-2.2-1.58-3.74-3.84-3.74-2.61 0-4.14 1.96-4.14 3.98 0 .79.3 1.64.68 2.1.07.09.08.17.06.26l-.25 1.02c-.04.16-.13.19-.3.12-1.12-.52-1.82-2.15-1.82-3.46 0-2.81 2.04-5.39 5.88-5.39 3.09 0 5.49 2.2 5.49 5.14 0 3.07-1.93 5.54-4.61 5.54-.9 0-1.75-.47-2.04-1.02l-.55 2.1c-.2.77-.74 1.74-1.1 2.33.83.25 1.7.38 2.6.38 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
    `;
}

// ========================================
// SET CURRENT YEAR IN FOOTER
// ========================================
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    renderShopLinks();
    renderSocialLinks();
    renderContact();
    setCurrentYear();
});