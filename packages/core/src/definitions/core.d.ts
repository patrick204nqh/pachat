declare module Pachat {
  interface Core {
    bootstrap(): void;
  }
}

interface Core extends Pachat.Core {}
