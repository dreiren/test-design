# Pinoy Power Rangers — Geek Squad Post

Realistic, geek-styled Filipino "Power Rangers" team artwork, animated into a
4-second social post video and looping GIF.

## Files

| File | Description |
|---|---|
| `team.png` | Hero shot — the 5-member geek Ranger squad (red, blue, yellow, black, pink) posing on a Manila rooftop with the Philippine flag, each with a nerdy signature prop (glasses, pocket protector, comic book, tablet gadget, anime pin backpack). |
| `action.png` | Action shot — the same team leaping into a dynamic jump pose over a Manila cityscape at dusk. |
| `pinoy_power_rangers_4s.mp4` | 4-second, 1280x720, 25fps H.264 video: a Ken Burns zoom on `team.png` crossfading into `action.png`. |
| `pinoy_power_rangers.gif` | GIF version of the video (480px wide, 15fps, palette-optimized) for easy posting/sharing. |

## How it was made

1. Generated both images with an AI image model at 16:9 aspect ratio.
2. Built the video with `ffmpeg` using a `zoompan` Ken Burns effect on each
   image plus an `xfade` crossfade transition, trimmed to exactly 4 seconds:

   ```bash
   ffmpeg -y \
     -loop 1 -i team.png \
     -loop 1 -i action.png \
     -filter_complex "\
   [0:v]scale=1536:1024,zoompan=z='min(zoom+0.0012,1.25)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=125:s=1280x720:fps=25,setsar=1[v0];\
   [1:v]scale=1536:1024,zoompan=z='min(zoom+0.0012,1.25)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=125:s=1280x720:fps=25,setsar=1[v1];\
   [v0][v1]xfade=transition=fade:duration=0.5:offset=2.25[vout]" \
     -map "[vout]" -t 4 -r 25 -pix_fmt yuv420p -c:v libx264 -crf 18 -preset medium \
     pinoy_power_rangers_4s.mp4
   ```

3. Converted the video to a palette-optimized GIF:

   ```bash
   ffmpeg -y -i pinoy_power_rangers_4s.mp4 \
     -vf "fps=15,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3" \
     pinoy_power_rangers.gif
   ```
