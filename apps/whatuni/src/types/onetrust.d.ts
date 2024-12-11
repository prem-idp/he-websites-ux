declare global {
  interface Window {
    OptanonWrapper?: () => void;
    Optanon?: {
      IsConsented: (categoryId: string) => boolean;
      IsAlertBoxClosed: any;
    };
    OnetrustActiveGroups?: string[]; // Assuming it's an array of strings
    googletag?: typeof googletag;
  }

  const OnetrustActiveGroups: string[]; // Use const instead of var
}

export {};