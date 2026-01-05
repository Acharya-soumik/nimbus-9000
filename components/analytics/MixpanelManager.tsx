"use client";

import { useEffect } from "react";
import { initMixpanel } from "@/lib/mixpanel";

export default function MixpanelManager() {
  useEffect(() => {
    initMixpanel();
  }, []);

  return null;
}
