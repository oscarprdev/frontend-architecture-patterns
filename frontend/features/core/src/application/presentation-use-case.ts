export interface PresentationUsecase<S> {
  state: S;
  subscribe(listener: (state: S) => void): void;
  unsubscribe(listener: (state: S) => void): void;
}

export abstract class PresentationUsecaseBase<S> implements PresentationUsecase<S> {
  abstract state: S;

  private listeners: Array<(state: S) => void> = [];

  subscribe(listener: (state: S) => void): void {
    this.listeners.push(listener);
  }

  unsubscribe(listener: (state: S) => void): void {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  protected updateState(partial: Partial<S>): void {
    Object.assign(this.state, partial);
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }
}
