---
layout: default
title: Double C Chords
---

# Double C chord visualizer

Tuning: `gCGCD`

The diagrams below use the four long strings (4th → 1st) to show movable chord shapes. The short 5th string remains a G drone.

<div class="chord-legend">
  <span><span class="sample-dot root"></span>root</span>
  <span><span class="sample-dot"></span>other chord tone</span>
</div>

## 1. Pick a chord → see its shapes

Choose a major chord and this will show the practical complete major-triad shapes available through fret 12.

<div
  class="chord-visualizer"
  data-chord-visualizer
  data-tuning="double-c"
  data-mode="chord"
  data-default-chord="0">
</div>

Double C also has three repeating complete major-triad families. Their names are less standardized than the familiar Open G F-shape / D-shape vocabulary, so on this site I call them:

- **C-shape** — based on `0-0-0-2`
- **Compact inversion** — the alternating shape such as `4-5-4-5`
- **F-shape** — based on low-position F, `0-2-0-3`

## 2. Pick a shape → see what chord it makes

Choose a family and slide it along the neck.

<div
  class="chord-visualizer"
  data-chord-visualizer
  data-tuning="double-c"
  data-mode="shape"
  data-default-family="c"
  data-default-position="0">
</div>

The key idea is the same as in Open G: the tuning changes where the intervals land under your fingers, but moving the whole shape by one fret transposes the chord by one semitone.

## Shape formulas

Using `n` as the movable position:

```text
C-shape            n-n-n-(n+2)
Compact inversion  n-(n+1)-n-(n+1)
F-shape            n-(n+2)-n-(n+3)
```

Root locations:

| Family | Root location |
|---|---|
| C-shape | 4th and 2nd strings |
| Compact inversion | 3rd string |
| F-shape | 1st string |

## A few useful low-position chords

| Chord | Shape (4th → 1st) | Notes |
|---|---:|---|
| C | `0-0-0-2` | C G C E |
| F | `0-2-0-3` | C A C F |
| G | `2-4-2-5` | D B D G |
| G7 | `2-4-5-5` | D B F G |
| Am | `0-2-0-2` | C A C E |
| Dm | `2-2-2-3` | D A D F |
| Em | `4-4-4-5` | E B E G |

## Compare the same chord across tunings

C major is a nice example.

In Open G, three common major-triad positions are:

```text
2-0-1-2
5-5-5-5
10-9-8-10
```

In Double C:

```text
0-0-0-2
4-5-4-5
7-9-7-10
```

The chord itself did not change: C–E–G. The tuning changed the geometry needed to find those notes.

## What about the 5th string?

The short string is still G.

For C major, that G is a chord tone (the 5th), so the drone fits naturally. For other chords it may become a color tone or a dissonance.

That is worth treating as a separate listening question from the chord shape itself.

## Sources / further reference

- [Banjo 101 — Open G and Double C chord diagrams](https://www.doofusmusic.com/PDF/Banjo%20101.pdf)
- [Langston Banjo Chord Finder](https://www.langston.com/Banjo/bc345.php)

<script src="{{ '/assets/js/chord-visualizer.js' | relative_url }}"></script>
