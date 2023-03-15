export class Pos {
  constructor(public x: number, public y: number) {}
}

export class Size {
  constructor(public w: number, public h: number) {}
}

export class Rect {
  constructor(
    public x: number,
    public y: number,
    public w: number,
    public h: number
  ) {}
  get pos(): Pos {
    return new Pos(this.x, this.y);
  }
  set pos(p: Pos) {
    this.x = p.x;
    this.y = p.y;
  }
  get size(): Size {
    return new Size(this.w, this.h);
  }
  set size(s: Size) {
    this.w = s.w;
    this.h = s.h;
  }
}
