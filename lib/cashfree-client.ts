import { Cashfree, CFEnvironment } from "cashfree-pg";

// Initialize Cashfree Instance
const appId = process.env.CASHFREE_APP_ID;
const secretKey = process.env.CASHFREE_SECRET_KEY;

// Auto-detect environment based on key prefix or NODE_ENV
const isProdKey = secretKey?.startsWith("cfsk_ma_prod");
const environment =
  process.env.NODE_ENV === "production" || isProdKey
    ? CFEnvironment.PRODUCTION
    : CFEnvironment.SANDBOX;

// Initialize Cashfree Instance
const cashfree = new Cashfree(environment, appId, secretKey);
cashfree.XApiVersion = "2023-08-01";

export default cashfree;
