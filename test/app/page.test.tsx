import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

test('Page', () => {
  // Act
  render(<Page />);

  // Assert
  expect(screen.getByText('src/app/page.tsx')).toBeDefined();
});
