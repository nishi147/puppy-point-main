import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    title: "Buy Puppies in Delhi NCR | Puppy Palace — 19+ Premium Breeds | Home Delivery",
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Buy healthy, vaccinated, ethically raised puppies in Delhi NCR. 19+ premium breeds — Golden Retriever, Labrador, Pomeranian, Shih Tzu, Husky, German Shepherd & more. Call +91 95555 44416. Home delivery across Delhi, Gurgaon, Noida, Faridabad & Ghaziabad." },
      { name: "keywords", content: "puppies for sale in Delhi, puppies for sale Delhi NCR, buy puppy Delhi, puppy shop Delhi NCR, dog for sale Delhi, buy puppy Gurgaon, buy puppy Noida, buy puppy Faridabad, buy puppy Ghaziabad, Golden Retriever puppy Delhi, Labrador puppy Delhi, Pomeranian puppy Delhi, Shih Tzu puppy Delhi, German Shepherd puppy Delhi, Husky puppy Delhi, Beagle puppy Delhi, Rottweiler puppy Delhi, French Bulldog puppy Delhi, Pug puppy Delhi, Maltese puppy Delhi, Toy Poodle puppy Delhi, Cocker Spaniel puppy Delhi, Dachshund puppy Delhi, Bichon Frise puppy Delhi, Tibetan Mastiff puppy Delhi, Cavalier King Charles puppy Delhi, KCI registered puppies Delhi, vaccinated puppies Delhi, health certified puppies Delhi NCR, puppy home delivery Delhi NCR, ethical puppy breeder Delhi, best puppy seller Delhi NCR, Puppy Palace Delhi" },
      { name: "author", content: "Puppy Palace" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Delhi NCR, India" },
      { name: "geo.position", content: "28.6139;77.2090" },
      { name: "ICBM", content: "28.6139, 77.2090" },
      { name: "theme-color", content: "#c9972b" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Puppy Palace" },
      { name: "application-name", content: "Puppy Palace" },
      { name: "format-detection", content: "telephone=yes" },
      { property: "og:title", content: "Buy Puppies in Delhi NCR | Puppy Palace — 19+ Premium Breeds" },
      { property: "og:description", content: "Healthy, vaccinated, ethically raised puppies from trusted breeders. 19+ premium breeds. Home delivery across Delhi, Gurgaon, Noida & NCR. Call +91 95555 44416." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thepuppypalace.store/" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Puppy Palace" },
      { property: "og:image", content: "https://thepuppypalace.store/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Puppy Palace — Premium Puppies for Sale in Delhi NCR" },
      { property: "og:image:type", content: "image/jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Buy Puppies in Delhi NCR | Puppy Palace — 19+ Premium Breeds" },
      { name: "twitter:description", content: "Healthy, vaccinated puppies in Delhi NCR. 19+ premium breeds. Home delivery available. Call +91 95555 44416." },
      { name: "twitter:image", content: "https://thepuppypalace.store/og-image.jpg" },
      { name: "twitter:image:alt", content: "Puppy Palace — Premium Puppies for Sale in Delhi NCR" },
      { name: "twitter:site", content: "@puppypalacedelhi" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://thepuppypalace.store/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" },
      { rel: "preload", href: "https://thepuppypalace.store/og-image.jpg", as: "image" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" prefix="og: https://ogp.me/ns#">
      <head>
        {/* Google Ads tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18334380792" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-18334380792');
`,
          }}
        />
        {/* Google Ads conversion event snippet */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-18334380792/-U61CIP649YcEPjlwaZE',
    'value': 1.0,
    'currency': 'INR',
    'event_callback': callback
  });
  return false;
}
`,
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    let cleanupCalled = false;
    let clarityRef: typeof import("clarity-js")["clarity"] | null = null;
    import("clarity-js").then(({ clarity }) => {
      if (cleanupCalled) return;
      clarityRef = clarity;
      clarity.start({
        projectId: "xq9eto0ep1",
        upload: "https://www.clarity.ms/collect",
        track: true,
        content: true,
      });
    });
    return () => {
      cleanupCalled = true;
      clarityRef?.stop();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
