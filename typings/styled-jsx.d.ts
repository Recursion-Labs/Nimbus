import type {HTMLAttributes} from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      style: HTMLStyleElement & {
        jsx?: boolean;
        global?: boolean;
      };
    }
  }
}

declare module 'react' {
  interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
