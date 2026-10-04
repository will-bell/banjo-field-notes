---
layout: default
title: Open G Chords
---

# Open G chord visualizer

Tuning: `gDGBD`

The diagrams below use the four long strings (4th → 1st) to show movable chord shapes. The short 5th string is a G drone and is discussed separately because it does not always belong to the chord.

<div class="chord-legend">
  <span><span class="sample-dot root"></span>root</span>
  <span><span class="sample-dot"></span>other chord tone</span>
</div>

## 1. Pick a chord → see its shapes

Choose a major chord and this will show the practical complete major-triad shapes available through fret 12.

<div
  class="chord-visualizer"
  data-chord-visualizer
  data-tuning="open-g"
  data-mode="chord"
  data-default-chord="7">
</div>

The three repeating major-triad families in Open G are:

- **Barre**
- **F-shape**
- **D-shape**

They are not three unrelated chords. They are three inversions of the same major triad distributed differently across the strings.

## 2. Pick a shape → see what chord it makes

Choose a movable shape family, then move it up the neck.

<div
  class="chord-visualizer"
  data-chord-visualizer
  data-tuning="open-g"
  data-mode="shape"
  data-default-family="barre"
  data-default-position="0">
</div>

This is the important idea underneath the lookup:

> A movable chord shape keeps the same interval structure. Moving it one fret raises every note by one semitone, so the chord name changes while the shape's internal relationships stay the same.

## Shape formulas

Using `n` as the movable position:

```text
Barre     n-n-n-n
F-shape   (n+2)-(n+1)-n-(n+2)
D-shape   (n+2)-n-(n+1)-(n+2)
```

The root lives in a predictable place in each family:

| Family | Root location |
|---|---|
| Barre | 3rd string |
| F-shape | 4th and 1st strings |
| D-shape | 2nd string |

## A few useful open-position chords

These are worth learning even though not all of them belong to the movable-major system above.

| Chord | Shape (4th → 1st) | Notes |
|---|---:|---|
| G | `0-0-0-0` | D G B D |
| C | `2-0-1-2` | E G C E |
| D | `0-2-3-4` | D A D F# |
| D7 | `0-2-1-4` | D A C F# |
| Em | `2-0-0-2` | E G B E |
| Am | `2-2-1-2` | E A C E |
| G7 | `0-0-0-3` | D G B F |

## What about the 5th string?

The short string is G.

That means it is:

- the root of G
- the 5th of C
- the minor 3rd of Em
- not a chord tone in every chord

So there are really two things to listen for:

1. the harmony made by the four long strings
2. the texture created when the G drone is added

That tension is part of what makes banjo sound like banjo.

## Sources / further reference

- [Banjo 101 — Open G and Double C chord diagrams](https://www.doofusmusic.com/PDF/Banjo%20101.pdf)
- [BanjoChords.net — Open G chord chart](https://banjochords.net/chords/chart/)
- [Langston Banjo Chord Finder](https://www.langston.com/Banjo/bc345.php)

<script src="{{ '/assets/js/chord-visualizer.js' | relative_url }}"></script>
