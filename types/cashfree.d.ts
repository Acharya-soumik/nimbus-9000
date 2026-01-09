declare module '@cashfreepayments/cashfree-js' {
    export interface CashfreeSDK {
        checkout: (options: { 
            paymentSessionId: string; 
            redirectTarget?: "_self" | "_blank" | "_top" | "_parent";
            returnUrl?: string;
        }) => void;
    }

    export interface LoadOptions {
        mode: "sandbox" | "production";
    }

    export function load(options: LoadOptions): Promise<CashfreeSDK>;
}
