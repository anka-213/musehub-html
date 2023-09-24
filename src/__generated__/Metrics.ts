/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Metrics
// ====================================================

export interface Metrics_metrics_allTimeDownloadsAndSavingsMetrics {
  __typename: "AllTimeDownloadMetrics";
  downloadedSize: string;
  bandwidthCostSavings: number;
}

export interface Metrics {
  metrics_allTimeDownloadsAndSavingsMetrics: Metrics_metrics_allTimeDownloadsAndSavingsMetrics;
}
