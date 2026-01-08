type CartEventCallback = () => void;

class CartEventEmitter {
  private listeners: CartEventCallback[] = [];

  subscribe(callback: CartEventCallback) {
    this.listeners.push(callback);

    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  emit() {
    this.listeners.forEach(callback => callback());
  }
}

export const cartEvents = new CartEventEmitter();
