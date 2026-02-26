/**
 * GTM (Google Tag Manager) event logging utility
 */

export const logGTMEvent = (eventName, eventData = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
    console.log(`GTM Event logged: ${eventName}`, eventData);
  } else {
    console.warn("dataLayer not found - GTM may not be initialized");
  }
};

export const logPageView = (pageName) => {
  logGTMEvent("page_view", {
    page_title: pageName,
    page_path: window.location.pathname,
  });
};
