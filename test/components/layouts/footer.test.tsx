import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';
import { Footer } from '@/components/layouts';

test('Footer', () => {
  // Arrange
  const year = new Date().getFullYear();

  // Act
  render(<Footer license='MIT' copyrightHolder='Alice' />);

  // Assert
  expect(document.querySelector('footer')).toBeDefined();
  expect(screen.getByText('Released under the MIT License.')).toBeDefined();
  expect(screen.getByText(`© ${year} Alice. All rights reserved.`)).toBeDefined();
});
