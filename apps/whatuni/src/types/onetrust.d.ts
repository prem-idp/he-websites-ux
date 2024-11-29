import { googletag } from 'googletag';

declare global {
interface Window {
    OptanonWrapper?: () => void;
    Optanon?: {
      IsConsented: (categoryId: string) => boolean;
      IsAlertBoxClosed: any
    };
    OnetrustActiveGroups?: {
        includes: (categoryId: string) => boolean;
    };
    googletag?: typeof googletag

  }

  declare var OnetrustActiveGroups: string;OneTrust

}

  
  export {};
  