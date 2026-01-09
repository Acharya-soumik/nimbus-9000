import { Cashfree, CFEnvironment } from "cashfree-pg";

// Initialize Cashfree Instance
const cashfree = new Cashfree();
const appId = process.env.CASHFREE_APP_ID;
const secretKey = process.env.CASHFREE_SECRET_KEY;

cashfree.XClientId = appId || "";
cashfree.XClientSecret = secretKey || "";

// Auto-detect environment based on key prefix or NODE_ENV
const isProdKey = secretKey?.startsWith("cfsk_ma_prod");
cashfree.XEnvironment =
  process.env.NODE_ENV === "production" || isProdKey
    ? CFEnvironment.PRODUCTION
    : CFEnvironment.SANDBOX;

cashfree.XApiVersion = "2023-08-01";

export default cashfree;
