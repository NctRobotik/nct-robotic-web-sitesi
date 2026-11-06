export type SupportedLanguage = 'tr' | 'en' | 'de' | 'ru' | 'ar';
export type TextDirection = 'ltr' | 'rtl';

export interface LanguageConfig {
  /** ISO 639-1 language code */
  code: SupportedLanguage;
  /** English display name */
  name: string;
  /** Endonym / Native display name */
  nativeName: string;
  /** Text direction */
  direction: TextDirection;
  /** URL path prefix (empty string for default language) */
  prefix: string;
  /** Whether the language is actively published and user-selectable */
  enabled: boolean;
  /** Whether this is the default root language */
  isDefault: boolean;
}

/**
 * NCT Robotik Central Language Configuration
 *
 * Current Published Status:
 * - Turkish (tr): Default, Published (LTR)
 * - English (en): Published (LTR)
 * - German (de): Planned, Inactive (LTR)
 * - Russian (ru): Planned, Inactive (LTR)
 * - Arabic (ar): Planned, Inactive (RTL)
 */
export const SUPPORTED_LANGUAGES: readonly LanguageConfig[] = [
  {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    direction: 'ltr',
    prefix: '',
    enabled: true,
    isDefault: true
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    prefix: 'en',
    enabled: true,
    isDefault: false
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    prefix: 'de',
    enabled: true,
    isDefault: false
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    direction: 'ltr',
    prefix: 'ru',
    enabled: false,
    isDefault: false
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    prefix: 'ar',
    enabled: false,
    isDefault: false
  }
] as const;

export const DEFAULT_LANGUAGE: SupportedLanguage = 'tr';

/**
 * Returns configuration for a language code, falling back to Turkish if unknown.
 */
export function getLanguageConfig(code?: string | null): LanguageConfig {
  if (!code) return SUPPORTED_LANGUAGES[0];
  const normalized = code.toLowerCase().split('-')[0] as SupportedLanguage;
  const found = SUPPORTED_LANGUAGES.find((lang) => lang.code === normalized);
  return found || SUPPORTED_LANGUAGES[0];
}

/**
 * Returns only the currently enabled/published languages.
 */
export function getEnabledLanguages(): LanguageConfig[] {
  return SUPPORTED_LANGUAGES.filter((lang) => lang.enabled);
}

/**
 * Returns an array of enabled language codes (e.g. ['tr', 'en']).
 */
export function getEnabledLanguageCodes(): SupportedLanguage[] {
  return getEnabledLanguages().map((lang) => lang.code);
}

/**
 * Checks if a language is valid and actively enabled.
 */
export function isLanguageEnabled(code?: string | null): boolean {
  if (!code) return false;
  const normalized = code.toLowerCase().split('-')[0] as SupportedLanguage;
  return SUPPORTED_LANGUAGES.some((lang) => lang.code === normalized && lang.enabled);
}

/**
 * Checks if a language code is supported by the architecture (enabled or planned).
 */
export function isSupportedLanguage(code?: string | null): code is SupportedLanguage {
  if (!code) return false;
  const normalized = code.toLowerCase().split('-')[0] as SupportedLanguage;
  return SUPPORTED_LANGUAGES.some((lang) => lang.code === normalized);
}

/**
 * Returns the text direction ('ltr' or 'rtl') for a given language code.
 */
export function getDirection(code?: string | null): TextDirection {
  return getLanguageConfig(code).direction;
}

/**
 * Returns true if the language is Right-to-Left (e.g. Arabic).
 */
export function isRTL(code?: string | null): boolean {
  return getDirection(code) === 'rtl';
}
