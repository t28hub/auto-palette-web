import { useCallback, useEffect, useState } from 'react';

/**
 * The options for the useCopy hook.
 */
interface UseCopyOptions {
  /**
   * The duration to display the copied message.
   */
  readonly duration?: number;
}

/**
 * The result of the useCopy hook.
 */
interface UseCopyResult {
  /**
   * The copy function.
   */
  readonly copy: (text: string) => void;

  /**
   * The error that occurred during copying.
   */
  readonly error: Error | null;

  /**
   * The copied state.
   */
  readonly copied: boolean;
}

/**
 * The useCopy hook copies text to the clipboard.
 *
 * @param options - The options for the hook.
 * @returns The result of the hook.
 */
const useCopy = ({ duration = 2000 }: UseCopyOptions = {}): UseCopyResult => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const copy = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setError(null);
      })
      .catch((cause) => {
        setCopied(false);
        setError(cause);
      });
  }, []);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const id = setTimeout(() => {
      setCopied(false);
    }, duration);

    return () => {
      clearTimeout(id);
    };
  }, [copied, duration]);

  return { copy, error, copied };
};

export { useCopy };
