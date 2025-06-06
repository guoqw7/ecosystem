import type { WhitespacePosition } from '@vuepress/highlighter-helper'
import type {
  BundledLanguage,
  BundledTheme,
  Highlighter,
  LanguageInput,
  ShikiTransformer,
  SpecialLanguage,
  StringLiteralUnion,
  ThemeRegistrationAny,
} from 'shiki'

export type ShikiLang =
  | LanguageInput
  | SpecialLanguage
  | StringLiteralUnion<BundledLanguage>

export type ShikiTheme = StringLiteralUnion<BundledTheme> | ThemeRegistrationAny

export interface ShikiSingleThemeOptions {
  /**
   * The single theme to use
   *
   * @see https://shiki.style/themes
   *
   * @default 'nord'
   */
  theme?: ShikiTheme
}

export interface ShikiDualThemeOptions {
  /**
   * The dark and light themes to use
   *
   * @see https://shiki.style/themes
   */
  themes: {
    dark: ShikiTheme
    light: ShikiTheme
  }
}

export type ShikiThemeOptions = ShikiDualThemeOptions | ShikiSingleThemeOptions

export type ShikiHighlightOptions = ShikiThemeOptions & {
  /**
   * Languages to be loaded.
   *
   * Shiki does not preload any languages to avoid extra overhead. So you need
   * to specify the languages you want to use.
   *
   * @see https://shiki.style/languages
   */
  langs?: ShikiLang[]

  /**
   * Language alias
   *
   * @see https://shiki.style/guide/load-lang#custom-language-aliases
   */
  langAlias?: Record<string, StringLiteralUnion<BundledLanguage>>

  /**
   * Fallback language when the specified language is not available.
   *
   * @default 'plain'
   */
  defaultLang?: string

  /**
   * Function to customize Shiki highlighter instance.
   */
  shikiSetup?: (shiki: Highlighter) => Promise<void> | void

  /**
   * Shiki transformers
   */
  transformers?: ShikiTransformer[]

  /**
   * Enable highlight lines or not
   *
   * @default true
   */
  highlightLines?: boolean

  /**
   * Enable notation diff transformer
   *
   * @default false
   *
   * @see https://shiki.style/packages/transformers#transformernotationdiff
   */
  notationDiff?: boolean

  /**
   * Enable notation focus transformer
   *
   * @default false
   *
   * @see https://shiki.style/packages/transformers#transformernotationfocus
   */
  notationFocus?: boolean

  /**
   * Enable notation highlight transformer
   *
   * @default false
   *
   * @see https://shiki.style/packages/transformers#transformernotationhighlight
   */
  notationHighlight?: boolean

  /**
   * Enable notation error level transformer
   *
   * @default false
   *
   * @see https://shiki.style/packages/transformers#transformernotationerrorlevel
   */
  notationErrorLevel?: boolean

  /**
   * Enable notation word highlight transformer
   *
   * @default false
   *
   * @see https://shiki.style/packages/transformers#transformernotationwordhighlight
   */
  notationWordHighlight?: boolean

  /**
   * Enable whitespace
   * - true: enable whitespace, but not render any whitespace by default
   * - false: disable whitespace completely
   * - 'all': render all whitespace
   * - 'boundary': render leading and trailing whitespace of each line.
   * - 'trailing': render trailing whitespace of each line
   *
   * you are able to use `:whitespace` or `:no-whitespace` or `:whitespace=position` to set single code block
   *
   * position: 'all' | 'boundary' | 'trailing'
   *
   * @default false
   *
   * @see https://shiki.style/packages/transformers#transformerrenderwhitespace
   */
  whitespace?: WhitespacePosition | boolean

  /**
   * Log level Highlighter language detecter
   *
   * @description defaults to `'debug'` when `--debug` flag is enabled
   *
   * @default 'warn'
   */
  logLevel?: 'debug' | 'silent' | 'warn'
}
