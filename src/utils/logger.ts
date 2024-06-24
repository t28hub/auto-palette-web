import pino, { type Logger as PinoLogger } from 'pino';

const Logger: PinoLogger =
  process.env.NODE_ENV === 'production'
    ? pino({ level: 'warn' })
    : pino({ level: 'debug', transport: { target: 'pino-pretty', options: { colorize: true } } });

/**
 * Log levels.
 */
type Level = 'debug' | 'info' | 'warn' | 'error';

/**
 * Log function type.
 *
 * @param message - The message to log.
 * @param args - Additional arguments to log.
 */
type LogFn = (message: string, ...args: unknown[]) => void;

const logger: Record<Level, LogFn> = {
  debug: (message, args) => Logger.debug(message, args),
  info: (message, args) => Logger.info(message, args),
  warn: (message, args) => Logger.warn(message, args),
  error: (message, args) => Logger.error(message, args),
};

export { logger };
