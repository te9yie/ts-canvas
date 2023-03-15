import { Size, Rect } from "./geometry";

export interface RenderUnit {
  get is_dirty(): boolean;
  calc_min_size(ctx: CanvasRenderingContext2D): Size;
  update_layout(ctx: CanvasRenderingContext2D, size: Size): void;
  render(ctx: CanvasRenderingContext2D): void;
}

export const TextAlign = {
  Left: 0,
  Center: 1,
  Right: 2,
} as const;
type TextAlign = typeof TextAlign[keyof typeof TextAlign];

export const TextVAlign = {
  Top: 0,
  Middle: 1,
  Bottom: 2,
} as const;
type TextVAlign = typeof TextVAlign[keyof typeof TextVAlign];

export class Label implements RenderUnit {
  private dirty_: boolean;
  private align_: TextAlign;
  private valign_: TextVAlign;
  private rect_: Rect;

  constructor(private text_: string, align?: TextAlign, valign?: TextVAlign) {
    this.dirty_ = false;
    this.rect_ = new Rect(0, 0, 0, 0);
    this.align_ = align ?? TextAlign.Center;
    this.valign_ = valign ?? TextVAlign.Middle;
  }

  set text(text: string) {
    this.text_ = text;
    this.dirty_ = true;
  }
  set align(align: TextAlign) {
    this.align_ = align;
    this.dirty_ = true;
  }
  set valign(valign: TextVAlign) {
    this.valign_ = valign;
    this.dirty_ = true;
  }

  get is_dirty(): boolean {
    return this.dirty_;
  }
  calc_min_size(ctx: CanvasRenderingContext2D): Size {
    const m = ctx.measureText(this.text_);
    return new Size(
      m.width,
      m.fontBoundingBoxAscent + m.fontBoundingBoxDescent
    );
  }
  update_layout(ctx: CanvasRenderingContext2D, size: Size): void {
    this.rect_.size = size;
    this.dirty_ = false;
  }
  render(ctx: CanvasRenderingContext2D): void {}
}
