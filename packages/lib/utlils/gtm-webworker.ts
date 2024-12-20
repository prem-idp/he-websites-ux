const initializeGTM = (gtmId: string) => {
  self.dataLayer = self.dataLayer || [];

  function gtag(...args: any[]) {
    self.dataLayer.push(args);
  }

  gtag("js", new Date());
  gtag("config", gtmId);
};

self.addEventListener("message", (event) => {
  if (event.data.type === "INIT_GTM") {
    initializeGTM(event.data.gtmId);
  }
});
