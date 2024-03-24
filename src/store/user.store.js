import { makeAutoObservable, runInAction } from 'mobx';
import { logService } from '../service/log.service';

export class UserStore {
  id = null;
  logs = [];

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

  async loadLogs({ query, sort }) {
    const logs = await logService.searchLogsByUserId({
      userId: this.id,
      query,
      sort: sort ?? 'asc',
    });
    runInAction(() => {
      this.logs = logs;
    });
  }
}
