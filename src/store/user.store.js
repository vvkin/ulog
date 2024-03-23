import { makeAutoObservable, runInAction } from 'mobx';

export class UserStore {
  id = null;

  constructor(userId) {
    this.id = userId;
    makeAutoObservable(this, {
      id: false,
      dispose: false,
    });
  }

  async load() {
    runInAction(() => {
      this.username = this.id;
    });
  }
}
