import "../styles.css";

/* export function reportWebVitals(metric) {
  switch (metric.name) {
    case "FCP":
      // handle FCP results
      console.log(metric);
      break;
    case "LCP":
      // handle LCP results
      console.log(metric);
      break;
    case "CLS":
      // handle CLS results
      console.log(metric);
      break;
    case "FID":
      // handle FID results
      console.log(metric);
      break;
    case "TTFB":
      // handle TTFB results
      console.log(metric);
      break;
    case "Next.js-hydration":
      // handle hydration results
      console.log(metric);
      break;
    case "Next.js-route-change-to-render":
      // handle route-change to render results
      console.log(metric);
      break;
    case "Next.js-render":
      // handle render results
      console.log(metric);
      break;
    default:
      break;
  }
} */

export default function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
