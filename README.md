Simple example of caching using service worker.

Install dependencies `npm i` and then run `npm run start` to initialize a serverserving index.html file.

index.html will register a service worker and cache /data content, which will be fetched after during secondary page load (check chrome developer tools for network calls and service worker tab).
