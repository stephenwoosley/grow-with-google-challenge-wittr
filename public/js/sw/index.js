console.log("hello!");

self.addEventListener('fetch', (event) => {
  console.log(event.request);
});