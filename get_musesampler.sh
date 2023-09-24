# curl https://muse-webservice.azurewebsites.net/graphql -X POST \
#               -H 'content-type: application/json' \
#               --data '{  "query": "{ application(id: \"musesampler\") { macApp { latestVersion { id versionFull buildFileMusedownloadUrl }} windowsApp { latestVersion { id versionFull buildFileMusedownloadUrl }} linuxApp { latestVersion { id versionFull buildFileMusedownloadUrl }} } }"}' > musesampler_versions.json

# cat | jq -r '.data.application | to_entries[] | "curl \(.value.latestVersion.buildFileMusedownloadUrl) -o musesampler-\(.key)-\(.value.latestVersion.versionFull).torrent"'
cat musesampler_versions.json | jq -r '.data.application | to_entries[] | [ "musesampler", .key, .value.latestVersion.versionFull, .value.latestVersion.id, .value.latestVersion.buildFileMusedownloadUrl] | @tsv'
