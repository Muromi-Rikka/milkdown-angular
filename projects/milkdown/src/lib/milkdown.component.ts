import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { menu } from "@milkdown/plugin-menu";
import { gfm } from "@milkdown/preset-gfm";
import { nord } from "@milkdown/theme-nord";

@Component({
  selector: "milkdown-editor",
  templateUrl: "milkdown.component.html",
  styleUrls: ["./milkdown.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MilkdownComponent),
      multi: true,
    },
  ],
})
export class MilkdownComponent implements AfterViewInit, ControlValueAccessor {
  @ViewChild("editorRef") editorRef!: ElementRef<HTMLDivElement>;

  @Input()
  public ngModel: string = "";

  @Output()
  public ngModelChange = new EventEmitter<string>();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (_: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  ngAfterViewInit(): void {
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, this.editorRef.nativeElement);
        ctx.set(defaultValueCtx, this.ngModel);
        ctx.get(listenerCtx).markdownUpdated((_, md) => {
          this.ngModel = md;
          this.onChange(md);
          this.ngModelChange.next(md);
        });
      })
      .use(nord)
      .use(gfm)
      .use(listener)
      .use(menu())
      .create();
  }
  writeValue(value: string): void {
    this.ngModel = value;
    this.ngModelChange.next(value);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected setProperty(_key: string, _value: unknown): void {}
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  registerOnChange(fn: (_: unknown) => void): void {
    this.onChange = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDisabledState(_isDisabled: boolean): void {}
}
