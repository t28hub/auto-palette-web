import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Header } from '@/components/layouts';

describe('Header', () => {
  test('render', () => {
    // Act
    render(<Header />);

    // Assert
    expect(document.querySelector('header')).toBeDefined();
    expect(screen.getByText('Auto Palette')).toBeDefined();
    expect(screen.getByText('GitHub')).toBeDefined();
  });
});
