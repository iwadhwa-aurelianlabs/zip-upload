// Analytics event tracking for Aurelian Labs
// Replace with actual analytics implementation (e.g., Segment, Mixpanel, GA4)

type AnalyticsEvent = 
  | 'cta_click_financing_help'
  | 'cta_click_partner_with_us'
  | 'cta_click_hbh_prequal'
  | 'form_submit_financing_help'
  | 'form_submit_hbh_prequal'
  | 'form_submit_partnership';

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

export const trackEvent = (event: AnalyticsEvent, properties?: EventProperties): void => {
  // Console log in development
  if (import.meta.env.DEV) {
    console.log('[Analytics]', event, properties);
  }
  
  // Production analytics implementation would go here
  // Example: window.analytics?.track(event, properties);
};

export const trackPageView = (path: string, title: string): void => {
  if (import.meta.env.DEV) {
    console.log('[Analytics] Page View:', path, title);
  }
};
