// global.d.ts
interface Window {
  Optanon?: {
    IsAlertBoxClosed: () => boolean;
  };
  OptanonActiveGroups?: string;
  OptanonActiveGroups?: string;
  ga?: (...args: any[]) => void;
}
