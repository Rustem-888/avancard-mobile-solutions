
interface Window {
  amo_forms_params?: {
    setMeta: (p: any) => void;
    params?: any[];
  };
  amo_forms_load?: {
    (options: { id: string; hash: string; locale: string }): void;
    f?: any[];
  };
  amo_forms_loaded?: {
    (formId: number, action: string): void;
    f?: any[][];
  };
}
