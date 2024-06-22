import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

test('Page', () => {
  // Act
  render(<Page />);

  // Assert
  expect(screen.getByText('Automatic Palette Extraction')).toBeDefined();
  expect(screen.getByText('Detailed Color Insights')).toBeDefined();
  expect(screen.getByText('Multiple Algorithms Support')).toBeDefined();
  expect(screen.getByText('Theme-Based Color Selection')).toBeDefined();
  expect(screen.getByText('Multiple Color Spaces Support')).toBeDefined();
  expect(screen.getByText('Multiple Languages Support')).toBeDefined();
});
