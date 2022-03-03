# @milkdown/react

Angular integration for [milkdown](https://saul-mirone.github.io/milkdown/).


# Install

```bash
yarn add @milkdown/core @milkdown/plugin-listener @milkdown/plugin-menu @milkdown/preset-commonmark @milkdown/preset-gfm @milkdown/prose @milkdown/theme-nord
```

# Example Usage

```typescript
@NgModule({
  imports: [
    MilkdownModule,
  ],
})
```

```html
 <milkdown-editor [(ngModel)]="markdown"></milkdown-editor>
 <!-- or -->
 <milkdown-editor formControlName="markdown"></milkdown-editor>
```

# License

Milkdown is open sourced software licensed under [MIT license](https://github.com/Saul-Mirone/milkdown/blob/main/LICENSE).
