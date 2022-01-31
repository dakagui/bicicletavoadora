import * as Monitoring  from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import { variables } from '$lib/variables';

Monitoring.init({
    dsn: variables.sentryDNS,
    integrations: [new Integrations.BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

export default Monitoring;