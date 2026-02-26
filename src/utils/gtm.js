/**
 * GTM (Google Tag Manager) event logging utility
 * Also falls back to gtag if available so events show up in GA4 debug
 */

export const logGTMEvent = (eventName, eventData = {}) => {
  let pushed = false;

  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
    pushed = true;
    console.log(`dataLayer push: ${eventName}`, eventData);
  }

  if (window.gtag) {
    try {
      window.gtag("event", eventName, eventData);
      pushed = true;
      console.log(`gtag event: ${eventName}`, eventData);
    } catch (e) {
      console.warn("gtag call failed", e);
    }
  }

  if (!pushed) {
    console.warn("GTM event not sent (no dataLayer or gtag)", eventName);
  }
};

export const logPageView = (pageName) => {
  logGTMEvent("page_view", {
    page_title: pageName,
    page_path: window.location.pathname,
  });
};
