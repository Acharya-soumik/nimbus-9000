"use client";

import { useEffect } from "react";
import { initMixpanel, extractAndStoreUTMS } from "@/lib/mixpanel";

export default function MixpanelManager() {
  useEffect(() => {
    initMixpanel();
    extractAndStoreUTMS();
  }, []);

  return null;
}
