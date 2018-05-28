export interface IPill {
  name: string;
  value: any;
}

export class PillsModel {
  constructor(private _pills: IPill[] = []) {
  }

  get pills(): IPill[] {
    return this._pills;
  }

  set pills(pills: IPill[]) {
    this._pills = pills;
  }

  addPill(pill: IPill): void {
    this._pills.push(pill);
  }

  removePill(pillOfIdx: IPill | number): IPill {
    if (typeof pillOfIdx === 'number') {
      return this._pills.splice(pillOfIdx, 1)[0];
    }
    const idx = this._pills.findIndex((pill: IPill) => pill === pillOfIdx);
    if (idx !== -1) {
      return this._pills.splice(idx, 1)[0];
    }
  }

}
