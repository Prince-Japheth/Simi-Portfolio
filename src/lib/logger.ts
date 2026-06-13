type LogLevel = 'info' | 'warn' | 'error' | 'debug';

const LOG_PREFIX = '[SIMI Portfolio]';

function formatMessage(scope: string, message: string) {
  return `${LOG_PREFIX} [${scope}] ${message}`;
}

export const logger = {
  info(scope: string, message: string, data?: unknown) {
    if (data !== undefined) {
      console.info(formatMessage(scope, message), data);
      return;
    }
    console.info(formatMessage(scope, message));
  },
  warn(scope: string, message: string, data?: unknown) {
    if (data !== undefined) {
      console.warn(formatMessage(scope, message), data);
      return;
    }
    console.warn(formatMessage(scope, message));
  },
  error(scope: string, message: string, data?: unknown) {
    if (data !== undefined) {
      console.error(formatMessage(scope, message), data);
      return;
    }
    console.error(formatMessage(scope, message));
  },
  debug(scope: string, message: string, data?: unknown) {
    if (process.env.NODE_ENV === 'production') return;
    if (data !== undefined) {
      console.debug(formatMessage(scope, message), data);
      return;
    }
    console.debug(formatMessage(scope, message));
  },
  group(scope: string, message: string, fn: () => void) {
    console.group(formatMessage(scope, message));
    fn();
    console.groupEnd();
  },
} satisfies Record<string, (...args: never[]) => void>;

export type { LogLevel };
