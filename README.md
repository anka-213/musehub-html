# A simple web-based alternative to MuseHub

Since MuseScore requires a closed-source binary program [MuseHub](https://www.musehub.com/) in order to download their soundfonts etc, I built this as an opensource atlernative. It is simply a webpage which links to the official torrent files and then you can use those to download the files you want using your bittorent client of choice.

[Click here](https://anka-213.github.io/musehub-html) to get to the webpage

## Usage
1. Go to the page listing downloads [here](https://anka-213.github.io/musehub-html)
2. Click on what you want to download. You'll need musesampler in addition to whatever soundfonts you want
3. Download the torrents using a torrent client. For example [Transmission](https://transmissionbt.com/) or [qBittorrent](https://www.qbittorrent.org/)
4. Move the downloaded files to the correct location for MuseScore to find them

### Shellscript
As an alternative, you can run [this script](./get_musesampler.sh) to download the torrent files. It currently only supports downloading the musesampler

## File locations

TODO: Determine where to put the files for each OS
