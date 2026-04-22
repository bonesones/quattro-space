const COOKIE_CONSENT_FLAG_KEY = "cookieConsentSaved";
const COOKIE_CONSENT_PREFS_KEY = "cookieConsentPreferences";

const createCookieBannerMarkup = () => `
<style>
  .custom-checkbox {
    appearance: none;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #4CAF50;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
  }
  
  .custom-checkbox:checked {
    background-color: #4CAF50;
    border-color: #4CAF50;
  }
  
  .custom-checkbox:checked::after {
    content: '✓';
    position: absolute;
    color: white;
    font-size: 13px;
    font-weight: bold;
    left: 2px;
    top: -1px;
  }
  
  .custom-checkbox:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
  }
</style>

<div
  id="cookie-banner"
  class="fixed right-4 bottom-4 z-[1200] max-w-[360px] w-[calc(100%-32px)] bg-white border border-gray-200 rounded-xl shadow-lg p-4 text-gray-800"
>
  <p class="mb-2 font-bold">Настройки Cookie</p>
  <p class="mb-2 text-sm leading-tight">
    Наш сайт использует файлы cookie, чтобы улучшить работу сайта, повысить его эффективность и удобство.
  </p>
  <p class="mb-2 text-sm leading-tight">
    Продолжая использовать сайт, вы соглашаетесь на
    <a href="/cookie-policy/" target="_blank" rel="noopener noreferrer" class="text-[#4CAF50] hover:text-green-600">
      использование файлов cookie.
    </a>
  </p>
  <p class="mb-2 text-sm font-medium">
    Системные cookie необходимы для работы сайта и всегда включены.
  </p>

  <button
    id="toggle-cookie-settings"
    type="button"
    class="flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0 mb-3.5 text-sm text-[#939393] hover:text-gray-800"
    aria-expanded="false"
    aria-controls="cookie-settings"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: middle;">
      <path d="M8 1a1 1 0 0 1 1 1v1.07a5.96 5.96 0 0 1 2.292.773l.76-.76a1 1 0 0 1 1.414 1.414l-.76.76A5.96 5.96 0 0 1 13.93 7H15a1 1 0 0 1 0 2h-1.07a5.96 5.96 0 0 1-.773 2.292l.76.76a1 1 0 0 1-1.414 1.414l-.76-.76A5.96 5.96 0 0 1 9 13.93V15a1 1 0 0 1-2 0v-1.07a5.96 5.96 0 0 1-2.292-.773l-.76.76a1 1 0 0 1-1.414-1.414l.76-.76A5.96 5.96 0 0 1 2.07 9H1a1 1 0 0 1 0-2h1.07a5.96 5.96 0 0 1 .773-2.292l-.76-.76a1 1 0 1 1 1.414-1.414l.76.76A5.96 5.96 0 0 1 7 3.07V2a1 1 0 0 1 1-1zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
    </svg>
    Настроить
  </button>

  <div id="cookie-settings" class="hidden mb-3">
    <div class="flex items-center gap-2 mb-1.5">
      <input type="checkbox" id="cookie-analytics" checked class="custom-checkbox" />
      <label for="cookie-analytics" class="text-sm">Аналитические cookie</label>
    </div>
    <div class="flex items-center gap-2">
      <input type="checkbox" id="cookie-ads" checked class="custom-checkbox" />
      <label for="cookie-ads" class="text-sm">Рекламные cookie</label>
    </div>
  </div>

  <button
    id="accept-cookie-settings"
    type="button"
    class="inline-flex justify-center items-center h-[38px] px-3.5 rounded-lg border-none cursor-pointer text-sm bg-[#4CAF50] text-white hover:bg-green-600 transition-colors"
  >
    Принять
  </button>
</div>
`;

const saveCookieConsent = ({ analytics, ads }) => {
  localStorage.setItem(COOKIE_CONSENT_FLAG_KEY, "1");
  localStorage.setItem(
    COOKIE_CONSENT_PREFS_KEY,
    JSON.stringify({ analytics, ads, savedAt: new Date().toISOString() })
  );
};

export const initCookieBanner = () => {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(COOKIE_CONSENT_FLAG_KEY)) return;
  if (document.getElementById("cookie-banner")) return;

  document.body.insertAdjacentHTML("beforeend", createCookieBannerMarkup());

  const banner = document.getElementById("cookie-banner");
  const settings = document.getElementById("cookie-settings");
  const toggleButton = document.getElementById("toggle-cookie-settings");
  const acceptButton = document.getElementById("accept-cookie-settings");
  const analyticsCheckbox = document.getElementById("cookie-analytics");
  const adsCheckbox = document.getElementById("cookie-ads");

  if (
    !banner ||
    !settings ||
    !toggleButton ||
    !acceptButton ||
    !analyticsCheckbox ||
    !adsCheckbox
  ) {
    return;
  }

  let isSettingsOpen = false;

  toggleButton.addEventListener("click", () => {
    isSettingsOpen = !isSettingsOpen;
    settings.style.display = isSettingsOpen ? "block" : "none";
    toggleButton.setAttribute("aria-expanded", String(isSettingsOpen));
  });

  acceptButton.addEventListener("click", () => {
    saveCookieConsent({
      analytics: Boolean(analyticsCheckbox.checked),
      ads: Boolean(adsCheckbox.checked)
    });
    banner.remove();
  });
};