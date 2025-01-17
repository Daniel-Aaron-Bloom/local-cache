import { CompressionMethod } from './constants'

export interface ArtifactCacheEntry {
  cacheKey?: string,
  scope?: string,
  cacheVersion?: string,
  creationTime?: string,
  archiveLocation?: string,
}

export interface ArtifactCacheList {
  totalCount: number,
  artifactCaches?: ArtifactCacheEntry[],
}

export interface CommitCacheRequest {
  size: number,
}

export interface ReserveCacheRequest {
  key: string,
  version?: string,
  cacheSize?: number,
}

export interface ReserveCacheResponse {
  cacheId: number,
}

export interface InternalCacheOptions {
  compressionMethod?: CompressionMethod,
  enableCrossOsArchive?: boolean,
  cacheSize?: number,
}

export interface ArchiveTool {
  path: string,
  type: string,
}

export interface Exec {
  program: string,
  args: string[],
}
