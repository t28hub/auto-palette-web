import { describe, expect, test, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useCopy } from '@/hooks/use-copy';

describe('useCopy', () => {
  test('should copy the text to the clipboard', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(() => Promise.resolve()),
      },
    });

    const { result } = renderHook(() => useCopy({ duration: 0 }));
    result.current.copy('Hello, World!');

    // Verify the text is copied to the clipboard
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Hello, World!');
  });
});
