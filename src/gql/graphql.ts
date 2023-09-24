/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum ActivityType {
  ItemCreateActivity = 'ItemCreateActivity',
  ItemDeleteActivity = 'ItemDeleteActivity',
  ItemUpdateActivity = 'ItemUpdateActivity'
}

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AllTimeDownloadMetrics = {
  __typename?: 'AllTimeDownloadMetrics';
  bandwidthCostSavings: Scalars['Float']['output'];
  downloadedSize: Scalars['String']['output'];
};

/** Generic application object. Represents application metadata common for all types of platform supported by an application. */
export type Application = {
  __typename?: 'Application';
  description?: Maybe<Scalars['String']['output']>;
  heroImageFilePath?: Maybe<Scalars['String']['output']>;
  heroImageMirrorUrls: Array<Scalars['String']['output']>;
  heroImageUrl?: Maybe<Scalars['String']['output']>;
  heroText?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageFilePath?: Maybe<Scalars['String']['output']>;
  imageMirrorUrls: Array<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isHero?: Maybe<Scalars['Boolean']['output']>;
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  l10n?: Maybe<Array<Application_L10n>>;
  linuxApp?: Maybe<LinuxApplication>;
  linuxRpmApp?: Maybe<LinuxRpmApplication>;
  macApp?: Maybe<MacApplication>;
  name: Scalars['String']['output'];
  windowsApp?: Maybe<WindowsApplication>;
};


/** Generic application object. Represents application metadata common for all types of platform supported by an application. */
export type ApplicationDescriptionArgs = {
  locale?: InputMaybe<LocaleFilter>;
};


/** Generic application object. Represents application metadata common for all types of platform supported by an application. */
export type ApplicationHeroTextArgs = {
  locale?: InputMaybe<LocaleFilter>;
};

export type ApplicationCreateInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ApplicationInfoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heroImageFilePath?: InputMaybe<Scalars['String']['input']>;
  heroText?: InputMaybe<Scalars['String']['input']>;
  imageFilePath?: InputMaybe<Scalars['String']['input']>;
  isHero?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  l10n?: InputMaybe<Array<Application_L10nInput>>;
  name: Scalars['String']['input'];
};

export type ApplicationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heroImageFilePath?: InputMaybe<Scalars['String']['input']>;
  heroText?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  imageFilePath?: InputMaybe<Scalars['String']['input']>;
  isHero?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  l10n?: InputMaybe<Array<Application_L10nInput>>;
  name: Scalars['String']['input'];
};

export enum ApplicationVersionStatus {
  Beta = 'beta',
  Processing = 'processing',
  ProcessingFailed = 'processingFailed',
  Release = 'release'
}

export enum ApplicationVersionStatusInput {
  Beta = 'beta',
  Release = 'release'
}

export type Application_L10n = L10n & {
  __typename?: 'Application_L10n';
  description?: Maybe<Scalars['String']['output']>;
  heroText?: Maybe<Scalars['String']['output']>;
  l10n_langId: Scalars['String']['output'];
};

export type Application_L10nInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heroText?: InputMaybe<Scalars['String']['input']>;
  l10n_langId: Scalars['String']['input'];
};

export type BpmRange = {
  from: Scalars['Float']['input'];
  to: Scalars['Float']['input'];
};

export type Bundle = {
  __typename?: 'Bundle';
  createdDate: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  heroImageFilePath?: Maybe<Scalars['String']['output']>;
  heroImageMirrorUrls?: Maybe<Array<Scalars['String']['output']>>;
  heroImageUrl?: Maybe<Scalars['String']['output']>;
  heroText?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageFilePath?: Maybe<Scalars['String']['output']>;
  imageMirrorUrls: Array<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isHero?: Maybe<Scalars['Boolean']['output']>;
  items: Array<BundleItem>;
  l10n?: Maybe<Array<Bundle_L10n>>;
  title: Scalars['String']['output'];
  updatedDate: Scalars['String']['output'];
};


export type BundleDescriptionArgs = {
  locale?: InputMaybe<LocaleFilter>;
};


export type BundleHeroTextArgs = {
  locale?: InputMaybe<LocaleFilter>;
};


export type BundleTitleArgs = {
  locale?: InputMaybe<LocaleFilter>;
};

export type BundleFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type BundleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heroImageFilePath?: InputMaybe<Scalars['String']['input']>;
  heroText?: InputMaybe<Scalars['String']['input']>;
  imageFilePath?: InputMaybe<Scalars['String']['input']>;
  isHero?: InputMaybe<Scalars['Boolean']['input']>;
  l10n?: InputMaybe<Array<Bundle_L10nInput>>;
  title: Scalars['String']['input'];
};

export type BundleItem = {
  __typename?: 'BundleItem';
  imageMirrorUrls?: Maybe<Array<Scalars['String']['output']>>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  itemId: Scalars['String']['output'];
  itemType: BundleItemType;
  title?: Maybe<Scalars['String']['output']>;
  typeTitle?: Maybe<Scalars['String']['output']>;
};

export type BundleItemInput = {
  itemId: Scalars['String']['input'];
  itemType: BundleItemType;
};

export enum BundleItemType {
  Application = 'application',
  Effect = 'effect',
  Library = 'library'
}

export enum BundleSearchOrderByField {
  Title = 'title',
  UpdatedDate = 'updatedDate'
}

export type BundleSearchOrderByInput = {
  direction: OrderDirection;
  field: BundleSearchOrderByField;
};

export type Bundle_L10n = L10n & {
  __typename?: 'Bundle_L10n';
  description?: Maybe<Scalars['String']['output']>;
  heroText?: Maybe<Scalars['String']['output']>;
  l10n_langId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Bundle_L10nInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heroText?: InputMaybe<Scalars['String']['input']>;
  l10n_langId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BundlesSearchResult = {
  __typename?: 'BundlesSearchResult';
  items: Array<Bundle>;
  totalCount: Scalars['Int']['output'];
};

export type Effect = {
  __typename?: 'Effect';
  createdDate: Scalars['String']['output'];
  genre?: Maybe<LibraryGenre>;
  id: Scalars['String']['output'];
  imageFilePath?: Maybe<Scalars['String']['output']>;
  imageMirrorUrls: Array<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  l10n?: Maybe<Array<Effect_L10n>>;
  latestBetaVersion?: Maybe<EffectVersion>;
  latestDraftVersion?: Maybe<EffectVersion>;
  latestReleasedVersion?: Maybe<EffectVersion>;
  title: Scalars['String']['output'];
  updatedDate: Scalars['String']['output'];
};


export type EffectTitleArgs = {
  locale?: InputMaybe<LocaleFilter>;
};

export type EffectFilterInput = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type EffectInput = {
  imageFilePath?: InputMaybe<Scalars['String']['input']>;
  l10n?: InputMaybe<Array<Effect_L10nInput>>;
  title: Scalars['String']['input'];
};

export enum EffectSearchOrderByField {
  Title = 'title',
  UpdatedDate = 'updatedDate'
}

export type EffectSearchOrderByInput = {
  direction: OrderDirection;
  field: EffectSearchOrderByField;
};

export type EffectVersion = {
  __typename?: 'EffectVersion';
  createdDate: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  effectId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  l10n?: Maybe<Array<EffectVersion_L10n>>;
  macResourcesFilePath?: Maybe<Scalars['String']['output']>;
  macResourcesMusedownloadUrl?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['String']['output']>;
  status: EffectVersionStatus;
  updatedDate: Scalars['String']['output'];
  version: Scalars['String']['output'];
  winResourcesFilePath?: Maybe<Scalars['String']['output']>;
  winResourcesMusedownloadUrl?: Maybe<Scalars['String']['output']>;
};


export type EffectVersionDescriptionArgs = {
  locale?: InputMaybe<LocaleFilter>;
};

export type EffectVersionCreateInput = {
  version: Scalars['String']['input'];
};

export type EffectVersionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  l10n?: InputMaybe<Array<EffectVersion_L10nInput>>;
  macResourcesFilePath?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['String']['input'];
  winResourcesFilePath?: InputMaybe<Scalars['String']['input']>;
};

export enum EffectVersionStatus {
  Beta = 'beta',
  Draft = 'draft',
  Processing = 'processing',
  ProcessingFailed = 'processingFailed',
  Released = 'released'
}

