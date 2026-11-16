---
unlisted: true
sidebar_label: Inventário de componentes
---

# Inventário de componentes — MM1.1

**Tabela 1.** Inventário da análise estática.

| Arquivo | Componente | Reutiliza? | Evidência / estilo relevante |
| ------- | ---------- | :--------: | ---------------------------- |
| `src/widget/components/ui/app-background.tsx` | `AppBackground` | Não | Opacidade inline e cores fixas `#f8f8f8` / `#222222`. |
| `src/widget/components/ui/badge.tsx` | `Badge` | Sim | Variantes de classes via `cn`. |
| `src/widget/components/ui/button.tsx` | `Button` | Sim | Variantes reutilizáveis com tokens, como `bg-primary`. |
| `src/widget/components/ui/dialog.tsx` | `Dialog` | Sim | Primitive local; composição com classes temáticas. |
| `src/widget/components/ui/dialog.tsx` | `DialogTrigger` | Sim | Primitive local. |
| `src/widget/components/ui/dialog.tsx` | `DialogHeader` | Sim | Composição com classes do tema. |
| `src/widget/components/ui/dialog.tsx` | `DialogTitle` | Sim | Composição com classes do tema. |
| `src/widget/components/ui/dialog.tsx` | `DialogContent` | Sim | Classes temáticas; sombra inline complementar. |
| `src/widget/components/ui/dropdown.tsx` | `Dropdown` | Sim | Primitive local de dropdown. |
| `src/widget/components/ui/dropdown.tsx` | `DropdownTrigger` | Sim | Primitive local de dropdown. |
| `src/widget/components/ui/dropdown.tsx` | `DropdownContent` | Sim | Classes e primitive local. |
| `src/widget/components/ui/icon.tsx` | `Icon` | Sim | Classes utilitárias e `className` configurável. |
| `src/widget/components/ui/separator.tsx` | `Separator` | Sim | Token `bg-border`. |
| `src/widget/components/ui/skeleton.tsx` | `Skeleton` | Sim | Token `bg-accent`. |
| `src/widget/components/ui/spacer.tsx` | `Spacer` | Sim | Classe utilitária compartilhada. |
| `src/widget/components/ui/spinner.tsx` | `Spinner` | Sim | Classe utilitária e token `text-primary`. |
| `src/widget/components/ui/tooltip.tsx` | `Tooltip` | Sim | Classes compartilhadas de composição e apresentação. |
| `src/widget/components/app-overlay/index.tsx` | `AppOverlay` | Sim | Classes de layout compartilhadas. |
| `src/widget/components/consent-banner/index.tsx` | `ConsentBanner` | Sim | Usa `Button`, `Separator` e tokens. |
| `src/widget/components/content/index.tsx` | `WidgetContent` | Sim | Classes utilitárias e variável `--player-height`. |
| `src/widget/components/controls/emotions-option.tsx` | `EmotionsOption` | Sim | Usa `Button`, `Dropdown`, `Icon` e `Tooltip`. |
| `src/widget/components/controls/index.tsx` | `WidgetControls` | Sim | Composição de `AppOverlay` e classes utilitárias. |
| `src/widget/components/controls/main-action/index.tsx` | `MainAction` | Sim | Usa `Button`, `Icon` e `Tooltip`. |
| `src/widget/components/controls/progress-bar.tsx` | `ProgressBar` | Sim | Token `bg-primary`; largura dinâmica inline. |
| `src/widget/components/controls/settings-option.tsx` | `SettingsOption` | Sim | Usa `Button`, `Icon` e `Tooltip`. |
| `src/widget/components/controls/speed-option.tsx` | `SpeedOption` | Sim | Usa `Button`, `Dropdown` e `Tooltip`. |
| `src/widget/components/controls/subtitles-option.tsx` | `SubtitlesOptions` | Sim | Usa `Button`, `Icon` e `Tooltip`. |
| `src/widget/components/controls/translating-badge.tsx` | `TranslatingBadge` | Sim | Usa `Spinner` e tokens de cor. |
| `src/widget/components/dialog-fallback/index.tsx` | `DialogFallback` | Sim | Usa `Skeleton`, `Spinner` e `bg-background`; sombra inline complementar. |
| `src/widget/components/draggable/index.tsx` | `Draggable` | Sim | Componente de composição/arraste com classes compartilhadas. |
| `src/widget/components/draggable/index.tsx` | `DragHandle` | Sim | Classes compartilhadas aplicadas via `cn`. |
| `src/widget/components/draggable/index.tsx` | `DragHint` | Sim | Classes compartilhadas aplicadas via `cn`. |
| `src/widget/components/guide/actions.tsx` | `GuideActions` | Sim | Usa `Button`, `Icon` e `widget-radius`. |
| `src/widget/components/guide/footer.tsx` | `GuideFooter` | Sim | Usa `Button`, `Icon` e token de cor. |
| `src/widget/components/guide/index.tsx` | `Guide` | Sim | Layout próprio com classes e tokens compartilhados. |
| `src/widget/components/header/components/expand-option.tsx` | `ExpandOption` | Sim | Usa `Button`, `Icon` e `Tooltip`. |
| `src/widget/components/header/components/menu-option.tsx` | `MenuOption` | Sim | Usa `Button`, `Icon` e tokens/classes do tema. |
| `src/widget/components/header/components/menu.tsx` | `WidgetMenu` | Sim | Usa `Button`, `Dropdown`, `Icon` e classes utilitárias. |
| `src/widget/components/header/index.tsx` | `WidgetHeader` | Sim | Usa `Button`, `Icon`, `Spacer` e tokens do tema. |
| `src/widget/components/inline-translator-button/index.tsx` | `InlineTranslatorButton` | Sim | Usa `Icon` e classes via `cn`; botão com marcação própria. |
| `src/widget/components/text-capture-tooltip/index.tsx` | `TextCaptureTooltip` | Sim | Usa `Button`, `Icon` e tokens; posicionamento inline dinâmico. |
| `src/widget/components/unity-loading/index.tsx` | `UnityLoading` | Sim | Usa `Button`, `Icon`, `Spinner` e tokens; largura dinâmica inline. |
| `src/widget/components/utilities/components/feedback-trigger.tsx` | `FeedbackTrigger` | Sim | Usa `Button`, `Icon` e cores temáticas. |
| `src/widget/components/utilities/components/toggle-avatar-button.tsx` | `ToggleAvatarButton` | Sim | Usa `Button`, `Dropdown`, `Icon` e `Tooltip`. |
| `src/widget/components/utilities/index.tsx` | `Utilities` | Sim | Usa `Button`, `Icon` e classes responsivas/temáticas. |
| `src/widget/screens/components.tsx` | `Screen` | Sim | Usa `Button`/`Icon` locais e `bg-background`. |
| `src/widget/screens/components.tsx` | `ScreenHeader` | Sim | Reutiliza `ScreenClose` e layout compartilhado. |
| `src/widget/screens/components.tsx` | `ScreenClose` | Sim | Usa `Button` local. |
| `src/widget/screens/components.tsx` | `ScreenTitle` | Sim | Classe tipográfica compartilhada. |
| `src/widget/screens/components.tsx` | `ScreenContent` | Sim | Container com classe utilitária via `cn`. |
| `src/widget/screens/about/index.tsx` | `AboutScreen` | Sim | Usa `Icon` e tokens como `bg-primary`/`text-muted-foreground`. |
| `src/widget/screens/about/about-field.tsx` | `AboutField` | Sim | Classes utilitárias e `text-muted-foreground`. |
| `src/widget/screens/dictionary/index.tsx` | `DictionaryScreen` | Sim | Composição de tela e layout/tokens compartilhados. |
| `src/widget/screens/dictionary/components/dictionary-all-words.tsx` | `DictionaryAllWords` | Sim | Usa `Button`/`Icon` e tokens de fundo/borda. |
| `src/widget/screens/dictionary/components/dictionary-categories-list.tsx` | `DictionaryCategoryList` | Sim | Composição de lista e classes utilitárias. |
| `src/widget/screens/dictionary/components/dictionary-categories.tsx` | `DictionaryCategories` | Sim | Usa `Icon` e token de borda. |
| `src/widget/screens/dictionary/components/dictionary-category-header.tsx` | `DictionaryCategoryHeader` | Sim | Usa `Icon` e tokens de cor. |
| `src/widget/screens/dictionary/components/dictionary-category-verbs.tsx` | `DictionaryCategoryVerbs` | Sim | Usa tokens `bg-muted`, `text-muted-foreground` e `focus:bg-primary`. |
| `src/widget/screens/dictionary/components/dictionary-category-words.tsx` | `DictionaryCategoryWords` | Sim | Usa `Button`/`Icon` e estados temáticos. |
| `src/widget/screens/dictionary/components/dictionary-error.tsx` | `DictionaryError` | Sim | Usa `Button` local (`variant="outline-gov"`). |
| `src/widget/screens/dictionary/components/dictionary-filter.tsx` | `DictionaryFilter` | Sim | Usa `Button`/`Icon` locais. |
| `src/widget/screens/dictionary/components/dictionary-letter-head.tsx` | `DictionaryLetterHeader` | Sim | Usa `Icon` e tokens de cor. |
| `src/widget/screens/dictionary/components/dictionary-letter-list.tsx` | `DictionaryLetterList` | Sim | Composição de lista com classes compartilhadas. |
| `src/widget/screens/dictionary/components/dictionary-letter-words.tsx` | `DictionaryLetterWords` | Sim | Usa `Button`/`Icon` e estados temáticos. |
| `src/widget/screens/dictionary/components/dictionary-list.tsx` | `DictionaryList` | Sim | Usa tokens `text-primary`, `text-muted-foreground` e `text-foreground`. |
| `src/widget/screens/dictionary/components/dictionary-loading.tsx` | `DictionaryLoading` | Sim | Usa `Spinner` local. |
| `src/widget/screens/dictionary/components/dictionary-search.tsx` | `DictionarySearch` | Sim | Usa `Button`/`Icon` e token de placeholder. |
| `src/widget/screens/dictionary/components/dictionary-word-meaning.tsx` | `DictionaryWordMeaning` | Sim | Usa `Icon`/`Spinner` e tokens de borda/fundo/texto. |
| `src/widget/dialogs/translator/index.tsx` | `TranslatorDialog` | Sim | Usa `Button`, `Dialog`, `Icon`, `Spinner` e tokens; campos têm classes próprias. |
| `src/widget/dialogs/settings/index.tsx` | `SettingsDialog` | Sim | Usa `Button`, `Dialog`, `Icon` e `Tooltip`. |
| `src/widget/dialogs/settings/opacity-field.tsx` | `SettingsOpacityField` | Não | Slider próprio (`range-slider`) com estilo inline, gradiente e cores fallback. |
| `src/widget/dialogs/settings/regionalism-field.tsx` | `SettingsRegionalismField` | Sim | Usa `buttonVariants` e primitives `Dialog` locais. |
| `src/widget/dialogs/settings/regionalism-list-item.tsx` | `RegionalismListItem` | Sim | Usa tokens `text-secondary`, `border-primary` e `text-primary`. |
| `src/widget/dialogs/settings/theme-field.tsx` | `SettingsThemeField` | Sim | Toggle usa tokens `bg-accent`, `text-primary`, `bg-background` e `checked:bg-primary`. |
| `src/widget/dialogs/feedback/index.tsx` | `FeedbackDialog` | Sim | Usa primitives `Dialog` locais. |
| `src/widget/dialogs/feedback/feedback-like-confirm.tsx` | `FeedbackLikeConfirm` | Sim | Usa `Button`, `Icon` e `Spinner` locais. |
| `src/widget/dialogs/feedback/feedback-question.tsx` | `FeedbackQuestion` | Sim | Usa `Button`/`Icon` e tokens `primary`/`destructive`. |
| `src/widget/dialogs/feedback/feedback-suggestion.tsx` | `FeedbackSuggestion` | Sim | Usa `Button`, `Dialog` e token `bg-muted`. |
| `src/widget/dialogs/feedback/suggestion-popup.tsx` | `SuggestionPopup` | Sim | Usa tokens de borda/fundo e classe compartilhada de sombra. |
| `src/widget/providers/toaster/index.tsx` | `ToasterProvider` | Sim | Layout com classes utilitárias compartilhadas. |
| `src/widget/providers/toaster/toast-item.tsx` | `ToastItem` | Sim | Usa classes `cn` e tokens de fundo/texto. |
