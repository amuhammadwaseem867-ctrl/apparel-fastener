"use client";

import { useEffect } from "react";

/*
  Adds `.is-visible` to every [data-reveal] element as it enters
  the viewport. A MutationObserver picks up elements rendered by
  client-side navigation, so pages don't need their own hooks.
*/
export default function RevealObserver() {
  useEffect(() => {
    const intersection = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            intersection.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    const observeWithin = (root) => {
      if (root.matches?.("[data-reveal]")) intersection.observe(root);
      root
        .querySelectorAll?.("[data-reveal]:not(.is-visible)")
        .forEach((element) => intersection.observe(element));
    };

    observeWithin(document.body);

    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observeWithin(node);
        });
      }
    });

    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersection.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
