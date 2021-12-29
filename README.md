# What is this?

Librechromecast is a free (as in "freedom") and open source application for casting video files with subtitles from your PC to your TV using a chromecast device.
Is is licensed under the AGPL, meaning it is free today and will be free forever.

## What can I do with it?

You can:

- Cast local videos from your PC to your TV
- Add a subtitle file (warning: only .vtt is supported, if you have a .srt, convert it to .vtt, there are many third party tools over the net)
- Cast Youtube videos to your TV
- Pause/resume, move forwards/backwards, go into a specified timestamp, and stop the media

## Who is this made for?

Most of Librechromcast's functionaly, such as pausing/resuming and casting Youtube videos, can be done from your cellphone already and are there merely included for the sake of completeness. The application's big selling point is this: imagine you downloaded a video to your computer, and want to watch it on your TV; furthermore, you want to add subs. Currently, the only options available are propietary or too difficult for the average user (mkchromecast, for example, is a command-line tool). Librechromecast tries to fill that space.

## Supported platforms

This is an electron app, so it should be able to run on every major PC platform. However, I only tested Linux and Windows builds. Below, I offer instructions for building on MacOS, and perhaps someone figures out how to do it on the BSD's. But I don't officialy support them, so you are on your own.

## Build instructions

- git clone https://github.com/garak92/librechromecast.git
- cd librechromecast/
- npm i
- npm run build && npm run server-build
- npm run `electron:package:target_platform` (options are: win, linux, mac)

## How is this thing made?

It has a frontend made using React and Redux, and a backend API using Node (which is really just a wrapper for the [Chromecast-API](https://github.com/alxhotel/chromecast-api) library). This is all packaged for desktop using Electron and Babel. FYI: the frontend runs on port 3000, and the backend uses port 5000. I am open to criticism, suggestions, and PRs. 
