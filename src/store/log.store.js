import { runInAction, makeAutoObservable } from 'mobx';
import { logService } from '../service/log.service';

export class LogStore {
  id = null;
  userId = null;
  title = null;
  mood = null;
  priority = null;
  date = null;
  description = null;

  constructor({ logId, userId }) {
    this.id = logId;
    this.userId = userId;
    makeAutoObservable(this, {
      id: false,
      userId: false,
      dispose: false,
    });
  }

  async load() {
    const log = await logService.getLogById({
      logId: this.id,
      userId: this.userId,
    });
    if (!log) {
      return;
    }
    runInAction(() => {
      this.title = log.title;
      this.mood = log.mood;
      this.priority = log.priority;
      this.date = new Date(log.date);
      this.description = log.description;
    });
  }
}