export type EffectVersion_L10n = L10n & {
  __typename?: 'EffectVersion_L10n';
  description?: Maybe<Scalars['String']['output']>;
  l10n_langId: Scalars['String']['output'];
};

export type EffectVersion_L10nInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  l10n_langId: Scalars['String']['input'];
};

export type EffectVersionsFilterInput = {
  effectId: Scalars['String']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EffectVersionStatus>;
};

export type EffectVersionsSearchResult = {
  __typename?: 'EffectVersionsSearchResult';
  items: Array<EffectVersion>;
  totalCount: Scalars['Int']['output'];
};

export type Effect_L10n = L10n & {
  __typename?: 'Effect_L10n';
  l10n_langId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Effect_L10nInput = {
  l10n_langId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EffectsSearchResult = {
  __typename?: 'EffectsSearchResult';
  items: Array<Effect>;
  totalCount: Scalars['Int']['output'];
};

export type Element = {
  __typename?: 'Element';
  album?: Maybe<Scalars['String']['output']>;
  artists: Array<Scalars['String']['output']>;
  bpm?: Maybe<Scalars['Float']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  duration: Scalars['Float']['output'];
  genres: Array<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageFileMirrorUrls: Array<Scalars['String']['output']>;
  imageFileUrl: Scalars['String']['output'];
  instrument?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  keywords: Array<Scalars['String']['output']>;
  opusFileMirrorUrls: Array<Scalars['String']['output']>;
  opusFileUrl: Scalars['String']['output'];
  publisher?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: ElementType;
  updatedDate: Scalars['String']['output'];
};

export type ElementAlbum = {
  __typename?: 'ElementAlbum';
  elementsCount: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ElementAlbumFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ElementFilterInput = {
  album?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<Scalars['String']['input']>>;
  bpmExact?: InputMaybe<Scalars['Float']['input']>;
  bpmRange?: InputMaybe<BpmRange>;
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  instrument?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ElementGenre = {
  __typename?: 'ElementGenre';
  elementsCount: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ElementGenreFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ElementInstrument = {
  __typename?: 'ElementInstrument';
  elementsCount: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ElementInstrumentFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ElementKeyword = {
  __typename?: 'ElementKeyword';
  elementsCount: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ElementKeywordFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum ElementOrderByField {
  Artist = 'artist',
  Category = 'category',
  Duration = 'duration',
  Key = 'key',
  Tempo = 'tempo',
  Title = 'title',
  UpdatedDate = 'updatedDate'
}

export type ElementOrderByInput = {
  direction: OrderDirection;
  field: ElementOrderByField;
};

export enum ElementSearchOrderByField {
  Title = 'title',
  UpdatedDate = 'updatedDate'
}

export type ElementSearchOrderByInput = {
  direction: OrderDirection;
  field: ElementSearchOrderByField;
};

export type ElementSearchResult = {
  __typename?: 'ElementSearchResult';
  elements: Array<Element>;
  elementsCount: Scalars['Int']['output'];
  keywords: Array<ElementKeyword>;
};

export enum ElementType {
  Loop = 'loop',
  OneShot = 'one_shot'
}

export type EntityActivity = {
  activityType: ActivityType;
  itemId: Scalars['String']['output'];
  itemTitle: Scalars['String']['output'];
  itemType: EntityType;
};

export type EntityDownloadMetric = {
  __typename?: 'EntityDownloadMetric';
  entityType: EntityType;
  intervals: Array<EntityDownloadMetricInterval>;
};

export type EntityDownloadMetricInterval = {
  __typename?: 'EntityDownloadMetricInterval';
  count: Scalars['Int']['output'];
  sizeSumGBs: Scalars['Float']['output'];
  startDate: Scalars['String']['output'];
};

export type EntityDownloadMetricsFilter = {
  binIntervalDuration?: InputMaybe<TimeDurationInput>;
  dateFrom: Scalars['String']['input'];
  dateTo: Scalars['String']['input'];
  entityTypes: Array<EntityType>;
};

export enum EntityType {
  Application = 'application',
  ApplicationLinuxRpmVersion = 'applicationLinuxRpmVersion',
  ApplicationLinuxVersion = 'applicationLinuxVersion',
  ApplicationMacVersion = 'applicationMacVersion',
  ApplicationWinVersion = 'applicationWinVersion',
  Bundle = 'bundle',
  Effect = 'effect',
  EffectVersion = 'effectVersion',
  Element = 'element',
  L10nLanguage = 'l10nLanguage',
  L10nProject = 'l10nProject',
  L10nString = 'l10nString',
  L10nTranslation = 'l10nTranslation',
  Library = 'library',
  LibraryVersion = 'libraryVersion',
  Project = 'project',
  StaffpadStoreCatalog = 'staffpadStoreCatalog',
  Tutorial = 'tutorial'
}

export type FileInfo = {
  __typename?: 'FileInfo';
  fileName: Scalars['String']['output'];
  filePath: Scalars['String']['output'];
  md5CheckSum?: Maybe<Scalars['String']['output']>;
  size: Scalars['Float']['output'];
  uploadDate: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type HubDownloadEventFilter = {
  dateFrom?: InputMaybe<Scalars['String']['input']>;
  dateTo?: InputMaybe<Scalars['String']['input']>;
};

export type Instrument = {
  __typename?: 'Instrument';
  abbreviation: Scalars['String']['output'];
  category: Scalars['String']['output'];
  definitionFileInfo?: Maybe<InstrumentFileInfo>;
  definitionFilePath: Scalars['String']['output'];
  definitionFileUrl: Scalars['String']['output'];
  directoryPath: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  l10n?: Maybe<Array<Instrument_L10n>>;
  name: Scalars['String']['output'];
  samplesFileInfo?: Maybe<InstrumentFileInfo>;
  samplesFilePath?: Maybe<Scalars['String']['output']>;
  samplesFileUrl?: Maybe<Scalars['String']['output']>;
};


export type InstrumentNameArgs = {
  locale?: InputMaybe<LocaleFilter>;
};

export type InstrumentFileInfo = {
  __typename?: 'InstrumentFileInfo';
  localPath: Scalars['String']['output'];
  md5Checksum: Scalars['String']['output'];
  s3Etag?: Maybe<Scalars['String']['output']>;
  size: Scalars['Float']['output'];
  uploadDate: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type InstrumentInfo = {
  __typename?: 'InstrumentInfo';
  id: Scalars['Int']['output'];
  libraryId: Scalars['String']['output'];
  libraryName: Scalars['String']['output'];
  libraryVersion: Scalars['String']['output'];
  libraryVersionId: Scalars['String']['output'];
  libraryVersionStatus: LibraryVersionStatus;
  name: Scalars['String']['output'];
};

export type InstrumentInput = {
  abbreviation: Scalars['String']['input'];
  category: Scalars['String']['input'];
  definitionFilePath: Scalars['String']['input'];
  directoryPath: Scalars['String']['input'];
  l10n?: InputMaybe<Array<Instrument_L10nInput>>;
  name: Scalars['String']['input'];
  samplesFilePath?: InputMaybe<Scalars['String']['input']>;
};

export type Instrument_L10n = L10n & {
  __typename?: 'Instrument_L10n';
  l10n_langId: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Instrument_L10nInput = {
  l10n_langId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ItemCreateActivity = EntityActivity & {
  __typename?: 'ItemCreateActivity';
  activityType: ActivityType;
  createdItemJSON: Scalars['String']['output'];
  itemId: Scalars['String']['output'];
  itemTitle: Scalars['String']['output'];
  itemType: EntityType;
};

export type ItemCreateActivityInput = {
  createdItemJSON: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
  itemTitle: Scalars['String']['input'];
  itemType: EntityType;
};

export type ItemCreateUserActivityEventInput = {
  activity: ItemCreateActivityInput;
  date: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type ItemDeleteActivity = EntityActivity & {
  __typename?: 'ItemDeleteActivity';
  activityType: ActivityType;
  deletedItemJSON: Scalars['String']['output'];
  itemId: Scalars['String']['output'];
  itemTitle: Scalars['String']['output'];
  itemType: EntityType;
};

export type ItemDeleteActivityInput = {
  deletedItemJSON: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
  itemTitle: Scalars['String']['input'];
  itemType: EntityType;
};

export type ItemDeleteUserActivityEventInput = {
  activity: ItemDeleteActivityInput;
  date: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type ItemDownloadMetric = {
  __typename?: 'ItemDownloadMetric';
  intervals: Array<ItemDownloadMetricInterval>;
  itemId: Scalars['String']['output'];
};

export type ItemDownloadMetricInterval = {
  __typename?: 'ItemDownloadMetricInterval';
  count: Scalars['Int']['output'];
  sizeSumGBs: Scalars['Float']['output'];
  startDate: Scalars['String']['output'];
};

export type ItemDownloadMetricsFilter = {
  binIntervalDuration?: InputMaybe<TimeDurationInput>;
  dateFrom: Scalars['String']['input'];
  dateTo: Scalars['String']['input'];
  entityType: EntityType;
  itemIds: Array<Scalars['String']['input']>;
};

export type ItemUpdateActivity = EntityActivity & {
  __typename?: 'ItemUpdateActivity';
  activityType: ActivityType;
  itemId: Scalars['String']['output'];
  itemTitle: Scalars['String']['output'];
  itemType: EntityType;
  newItemJSON: Scalars['String']['output'];
  oldItemJSON: Scalars['String']['output'];
};

export type ItemUpdateActivityInput = {
  itemId: Scalars['String']['input'];
  itemTitle: Scalars['String']['input'];
  itemType: EntityType;
  newItemJSON: Scalars['String']['input'];
  oldItemJSON: Scalars['String']['input'];
};

export type ItemUpdateUserActivityEventInput = {
  activity: ItemUpdateActivityInput;
  date: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type L10n = {
  l10n_langId: Scalars['String']['output'];
};

export type L10nProject = {
  __typename?: 'L10nProject';
  createdDate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  languageIds: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedDate: Scalars['String']['output'];
};

export type L10nProjectFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type L10nProjectInput = {
  id: Scalars['String']['input'];
  languageIds: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type L10nProjectUpdateStringInput = {
  code: Scalars['String']['input'];
  context?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  text: Scalars['String']['input'];
};

export type L10nProjectsSearchResult = {
  __typename?: 'L10nProjectsSearchResult';
  items: Array<L10nProject>;
  totalCount: Scalars['Int']['output'];
};

export type L10nString = {
  __typename?: 'L10nString';
  code: Scalars['String']['output'];
  context?: Maybe<Scalars['String']['output']>;
  contextImageFilePath?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  text: Scalars['String']['output'];
  translations: Array<L10nTranslation>;
  updatedDate: Scalars['String']['output'];
};

export type L10nStringFilterInput = {
  projectId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type L10nStringInput = {
  code: Scalars['String']['input'];
  context?: InputMaybe<Scalars['String']['input']>;
  contextImageFilePath?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  text: Scalars['String']['input'];
  translations: Array<L10nTranslationInput>;
};

export type L10nStringsSearchResult = {
  __typename?: 'L10nStringsSearchResult';
  items: Array<L10nString>;
  totalCount: Scalars['Int']['output'];
};

export type L10nTranslation = {
  __typename?: 'L10nTranslation';
  languageId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type L10nTranslationInput = {
  languageId: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type L10nTranslationsSearchResult = {
  __typename?: 'L10nTranslationsSearchResult';
  items: Array<L10nTranslation>;
  totalCount: Scalars['Int']['output'];
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['String']['output'];
  locale: Scalars['String']['output'];
  name: Scalars['String']['output'];
  osxCode: Scalars['String']['output'];
  osxLocale: Scalars['String']['output'];
};

export type LanguageFilterInput = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  locale?: InputMaybe<Scalars['String']['input']>;
  osxCode?: InputMaybe<Scalars['String']['input']>;
  osxLocale?: InputMaybe<Scalars['String']['input']>;
};

export type LanguageInput = {
  id: Scalars['String']['input'];
  locale: Scalars['String']['input'];
  name: Scalars['String']['input'];
  osxCode: Scalars['String']['input'];
  osxLocale: Scalars['String']['input'];
};

export type LanguagesSearchResult = {
  __typename?: 'LanguagesSearchResult';
  items: Array<Language>;
  totalCount: Scalars['Int']['output'];
};

export type LibrariesFilterInput = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  includeStaffPadLibs?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum LibrariesSearchOrderByField {
  Title = 'title',
  UpdatedDate = 'updatedDate'
}

export type LibrariesSearchOrderByInput = {
  direction: OrderDirection;
  field: LibrariesSearchOrderByField;
};

export type LibrariesSearchResult = {
  __typename?: 'LibrariesSearchResult';
  items: Array<Library>;
  totalCount: Scalars['Int']['output'];
};

export type Library = {
  __typename?: 'Library';
  createdDate: Scalars['String']['output'];
  heroImageFilePath?: Maybe<Scalars['String']['output']>;
  heroImageMirrorUrls: Array<Scalars['String']['output']>;
  heroImageUrl?: Maybe<Scalars['String']['output']>;
  heroText?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageFilePath?: Maybe<Scalars['String']['output']>;
  imageMirrorUrls: Array<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isHero?: Maybe<Scalars['Boolean']['output']>;
  isStaffPadOnly?: Maybe<Scalars['Boolean']['output']>;
  l10n?: Maybe<Array<Library_L10n>>;
  latestBetaVersion?: Maybe<LibraryVersion>;
  latestDraftVersion?: Maybe<LibraryVersion>;
  latestReleasedVersion?: Maybe<LibraryVersion>;
  logoImageFileInfo?: Maybe<FileInfo>;
  logoImageFilePath?: Maybe<Scalars['String']['output']>;
  logoImageMirrorUrls: Array<Scalars['String']['output']>;
  logoImageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  purchaseId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedDate: Scalars['String']['output'];
};


export type LibraryHeroTextArgs = {
  locale?: InputMaybe<LocaleFilter>;
};


export type LibraryTitleArgs = {
  locale?: InputMaybe<LocaleFilter>;
};

export type LibraryDemo = {
  __typename?: 'LibraryDemo';
  featured: Scalars['Boolean']['output'];
  l10n?: Maybe<Array<LibraryDemo_L10n>>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};


export type LibraryDemoTitleArgs = {
  locale?: InputMaybe<LocaleFilter>;
};

export type LibraryDemoInput = {
  featured: Scalars['Boolean']['input'];
  l10n?: InputMaybe<Array<LibraryDemo_L10nInput>>;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type LibraryDemo_L10n = L10n & {
  __typename?: 'LibraryDemo_L10n';
  l10n_langId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type LibraryDemo_L10nInput = {
  l10n_langId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LibraryGeneresSearchResult = {
  __typename?: 'LibraryGeneresSearchResult';
  items: Array<LibraryGenre>;
  totalCount: Scalars['Int']['output'];
};

export type LibraryGenre = {
  __typename?: 'LibraryGenre';
  createdDate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imageFilePath: Scalars['String']['output'];
  imageMirrorUrls: Array<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedDate: Scalars['String']['output'];
};

export type LibraryGenreFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type LibraryGenreInput = {
  imageFilePath: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type LibraryInput = {
  heroImageFilePath?: InputMaybe<Scalars['String']['input']>;
  heroText?: InputMaybe<Scalars['String']['input']>;
  imageFilePath?: InputMaybe<Scalars['String']['input']>;
  isHero?: InputMaybe<Scalars['Boolean']['input']>;
  isStaffPadOnly?: InputMaybe<Scalars['Boolean']['input']>;
  l10n?: InputMaybe<Array<Library_L10nInput>>;
  logoImageFilePath?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  purchaseId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type LibraryVersion = {
  __typename?: 'LibraryVersion';
  createdDate: Scalars['String']['output'];
  demos: Array<LibraryDemo>;
  downloadSize?: Maybe<Scalars['Float']['output']>;
  features: Array<Scalars['String']['output']>;
  genre?: Maybe<LibraryGenre>;
  genreId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  instruments: Array<Instrument>;
  l10n?: Maybe<Array<LibraryVersion_L10n>>;
  libraryId: Scalars['String']['output'];
  overview?: Maybe<Scalars['String']['output']>;
  packageFilePath?: Maybe<Scalars['String']['output']>;
  packageFileSize?: Maybe<Scalars['Float']['output']>;
  packageHash?: Maybe<Scalars['String']['output']>;
  packageMusedownloadUrl?: Maybe<Scalars['String']['output']>;
  partner?: Maybe<Scalars['String']['output']>;
  partnerWebsite?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['String']['output']>;
  status: LibraryVersionStatus;
  statusMessage?: Maybe<Scalars['String']['output']>;
  updatedDate: Scalars['String']['output'];
  version?: Maybe<Scalars['String']['output']>;
};


export type LibraryVersionFeaturesArgs = {
  locale?: InputMaybe<LocaleFilter>;
};


export type LibraryVersionOverviewArgs = {
  locale?: InputMaybe<LocaleFilter>;
};

export type LibraryVersionGeneralInput = {
  demos: Array<LibraryDemoInput>;
  features: Array<Scalars['String']['input']>;
  genreId?: InputMaybe<Scalars['String']['input']>;
  l10n?: InputMaybe<Array<LibraryVersionGeneral_L10nInput>>;
  overview?: InputMaybe<Scalars['String']['input']>;
  partner?: InputMaybe<Scalars['String']['input']>;
  partnerWebsite?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type LibraryVersionGeneral_L10nInput = {
  features?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  l10n_langId: Scalars['String']['input'];
  overview?: InputMaybe<Scalars['String']['input']>;
};

export enum LibraryVersionStatus {
  Beta = 'beta',
  Draft = 'draft',
  FailedToRelease = 'failedToRelease',
  ProcessingBeta = 'processingBeta',
  ProcessingRelease = 'processingRelease',
  Released = 'released'
}

export type LibraryVersion_L10n = L10n & {
  __typename?: 'LibraryVersion_L10n';
  features?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  l10n_langId: Scalars['String']['output'];
  overview?: Maybe<Scalars['String']['output']>;
};

export type LibraryVersionsFilterInput = {
  libraryId: Scalars['String']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<LibraryVersionStatus>;
  statuses?: InputMaybe<Array<LibraryVersionStatus>>;
};

export type LibraryVersionsSearchResult = {
  __typename?: 'LibraryVersionsSearchResult';
  items: Array<LibraryVersion>;
  totalCount: Scalars['Int']['output'];
};

export type Library_L10n = L10n & {
  __typename?: 'Library_L10n';
  heroText?: Maybe<Scalars['String']['output']>;
  l10n_langId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Library_L10nInput = {
  heroText?: InputMaybe<Scalars['String']['input']>;
  l10n_langId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LinuxAppVersion = {
  __typename?: 'LinuxAppVersion';
  applicationId: Scalars['String']['output'];
  buildFileMusedownloadUrl?: Maybe<Scalars['String']['output']>;
  buildFilePath: Scalars['String']['output'];
  buildNumber?: Maybe<Scalars['Int']['output']>;
  createdDate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  status: ApplicationVersionStatus;
  version: Scalars['String']['output'];
  versionFull: Scalars['String']['output'];
};

export type LinuxAppVersionInput = {
  buildFilePath: Scalars['String']['input'];
  buildNumber: Scalars['Int']['input'];
  status: ApplicationVersionStatusInput;
  version: Scalars['String']['input'];
};

export type LinuxAppVersionsResult = {
  __typename?: 'LinuxAppVersionsResult';
  items: Array<LinuxAppVersion>;
  totalCount: Scalars['Int']['output'];
};

export type LinuxApplication = {
  __typename?: 'LinuxApplication';
  applicationId: Scalars['String']['output'];
  latestBetaVersion?: Maybe<LinuxAppVersion>;
  latestVersion?: Maybe<LinuxAppVersion>;
  versions: LinuxAppVersionsResult;
};


export type LinuxApplicationVersionsArgs = {
  paging?: InputMaybe<PagingInput>;
};

export type LinuxApplicationInput = {
  linuxAppId?: InputMaybe<Scalars['String']['input']>;
};

export type LinuxRpmAppVersion = {
  __typename?: 'LinuxRpmAppVersion';
  applicationId: Scalars['String']['output'];
  buildFileMusedownloadUrl?: Maybe<Scalars['String']['output']>;
  buildFilePath: Scalars['String']['output'];
  buildNumber?: Maybe<Scalars['Int']['output']>;
  createdDate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  status: ApplicationVersionStatus;
  version: Scalars['String']['output'];
  versionFull: Scalars['String']['output'];
};

export type LinuxRpmAppVersionInput = {
  buildFilePath: Scalars['String']['input'];
  buildNumber: Scalars['Int']['input'];
  status: ApplicationVersionStatusInput;
  version: Scalars['String']['input'];
};

export type LinuxRpmAppVersionsResult = {
  __typename?: 'LinuxRpmAppVersionsResult';
  items: Array<LinuxRpmAppVersion>;
  totalCount: Scalars['Int']['output'];
};

export type LinuxRpmApplication = {
  __typename?: 'LinuxRpmApplication';
  applicationId: Scalars['String']['output'];
  latestBetaVersion?: Maybe<LinuxRpmAppVersion>;
  latestVersion?: Maybe<LinuxRpmAppVersion>;
  versions: LinuxRpmAppVersionsResult;
};


export type LinuxRpmApplicationVersionsArgs = {
  paging?: InputMaybe<PagingInput>;
};

export type LinuxRpmApplicationInput = {
  linuxAppId?: InputMaybe<Scalars['String']['input']>;
};

export type LocaleFilter = {
  locale?: InputMaybe<Scalars['String']['input']>;
  osxLocale?: InputMaybe<Scalars['String']['input']>;
};

export type MacAppVersion = {
  __typename?: 'MacAppVersion';
  applicationId: Scalars['String']['output'];
  buildFileMusedownloadUrl?: Maybe<Scalars['String']['output']>;
  buildFilePath: Scalars['String']['output'];
  buildNumber?: Maybe<Scalars['Int']['output']>;
  createdDate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  status: ApplicationVersionStatus;
  version: Scalars['String']['output'];
  versionFull: Scalars['String']['output'];
};

export type MacAppVersionInput = {
  buildFilePath: Scalars['String']['input'];
  buildNumber: Scalars['Int']['input'];
  status: ApplicationVersionStatusInput;
  version: Scalars['String']['input'];
};

export type MacAppVersionsResult = {
  __typename?: 'MacAppVersionsResult';
  items: Array<MacAppVersion>;
  totalCount: Scalars['Int']['output'];
};

export type MacApplication = {
  __typename?: 'MacApplication';
  appStoreUrl?: Maybe<Scalars['String']['output']>;
  applicationId: Scalars['String']['output'];
  bundleID?: Maybe<Scalars['String']['output']>;
  latestBetaVersion?: Maybe<MacAppVersion>;
  latestVersion?: Maybe<MacAppVersion>;
  versions: MacAppVersionsResult;
};


export type MacApplicationVersionsArgs = {
  paging?: InputMaybe<PagingInput>;
};

export type MacApplicationInput = {
  appStoreUrl?: InputMaybe<Scalars['String']['input']>;
  bundleID?: InputMaybe<Scalars['String']['input']>;
};

export type MonthlyDownloadMetric = {
  __typename?: 'MonthlyDownloadMetric';
  downloadedGBs: Scalars['Float']['output'];
  estimatedCostSavings: Scalars['Float']['output'];
  month: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  applications_create?: Maybe<Application>;
  applications_createLinuxAppVersion: LinuxAppVersion;
  applications_createLinuxRpmAppVersion: LinuxRpmAppVersion;
  applications_createMacAppVersion: MacAppVersion;
  applications_createWindowsAppVersion: WindowsAppVersion;
  applications_delete: Array<Application>;
  applications_deleteLinuxApp?: Maybe<Application>;
  applications_deleteLinuxAppVersions: Array<LinuxAppVersion>;
  applications_deleteLinuxRpmApp?: Maybe<Application>;
  applications_deleteLinuxRpmAppVersions: Array<LinuxRpmAppVersion>;
  applications_deleteMacApp?: Maybe<Application>;
  applications_deleteMacAppVersions: Array<MacAppVersion>;
  applications_deleteWinApp?: Maybe<Application>;
  applications_deleteWindowsAppVersions: Array<WindowsAppVersion>;
  applications_releaseLinuxAppVersion: LinuxAppVersion;
  applications_releaseLinuxRpmAppVersion: LinuxRpmAppVersion;
  applications_releaseMacAppVersion: MacAppVersion;
  applications_releaseWindowsAppVersion: WindowsAppVersion;
  applications_translateAllFields: Application;
  applications_updateInfo?: Maybe<Application>;
  applications_updateLinuxAppVersion: LinuxAppVersion;
  applications_updateLinuxRpmAppVersion: LinuxRpmAppVersion;
  applications_updateMacAppVersion: MacAppVersion;
  applications_updateOrCreateLinuxApp: Application;
  applications_updateOrCreateLinuxRpmApp: Application;
  applications_updateOrCreateMacApp: Application;
  applications_updateOrCreateWinApp: Application;
  applications_updateWindowsAppVersion: WindowsAppVersion;
  bundles_addItem?: Maybe<BundleItem>;
  bundles_create: Bundle;
  bundles_delete: Array<Bundle>;
  bundles_deleteItems: Bundle;
  bundles_translateAllFields: Bundle;
  bundles_update: Bundle;
  effects_create: Effect;
  effects_createVersion: EffectVersion;
  effects_delete: Array<Scalars['String']['output']>;
  effects_deleteVersions: Array<EffectVersion>;
  effects_duplicateVersion: EffectVersion;
  effects_releaseVersion?: Maybe<EffectVersion>;
  effects_releaseVersionAsBeta?: Maybe<EffectVersion>;
  effects_translateAllFields: Effect;
  effects_translateAllVersionFields: EffectVersion;
  effects_update: Effect;
  effects_updateVersionGeneral: EffectVersion;
  elements_deleteElement?: Maybe<Scalars['String']['output']>;
  elements_deleteElements: Array<Scalars['String']['output']>;
  elements_run_indexer?: Maybe<Scalars['Boolean']['output']>;
  /** Repopulate the recent_elements db container with up-to-date elements. Returns number of added elements. */
  elements_updateRecent?: Maybe<Scalars['Int']['output']>;
  l10n_createLanguage: Language;
  l10n_createOrUpdateStringTranslation: L10nString;
  l10n_createProject: L10nProject;
  l10n_createString: L10nString;
  l10n_deleteLanguages: Array<Language>;
  l10n_deleteProjects: Array<L10nProject>;
  l10n_deleteStrings: Array<L10nString>;
  l10n_deleteTranslation: L10nString;
  l10n_translateAllStringsInProject?: Maybe<Scalars['Int']['output']>;
  l10n_updateProject: L10nProject;
  l10n_updateProjectStrings: ProjectStringsUpdateResult;
  l10n_updateString: L10nString;
  libraries_addInstrument?: Maybe<Instrument>;
  libraries_create: Library;
  libraries_createVersion: LibraryVersion;
  libraries_delete: Array<Library>;
  libraries_deleteInstruments: LibraryVersion;
  libraries_deleteVersions: Array<LibraryVersion>;
  libraries_duplicateVersion: LibraryVersion;
  libraries_releaseVersion?: Maybe<LibraryVersion>;
  libraries_releaseVersionAsBeta?: Maybe<LibraryVersion>;
  libraries_translateAllFields: Library;
  libraries_translateAllLibVersionFields: LibraryVersion;
  libraries_update: Library;
  libraries_updateInstrument?: Maybe<Instrument>;
  libraries_updateVersionGeneral: LibraryVersion;
  library_genres_create: LibraryGenre;
  library_genres_delete: Array<Scalars['String']['output']>;
  library_genres_update: LibraryGenre;
  migrations_migrate_muse_libs_from_prod?: Maybe<Scalars['String']['output']>;
  projects_create: Project;
  projects_delete: Array<Project>;
  projects_translateAllFields: Project;
  projects_update: Project;
  staffpad_migrate_core_library?: Maybe<Scalars['String']['output']>;
  staffpad_migrate_data_from_staffpad_cosmos?: Maybe<Scalars['String']['output']>;
  staffpad_storeCatalog_create: StaffPadStoreCatalog;
  staffpad_storeCatalog_delete: Array<StaffPadStoreCatalog>;
  staffpad_storeCatalog_translateAllFields: StaffPadStoreCatalog;
  staffpad_storeCatalog_update: StaffPadStoreCatalog;
  staffpad_upload_instrument_files_from_local_dir?: Maybe<Scalars['String']['output']>;
  tutorials_create: Tutorial;
  tutorials_delete: Array<Tutorial>;
  tutorials_translateAllFields: Tutorial;
  tutorials_update: Tutorial;
  userActivities_create_itemCreateActivity: UserActivityEvent;
  userActivities_create_itemDeleteActivity: UserActivityEvent;
  userActivities_create_itemUpdateActivity: UserActivityEvent;
  userActivities_delete: Array<UserActivityEvent>;
};


export type MutationApplications_CreateArgs = {
  application: ApplicationCreateInput;
};


export type MutationApplications_CreateLinuxAppVersionArgs = {
  appId: Scalars['String']['input'];
  version: LinuxAppVersionInput;
};


export type MutationApplications_CreateLinuxRpmAppVersionArgs = {
  appId: Scalars['String']['input'];
  version: LinuxRpmAppVersionInput;
};


export type MutationApplications_CreateMacAppVersionArgs = {
  appId: Scalars['String']['input'];
  version: MacAppVersionInput;
};


export type MutationApplications_CreateWindowsAppVersionArgs = {
  appId: Scalars['String']['input'];
  version: WindowsAppVersionInput;
};


export type MutationApplications_DeleteArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationApplications_DeleteLinuxAppArgs = {
  applicationId: Scalars['String']['input'];
};


export type MutationApplications_DeleteLinuxAppVersionsArgs = {
  versionIds: Array<Scalars['String']['input']>;
};


export type MutationApplications_DeleteLinuxRpmAppArgs = {
  applicationId: Scalars['String']['input'];
};


export type MutationApplications_DeleteLinuxRpmAppVersionsArgs = {
  versionIds: Array<Scalars['String']['input']>;
};


export type MutationApplications_DeleteMacAppArgs = {
  applicationId: Scalars['String']['input'];
};


export type MutationApplications_DeleteMacAppVersionsArgs = {
  versionIds: Array<Scalars['String']['input']>;
};


export type MutationApplications_DeleteWinAppArgs = {
  applicationId: Scalars['String']['input'];
};


export type MutationApplications_DeleteWindowsAppVersionsArgs = {
  versionIds: Array<Scalars['String']['input']>;
};


export type MutationApplications_ReleaseLinuxAppVersionArgs = {
  id: Scalars['String']['input'];
};


export type MutationApplications_ReleaseLinuxRpmAppVersionArgs = {
  id: Scalars['String']['input'];
};


export type MutationApplications_ReleaseMacAppVersionArgs = {
  id: Scalars['String']['input'];
};


export type MutationApplications_ReleaseWindowsAppVersionArgs = {
  id: Scalars['String']['input'];
};


export type MutationApplications_TranslateAllFieldsArgs = {
  id: Scalars['String']['input'];
};


export type MutationApplications_UpdateInfoArgs = {
  applicationId: Scalars['String']['input'];
  info: ApplicationInfoInput;
};


export type MutationApplications_UpdateLinuxAppVersionArgs = {
  id: Scalars['String']['input'];
  version: LinuxAppVersionInput;
};


export type MutationApplications_UpdateLinuxRpmAppVersionArgs = {
  id: Scalars['String']['input'];
  version: LinuxRpmAppVersionInput;
};


export type MutationApplications_UpdateMacAppVersionArgs = {
  id: Scalars['String']['input'];
  version: MacAppVersionInput;
};


export type MutationApplications_UpdateOrCreateLinuxAppArgs = {
  applicationId: Scalars['String']['input'];
  linuxApp: LinuxApplicationInput;
};


export type MutationApplications_UpdateOrCreateLinuxRpmAppArgs = {
  applicationId: Scalars['String']['input'];
  linuxApp: LinuxRpmApplicationInput;
};


export type MutationApplications_UpdateOrCreateMacAppArgs = {
  applicationId: Scalars['String']['input'];
  macApp: MacApplicationInput;
};


export type MutationApplications_UpdateOrCreateWinAppArgs = {
  applicationId: Scalars['String']['input'];
  winApp: WindowsApplicationInput;
};


export type MutationApplications_UpdateWindowsAppVersionArgs = {
  id: Scalars['String']['input'];
  version: WindowsAppVersionInput;
};


export type MutationBundles_AddItemArgs = {
  bundleId: Scalars['String']['input'];
  bundleItem: BundleItemInput;
};


export type MutationBundles_CreateArgs = {
  bundle: BundleInput;
};


export type MutationBundles_DeleteArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationBundles_DeleteItemsArgs = {
  bundleId: Scalars['String']['input'];
  items: Array<BundleItemInput>;
};


export type MutationBundles_TranslateAllFieldsArgs = {
  id: Scalars['String']['input'];
};


export type MutationBundles_UpdateArgs = {
  bundle: BundleInput;
  id: Scalars['String']['input'];
};


export type MutationEffects_CreateArgs = {
  effect: EffectInput;
};


export type MutationEffects_CreateVersionArgs = {
  effectId: Scalars['String']['input'];
  generalInput: EffectVersionInput;
};


export type MutationEffects_DeleteArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationEffects_DeleteVersionsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationEffects_DuplicateVersionArgs = {
  effect: EffectVersionCreateInput;
  effectId: Scalars['String']['input'];
  sourceVersionId: Scalars['String']['input'];
};


export type MutationEffects_ReleaseVersionArgs = {
  versionId: Scalars['String']['input'];
};


export type MutationEffects_ReleaseVersionAsBetaArgs = {
  versionId: Scalars['String']['input'];
};


export type MutationEffects_TranslateAllFieldsArgs = {
  id: Scalars['String']['input'];
};


export type MutationEffects_TranslateAllVersionFieldsArgs = {
  id: Scalars['String']['input'];
};


export type MutationEffects_UpdateArgs = {
  effect: EffectInput;
  id: Scalars['String']['input'];
};


export type MutationEffects_UpdateVersionGeneralArgs = {
  generalInput: EffectVersionInput;
  versionId: Scalars['String']['input'];
};


export type MutationElements_DeleteElementArgs = {
  id: Scalars['String']['input'];
};


export type MutationElements_DeleteElementsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationL10n_CreateLanguageArgs = {
  language: LanguageInput;
};


export type MutationL10n_CreateOrUpdateStringTranslationArgs = {
  stringId: Scalars['String']['input'];
  translation: L10nTranslationInput;
};


export type MutationL10n_CreateProjectArgs = {
  project: L10nProjectInput;
};


export type MutationL10n_CreateStringArgs = {
  string: L10nStringInput;
};


export type MutationL10n_DeleteLanguagesArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationL10n_DeleteProjectsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationL10n_DeleteStringsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationL10n_DeleteTranslationArgs = {
  languageId: Scalars['String']['input'];
  stringId: Scalars['String']['input'];
};


export type MutationL10n_TranslateAllStringsInProjectArgs = {
  projectId: Scalars['String']['input'];
};


export type MutationL10n_UpdateProjectArgs = {
  id: Scalars['String']['input'];
  project: L10nProjectInput;
};


export type MutationL10n_UpdateProjectStringsArgs = {
  projectId: Scalars['String']['input'];
  strings: Array<L10nProjectUpdateStringInput>;
};


export type MutationL10n_UpdateStringArgs = {
  id: Scalars['String']['input'];
  string: L10nStringInput;
};


export type MutationLibraries_AddInstrumentArgs = {
  instrument: InstrumentInput;
  libVersionId: Scalars['String']['input'];
};


export type MutationLibraries_CreateArgs = {
  library: LibraryInput;
};


export type MutationLibraries_CreateVersionArgs = {
  generalInput: LibraryVersionGeneralInput;
  libraryId: Scalars['String']['input'];
};


export type MutationLibraries_DeleteArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationLibraries_DeleteInstrumentsArgs = {
  instrumentIds: Array<Scalars['Int']['input']>;
  libVersionId: Scalars['String']['input'];
};


export type MutationLibraries_DeleteVersionsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationLibraries_DuplicateVersionArgs = {
  libraryId: Scalars['String']['input'];
  sourceVersionId: Scalars['String']['input'];
};


export type MutationLibraries_ReleaseVersionArgs = {
  versionId: Scalars['String']['input'];
};


export type MutationLibraries_ReleaseVersionAsBetaArgs = {
  versionId: Scalars['String']['input'];
};


export type MutationLibraries_TranslateAllFieldsArgs = {
  id: Scalars['String']['input'];
};


export type MutationLibraries_TranslateAllLibVersionFieldsArgs = {
  id: Scalars['String']['input'];
};


export type MutationLibraries_UpdateArgs = {
  id: Scalars['String']['input'];
  library: LibraryInput;
};


export type MutationLibraries_UpdateInstrumentArgs = {
  instrument: InstrumentInput;
  instrumentId: Scalars['Int']['input'];
  libVersionId: Scalars['String']['input'];
};


export type MutationLibraries_UpdateVersionGeneralArgs = {
  generalInput: LibraryVersionGeneralInput;
  versionId: Scalars['String']['input'];
};


export type MutationLibrary_Genres_CreateArgs = {
  genre: LibraryGenreInput;
};


export type MutationLibrary_Genres_DeleteArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationLibrary_Genres_UpdateArgs = {
  genre: LibraryGenreInput;
  id: Scalars['String']['input'];
};


export type MutationMigrations_Migrate_Muse_Libs_From_ProdArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationProjects_CreateArgs = {
  project: ProjectInput;
};


export type MutationProjects_DeleteArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationProjects_TranslateAllFieldsArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjects_UpdateArgs = {
  id: Scalars['String']['input'];
  project: ProjectInput;
};


export type MutationStaffpad_StoreCatalog_CreateArgs = {
  catalog: StaffPadStoreCatalogInput;
};


export type MutationStaffpad_StoreCatalog_DeleteArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationStaffpad_StoreCatalog_TranslateAllFieldsArgs = {
  id: Scalars['String']['input'];
};


export type MutationStaffpad_StoreCatalog_UpdateArgs = {
  catalog: StaffPadStoreCatalogInput;
  id: Scalars['String']['input'];
};


export type MutationTutorials_CreateArgs = {
  tutorial: TutorialInput;
};


export type MutationTutorials_DeleteArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationTutorials_TranslateAllFieldsArgs = {
  id: Scalars['String']['input'];
};


export type MutationTutorials_UpdateArgs = {
  id: Scalars['String']['input'];
  tutorial: TutorialInput;
};


export type MutationUserActivities_Create_ItemCreateActivityArgs = {
  event: ItemCreateUserActivityEventInput;
};


export type MutationUserActivities_Create_ItemDeleteActivityArgs = {
  event: ItemDeleteUserActivityEventInput;
};


export type MutationUserActivities_Create_ItemUpdateActivityArgs = {
  event: ItemUpdateUserActivityEventInput;
};


export type MutationUserActivities_DeleteArgs = {
  ids: Array<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PagingInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type Project = {
  __typename?: 'Project';
  createdDate: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageFilePath?: Maybe<Scalars['String']['output']>;
  imageMirrorUrls: Array<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  l10n?: Maybe<Array<Project_L10n>>;
  projectFileMirrorUrls: Array<Scalars['String']['output']>;
  projectFilePath?: Maybe<Scalars['String']['output']>;
  projectFileUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedDate: Scalars['String']['output'];
};


export type ProjectDescriptionArgs = {
  locale?: InputMaybe<LocaleFilter>;
};


export type ProjectTitleArgs = {
  locale?: InputMaybe<LocaleFilter>;
};

export type ProjectFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageFilePath?: InputMaybe<Scalars['String']['input']>;
  l10n?: InputMaybe<Array<Project_L10nInput>>;
  projectFilePath?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export enum ProjectSearchOrderByField {
  Title = 'title',
  UpdatedDate = 'updatedDate'
}

export type ProjectSearchOrderByInput = {
  direction: OrderDirection;
  field: ProjectSearchOrderByField;
};

export type ProjectStringsUpdateResult = {
  __typename?: 'ProjectStringsUpdateResult';
  created: Scalars['Int']['output'];
  deleted: Scalars['Int']['output'];
  updated: Scalars['Int']['output'];
};

export type Project_L10n = L10n & {
  __typename?: 'Project_L10n';
  description?: Maybe<Scalars['String']['output']>;
  l10n_langId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Project_L10nInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  l10n_langId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsSearchResult = {
  __typename?: 'ProjectsSearchResult';
  items: Array<Project>;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  application?: Maybe<Application>;
  applications: Array<Application>;
  applications_linuxRpmVersionExists: Scalars['Boolean']['output'];
  applications_linuxVersionExists: Scalars['Boolean']['output'];
  applications_macVersionExists: Scalars['Boolean']['output'];
  applications_windowsVersionExists: Scalars['Boolean']['output'];
  bundle?: Maybe<Bundle>;
  bundles_search: BundlesSearchResult;
  effect?: Maybe<Effect>;
  effects_search: EffectsSearchResult;
  effects_version?: Maybe<EffectVersion>;
  effects_versions_search: EffectVersionsSearchResult;
  elements: Array<Element>;
  elementsCount: Scalars['Int']['output'];
  elements_albums: Array<ElementAlbum>;
  elements_genres: Array<ElementGenre>;
  elements_instruments: Array<ElementInstrument>;
  elements_keywords: Array<ElementKeyword>;
  elements_recent: Array<Element>;
  elements_recentCount?: Maybe<Scalars['Int']['output']>;
  elements_search: ElementSearchResult;
  files_getFileInfo: FileInfo;
  l10n_language?: Maybe<Language>;
  l10n_project?: Maybe<L10nProject>;
  l10n_searchLanguages: LanguagesSearchResult;
  l10n_searchProjects: L10nProjectsSearchResult;
  l10n_searchStrings: L10nStringsSearchResult;
  l10n_string?: Maybe<L10nString>;
  l10n_translateText?: Maybe<Scalars['String']['output']>;
  libraries_getExistingInstrumentsInfoById: Array<InstrumentInfo>;
  libraries_search: LibrariesSearchResult;
  libraries_version?: Maybe<LibraryVersion>;
  libraries_versions_search: LibraryVersionsSearchResult;
  library?: Maybe<Library>;
  library_genre?: Maybe<LibraryGenre>;
  library_genres_search: LibraryGeneresSearchResult;
  metrics_allTimeDownloadsAndSavingsMetrics: AllTimeDownloadMetrics;
  metrics_entityDownloads: Array<EntityDownloadMetric>;
  metrics_itemDownloads: Array<ItemDownloadMetric>;
  metrics_monthly_totalDownloadsAndEstimatedCostSavings: Array<MonthlyDownloadMetric>;
  metrics_tracker_stats: TrackerStatistics;
  project?: Maybe<Project>;
  projects_search: ProjectsSearchResult;
  staffpad_store_catalog?: Maybe<StaffPadStoreCatalog>;
  staffpad_store_catalogsSearch: StaffPadStoreCatalogsSearchResult;
  staffpad_store_product?: Maybe<StaffPadStoreItemProductInfo>;
  staffpad_store_searchProducts: Array<StaffPadStoreItemProductInfo>;
  tutorial?: Maybe<Tutorial>;
  tutorials_search: TutorialsSearchResult;
  userActivities_search: UserActivityEventSearchResult;
  userActivity?: Maybe<UserActivityEvent>;
};


export type QueryApplicationArgs = {
  id: Scalars['String']['input'];
};


export type QueryApplications_LinuxRpmVersionExistsArgs = {
  appId: Scalars['String']['input'];
  buildNumber: Scalars['Int']['input'];
  versionStr: Scalars['String']['input'];
};


export type QueryApplications_LinuxVersionExistsArgs = {
  appId: Scalars['String']['input'];
  buildNumber: Scalars['Int']['input'];
  versionStr: Scalars['String']['input'];
};


export type QueryApplications_MacVersionExistsArgs = {
  appId: Scalars['String']['input'];
  buildNumber: Scalars['Int']['input'];
  versionStr: Scalars['String']['input'];
};


export type QueryApplications_WindowsVersionExistsArgs = {
  appId: Scalars['String']['input'];
  buildNumber: Scalars['Int']['input'];
  versionStr: Scalars['String']['input'];
};


export type QueryBundleArgs = {
  id: Scalars['String']['input'];
};


export type QueryBundles_SearchArgs = {
  filter?: InputMaybe<BundleFilterInput>;
  orderBy?: InputMaybe<BundleSearchOrderByInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryEffectArgs = {
  id: Scalars['String']['input'];
};


export type QueryEffects_SearchArgs = {
  filter?: InputMaybe<EffectFilterInput>;
  orderBy?: InputMaybe<EffectSearchOrderByInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryEffects_VersionArgs = {
  id: Scalars['String']['input'];
};


export type QueryEffects_Versions_SearchArgs = {
  filter?: InputMaybe<EffectVersionsFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryElementsArgs = {
  filter?: InputMaybe<ElementFilterInput>;
  orderBy?: InputMaybe<ElementOrderByInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryElementsCountArgs = {
  filter?: InputMaybe<ElementFilterInput>;
};


export type QueryElements_RecentArgs = {
  paging?: InputMaybe<PagingInput>;
};


export type QueryElements_SearchArgs = {
  filter?: InputMaybe<ElementFilterInput>;
  orderBy?: InputMaybe<ElementSearchOrderByInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryFiles_GetFileInfoArgs = {
  filePath: Scalars['String']['input'];
};


export type QueryL10n_LanguageArgs = {
  id: Scalars['String']['input'];
};


export type QueryL10n_ProjectArgs = {
  id: Scalars['String']['input'];
};


export type QueryL10n_SearchLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryL10n_SearchProjectsArgs = {
  filter?: InputMaybe<L10nProjectFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryL10n_SearchStringsArgs = {
  filter?: InputMaybe<L10nStringFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryL10n_StringArgs = {
  id: Scalars['String']['input'];
};


export type QueryL10n_TranslateTextArgs = {
  text: Scalars['String']['input'];
  toLang: Scalars['String']['input'];
};


export type QueryLibraries_GetExistingInstrumentsInfoByIdArgs = {
  instrumentId: Scalars['Int']['input'];
};


export type QueryLibraries_SearchArgs = {
  filter?: InputMaybe<LibrariesFilterInput>;
  orderBy?: InputMaybe<LibrariesSearchOrderByInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryLibraries_VersionArgs = {
  id: Scalars['String']['input'];
};


export type QueryLibraries_Versions_SearchArgs = {
  filter?: InputMaybe<LibraryVersionsFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryLibraryArgs = {
  id: Scalars['String']['input'];
};


export type QueryLibrary_GenreArgs = {
  id: Scalars['String']['input'];
};


export type QueryLibrary_Genres_SearchArgs = {
  filter?: InputMaybe<LibraryGenreFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryMetrics_EntityDownloadsArgs = {
  filter: EntityDownloadMetricsFilter;
};


export type QueryMetrics_ItemDownloadsArgs = {
  filter: ItemDownloadMetricsFilter;
};


export type QueryMetrics_Monthly_TotalDownloadsAndEstimatedCostSavingsArgs = {
  numberOfMonths: Scalars['Int']['input'];
};


export type QueryProjectArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjects_SearchArgs = {
  filter?: InputMaybe<ProjectFilterInput>;
  orderBy?: InputMaybe<ProjectSearchOrderByInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryStaffpad_Store_CatalogArgs = {
  id: Scalars['String']['input'];
};


export type QueryStaffpad_Store_CatalogsSearchArgs = {
  filter?: InputMaybe<StaffPadStoreCatalogFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryStaffpad_Store_ProductArgs = {
  id: Scalars['String']['input'];
  productType: StaffPadStoreItemProductType;
};


export type QueryStaffpad_Store_SearchProductsArgs = {
  productType: StaffPadStoreItemProductType;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTutorialArgs = {
  id: Scalars['String']['input'];
};


export type QueryTutorials_SearchArgs = {
  filter?: InputMaybe<TutorialFilterInput>;
  orderBy?: InputMaybe<TutorialSearchOrderByInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryUserActivities_SearchArgs = {
  filter?: InputMaybe<UserActivityEventFilterInput>;
  orderBy?: InputMaybe<UserActivityOrderByInput>;
  paging?: InputMaybe<PagingInput>;
};


export type QueryUserActivityArgs = {
  id: Scalars['String']['input'];
};

export type StaffPadStoreCatalog = {
  __typename?: 'StaffPadStoreCatalog';
  createdDate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  sections: Array<StaffPadStoreSection>;
  updatedDate: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type StaffPadStoreCatalogFilterInput = {
  version?: InputMaybe<Scalars['String']['input']>;
};

export type StaffPadStoreCatalogInput = {
  sections: Array<StaffPadStoreSectionInput>;
  version: Scalars['String']['input'];
};

export type StaffPadStoreCatalogsSearchResult = {
  __typename?: 'StaffPadStoreCatalogsSearchResult';
  items: Array<StaffPadStoreCatalog>;
  totalCount: Scalars['Int']['output'];
};

export type StaffPadStoreItem = {
  __typename?: 'StaffPadStoreItem';
  accent: StaffPadStoreItemAccent;
  product?: Maybe<StaffPadStoreItemProduct>;
  productId: Scalars['String']['output'];
  productType: StaffPadStoreItemProductType;
};

export enum StaffPadStoreItemAccent {
  Blue = 'blue',
  Orange = 'orange'
}

export type StaffPadStoreItemInput = {
  accent: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  productType: StaffPadStoreItemProductType;
};

export type StaffPadStoreItemProduct = Library;

export type StaffPadStoreItemProductInfo = {
  __typename?: 'StaffPadStoreItemProductInfo';
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export enum StaffPadStoreItemProductType {
  Library = 'library'
}

export type StaffPadStoreSection = {
  __typename?: 'StaffPadStoreSection';
  areItemsShuffled: Scalars['Boolean']['output'];
  items: Array<StaffPadStoreItem>;
  l10n?: Maybe<Array<StaffPadStoreSection_L10n>>;
  layout: StaffPadStoreSectionLayout;
  title: Scalars['String']['output'];
};


export type StaffPadStoreSectionTitleArgs = {
  locale?: InputMaybe<LocaleFilter>;
};

export type StaffPadStoreSectionInput = {
  areItemsShuffled: Scalars['Boolean']['input'];
  items: Array<StaffPadStoreItemInput>;
  l10n?: InputMaybe<Array<StaffPadStoreSectionL10nInput>>;
  layout: StaffPadStoreSectionLayout;
  title: Scalars['String']['input'];
};

export type StaffPadStoreSectionL10nInput = {
  l10n_langId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum StaffPadStoreSectionLayout {
  Compact = 'compact',
  Regular = 'regular'
}

export type StaffPadStoreSection_L10n = L10n & {
  __typename?: 'StaffPadStoreSection_L10n';
  l10n_langId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type TimeDurationInput = {
  amount: Scalars['Float']['input'];
  unit: TimeUnit;
};

export enum TimeUnit {
  Day = 'day',
  Hour = 'hour',
  Minute = 'minute',
  Second = 'second'
}

export type TrackerStatistics = {
  __typename?: 'TrackerStatistics';
  activeTorrents: Scalars['Int']['output'];
  peersAll: Scalars['Int']['output'];
  peersSeederOnly: Scalars['Int']['output'];
  torrentsCount: Scalars['Int']['output'];
};

export type Tutorial = {
  __typename?: 'Tutorial';
  createdDate: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageFilePath?: Maybe<Scalars['String']['output']>;
  imageMirrorUrls: Array<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  l10n?: Maybe<Array<Tutorial_L10n>>;
  title: Scalars['String']['output'];
  updatedDate: Scalars['String']['output'];
  videoUrl?: Maybe<Scalars['String']['output']>;
};


export type TutorialDescriptionArgs = {
  locale?: InputMaybe<LocaleFilter>;
};


export type TutorialTitleArgs = {
  locale?: InputMaybe<LocaleFilter>;
};

export type TutorialFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageFilePath?: InputMaybe<Scalars['String']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  l10n?: InputMaybe<Array<Tutorial_L10nInput>>;
  title: Scalars['String']['input'];
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export enum TutorialSearchOrderByField {
  Title = 'title',
  UpdatedDate = 'updatedDate'
}

export type TutorialSearchOrderByInput = {
  direction: OrderDirection;
  field: TutorialSearchOrderByField;
};

export type Tutorial_L10n = L10n & {
  __typename?: 'Tutorial_L10n';
  description?: Maybe<Scalars['String']['output']>;
  l10n_langId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Tutorial_L10nInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  l10n_langId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialsSearchResult = {
  __typename?: 'TutorialsSearchResult';
  items: Array<Tutorial>;
  totalCount: Scalars['Int']['output'];
};

export type UserActivity = ItemCreateActivity | ItemDeleteActivity | ItemUpdateActivity;

export type UserActivityEvent = {
  __typename?: 'UserActivityEvent';
  activity: UserActivity;
  date: Scalars['String']['output'];
  id: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

export type UserActivityEventFilterInput = {
  dateFrom?: InputMaybe<Scalars['String']['input']>;
  dateTo?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<EntityType>;
  itemId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserActivityEventSearchResult = {
  __typename?: 'UserActivityEventSearchResult';
  items: Array<UserActivityEvent>;
  totalCount: Scalars['Int']['output'];
};

export enum UserActivityOrderByField {
  Date = 'date'
}

export type UserActivityOrderByInput = {
  direction: OrderDirection;
  field: UserActivityOrderByField;
};

export enum WinApplicationType {
  Exe = 'EXE',
  Msi = 'MSI',
  Msix = 'MSIX'
}

export type WindowsAppVersion = {
  __typename?: 'WindowsAppVersion';
  appType: WinApplicationType;
  applicationId: Scalars['String']['output'];
  buildFileMusedownloadUrl?: Maybe<Scalars['String']['output']>;
  buildFilePath: Scalars['String']['output'];
  buildNumber?: Maybe<Scalars['Int']['output']>;
  createdDate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  installArgs?: Maybe<Scalars['String']['output']>;
  status: ApplicationVersionStatus;
  version: Scalars['String']['output'];
  versionFull: Scalars['String']['output'];
};

export type WindowsAppVersionInput = {
  appType: WinApplicationType;
  buildFilePath: Scalars['String']['input'];
  buildNumber: Scalars['Int']['input'];
  installArgs?: InputMaybe<Scalars['String']['input']>;
  status: ApplicationVersionStatusInput;
  version: Scalars['String']['input'];
};

export type WindowsAppVersionsResult = {
  __typename?: 'WindowsAppVersionsResult';
  items: Array<WindowsAppVersion>;
  totalCount: Scalars['Int']['output'];
};

export type WindowsApplication = {
  __typename?: 'WindowsApplication';
  MSIXPackageID?: Maybe<Scalars['String']['output']>;
  applicationId: Scalars['String']['output'];
  isMicrosoftStoreApp?: Maybe<Scalars['Boolean']['output']>;
  latestBetaVersion?: Maybe<WindowsAppVersion>;
  latestVersion?: Maybe<WindowsAppVersion>;
  versions: WindowsAppVersionsResult;
};


export type WindowsApplicationVersionsArgs = {
  paging?: InputMaybe<PagingInput>;
};

export type WindowsApplicationInput = {
  MSIXPackageID?: InputMaybe<Scalars['String']['input']>;
  isMicrosoftStoreApp?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MuseSamplerQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type MuseSamplerQuery = { __typename?: 'Query', application?: { __typename?: 'Application', imageUrl?: string | null, macApp?: { __typename?: 'MacApplication', latestVersion?: { __typename?: 'MacAppVersion', id: string, version: string, buildFileMusedownloadUrl?: string | null } | null } | null, windowsApp?: { __typename?: 'WindowsApplication', latestVersion?: { __typename?: 'WindowsAppVersion', id: string, version: string, buildFileMusedownloadUrl?: string | null } | null } | null, linuxApp?: { __typename?: 'LinuxApplication', latestVersion?: { __typename?: 'LinuxAppVersion', id: string, version: string, buildFileMusedownloadUrl?: string | null } | null } | null } | null };

export type SoundfontsQueryVariables = Exact<{ [key: string]: never; }>;


export type SoundfontsQuery = { __typename?: 'Query', libraries_search: { __typename?: 'LibrariesSearchResult', items: Array<{ __typename?: 'Library', name: string, logoImageUrl?: string | null, latestReleasedVersion?: { __typename?: 'LibraryVersion', version?: string | null, downloadSize?: number | null, overview?: string | null, packageMusedownloadUrl?: string | null } | null }> } };


export const MuseSamplerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MuseSampler"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"application"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"macApp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latestVersion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"buildFileMusedownloadUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"windowsApp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latestVersion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"buildFileMusedownloadUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"linuxApp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latestVersion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"buildFileMusedownloadUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MuseSamplerQuery, MuseSamplerQueryVariables>;
export const SoundfontsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Soundfonts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libraries_search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"EnumValue","value":"title"}},{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"offset"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logoImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"latestReleasedVersion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"downloadSize"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"packageMusedownloadUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SoundfontsQuery, SoundfontsQueryVariables>;