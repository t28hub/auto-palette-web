'use client';

import { AnimatePresence, motion, useWillChange, type Variants } from 'framer-motion';
import { type FC, useCallback, useEffect } from 'react';
import { useCopy } from '@/hooks';
import { cn, logger } from '@/utils';
import { Button } from '@/components/ui';
import { CheckIcon, CopyIcon } from '@/components/icons';

/**
 * The properties of the copy button component.
 */
interface CopyButtonProps {
  /**
   * The class name for the copy button.
   */
  readonly className?: string;

  /**
   * The text to copy.
   */
  readonly text: string;

  /**
   * Whether the copy button is disabled.
   */
  readonly disabled?: boolean;

  /**
   * The duration to display the copied message.
   */
  readonly duration?: number;
}

/**
 * The copy button component.
 */
const CopyButton: FC<CopyButtonProps> = ({ className, text, disabled = false, duration = 2000 }) => {
  const willChange = useWillChange();
  const { copy, copied, error } = useCopy({ duration });

  const motionVariants: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const onClick = useCallback(() => {
    copy(text);
  }, [copy, text]);

  useEffect(() => {
    if (error) {
      logger.warn(`Failed to copy text: ${error.message}`);
    }
  }, [error]);

  return (
    <Button
      className={cn('focus-visible:ring-0', className)}
      variant='ghost'
      size='icon'
      onClick={onClick}
      disabled={disabled}
    >
      <AnimatePresence initial={false} mode='wait'>
        {copied ? (
          <motion.div
            key='copied'
            initial='hidden'
            animate='visible'
            exit='visible'
            variants={motionVariants}
            style={{ willChange }}
          >
            <CheckIcon className='h-4 w-4 stroke-muted-foreground' strokeWidth={1.5} />
          </motion.div>
        ) : (
          <motion.div
            key='copy'
            initial='hidden'
            animate='visible'
            exit='visible'
            variants={motionVariants}
            style={{ willChange }}
          >
            <CopyIcon className='h-4 w-4 stroke-muted-foreground' strokeWidth={1.5} />
          </motion.div>
        )}
      </AnimatePresence>
      <span className='sr-only'>{copied ? 'Copied!' : 'Copy'}</span>
    </Button>
  );
};
CopyButton.displayName = 'CopyButton';

export { CopyButton };
