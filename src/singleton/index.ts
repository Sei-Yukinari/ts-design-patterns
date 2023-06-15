let singleton: Singleton | null = null

export function getInstance(): Singleton {
  if (!singleton) {
    singleton = new Singleton()
  }
  return singleton
}

export class Singleton {}
