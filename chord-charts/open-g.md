---
layout: default
title: Open G Chords
---

# Open G chord chart

Tuning: `gDGBD`

This page treats the four long strings as the chord shape:

```text
4th  3rd  2nd  1st
 D    G    B    D
```

The short 5th string (`g`) is usually a drone. Whether it belongs in the chord depends on the chord and the musical context, so the movable-shape system below ignores it.

A shape like `5-4-3-5` means:

```text
4th string: fret 5
3rd string: fret 4
2nd string: fret 3
1st string: fret 5
```

## Quick reference

A few useful low-position chords:

| Chord | Shape | Notes on long strings |
|---|---:|---|
| G | `0-0-0-0` | D G B D |
| C | `2-0-1-2` | E G C E |
| D | `0-2-3-4` | D A D F# |
| D7 | `0-2-1-4` | D A C F# |
| Em | `2-0-0-2` | E G B E |
| Am | `2-2-1-2` | E A C E |
| G7 | `0-0-0-3` | D G B F |

The low C and Am shapes are inversions: the root is present, but it is not the lowest note. That is normal.

---

# View 1: I know the chord. Where can I play it?

For **major triads**, Open G gives us three repeating shape families:

- **Barre**
- **F-shape**
- **D-shape**

Together they are the three inversions of a major triad distributed across the four long strings.

The table below shows practical complete major-triad voicings through the 12th fret. These are not every mathematically possible fingering; they are the repeating movable families worth learning.

| Chord | Shapes (4th → 1st) |
|---|---|
| C | `2-0-1-2` (D-shape) · `5-5-5-5` (Barre) · `10-9-8-10` (F-shape) |
| C# | `3-1-2-3` (D-shape) · `6-6-6-6` (Barre) · `11-10-9-11` (F-shape) |
| D | `4-2-3-4` (D-shape) · `7-7-7-7` (Barre) · `12-11-10-12` (F-shape) |
| Eb | `5-3-4-5` (D-shape) · `8-8-8-8` (Barre) |
| E | `2-1-0-2` (F-shape) · `6-4-5-6` (D-shape) · `9-9-9-9` (Barre) |
| F | `3-2-1-3` (F-shape) · `7-5-6-7` (D-shape) · `10-10-10-10` (Barre) |
| F# | `4-3-2-4` (F-shape) · `8-6-7-8` (D-shape) · `11-11-11-11` (Barre) |
| G | `0-0-0-0` (Barre) · `5-4-3-5` (F-shape) · `9-7-8-9` (D-shape) · `12-12-12-12` (Barre) |
| Ab | `1-1-1-1` (Barre) · `6-5-4-6` (F-shape) · `10-8-9-10` (D-shape) |
| A | `2-2-2-2` (Barre) · `7-6-5-7` (F-shape) · `11-9-10-11` (D-shape) |
| Bb | `3-3-3-3` (Barre) · `8-7-6-8` (F-shape) · `12-10-11-12` (D-shape) |
| B | `4-4-4-4` (Barre) · `9-8-7-9` (F-shape) |

Past fret 12, the same system repeats an octave higher.

## Example: G major

The same three notes — G, B, D — can appear in different orders.

```text
Open / barre     0-0-0-0   D G B D
F-shape          5-4-3-5   G B D G
D-shape          9-7-8-9   B D G B
12th-fret barre 12-12-12-12 D G B D
```

This is why they all sound like G major but have slightly different color.

---

# View 2: I know the shape. What chord is it here?

This is the reverse lookup.

## Barre family

Formula:

```text
n-n-n-n
```

| Fret n | Chord |
|---:|---|
| 0 | G |
| 1 | Ab |
| 2 | A |
| 3 | Bb |
| 4 | B |
| 5 | C |
| 6 | C# |
| 7 | D |
| 8 | Eb |
| 9 | E |
| 10 | F |
| 11 | F# |
| 12 | G |

The root is on the **3rd string**.

## F-shape family

Formula:

```text
(n+2)-(n+1)-n-(n+2)
```

Examples:

| n | Shape | Chord |
|---:|---:|---|
| 0 | `2-1-0-2` | E |
| 1 | `3-2-1-3` | F |
| 2 | `4-3-2-4` | F# |
| 3 | `5-4-3-5` | G |
| 4 | `6-5-4-6` | Ab |
| 5 | `7-6-5-7` | A |
| 6 | `8-7-6-8` | Bb |
| 7 | `9-8-7-9` | B |
| 8 | `10-9-8-10` | C |
| 9 | `11-10-9-11` | C# |
| 10 | `12-11-10-12` | D |

The root is on the **4th and 1st strings**.

## D-shape family

Formula:

```text
(n+2)-n-(n+1)-(n+2)
```

| n | Shape | Chord |
|---:|---:|---|
| 0 | `2-0-1-2` | C |
| 1 | `3-1-2-3` | C# |
| 2 | `4-2-3-4` | D |
| 3 | `5-3-4-5` | Eb |
| 4 | `6-4-5-6` | E |
| 5 | `7-5-6-7` | F |
| 6 | `8-6-7-8` | F# |
| 7 | `9-7-8-9` | G |
| 8 | `10-8-9-10` | Ab |
| 9 | `11-9-10-11` | A |
| 10 | `12-10-11-12` | Bb |

The root is on the **2nd string**.

---

# Why there are three shapes

A major chord has three notes:

```text
root · major 3rd · perfect 5th
```

Those three notes can be reordered:

```text
root position       1 3 5
first inversion     3 5 1
second inversion    5 1 3
```

The barre, F-shape, and D-shape are fretboard manifestations of those inversions.

So the long-term goal is not really to memorize 36 unrelated chord shapes. It is to recognize **three structures moving through twelve roots**.

---

# About the 5th string

The 5th string is G in standard Open G tuning.

That means it fits naturally into:

- G
- C
- Em
- Am7 and other chords containing G

It may clash with chords that do not contain G.

In old-time and bluegrass playing, that does **not** automatically mean you must avoid the 5th string. Drone notes are part of the sound. But it is worth hearing the difference between:

1. the four-string chord itself
2. the chord plus the 5th-string drone

That distinction will matter later when thinking about harmony versus banjo texture.

---

## Sources / further reference

- [Banjo 101 — Open G and Double C chord diagrams](https://www.doofusmusic.com/PDF/Banjo%20101.pdf)
- [BanjoChords.net — Open G chord chart](https://banjochords.net/chords/chart/)
- [Langston Banjo Chord Finder](https://www.langston.com/Banjo/bc345.php)

The movable-shape tables on this page are derived directly from the tuning pitches and major-triad note formulas.
