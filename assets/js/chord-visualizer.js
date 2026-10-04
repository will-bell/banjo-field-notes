(function () {
  "use strict";

  const NOTE_NAMES = ["C","C#","D","Eb","E","F","F#","G","Ab","A","Bb","B"];

  const TUNINGS = {
    "open-g": {
      label: "Open G",
      tuning: "gDGBD",
      strings: [
        { number: 4, pc: 2 },
        { number: 3, pc: 7 },
        { number: 2, pc: 11 },
        { number: 1, pc: 2 }
      ],
      fifthPc: 7,
      families: [
        { id: "barre", name: "Barre", offsets: [0,0,0,0], rootString: 1 },
        { id: "f", name: "F-shape", offsets: [2,1,0,2], rootString: 0 },
        { id: "d", name: "D-shape", offsets: [2,0,1,2], rootString: 2 }
      ]
    },
    "double-c": {
      label: "Double C",
      tuning: "gCGCD",
      strings: [
        { number: 4, pc: 0 },
        { number: 3, pc: 7 },
        { number: 2, pc: 0 },
        { number: 1, pc: 2 }
      ],
      fifthPc: 7,
      families: [
        { id: "c", name: "C-shape", offsets: [0,0,0,2], rootString: 0 },
        { id: "compact", name: "Compact inversion", offsets: [0,1,0,1], rootString: 1 },
        { id: "f", name: "F-shape", offsets: [0,2,0,3], rootString: 3 }
      ]
    }
  };

  function pcName(pc) {
    return NOTE_NAMES[(pc + 12) % 12];
  }

  function chordPc(tuning, family, n) {
    const s = tuning.strings[family.rootString];
    return (s.pc + family.offsets[family.rootString] + n) % 12;
  }

  function shapeAt(family, n) {
    return family.offsets.map(offset => n + offset);
  }

  function notePcs(tuning, frets) {
    return frets.map((fret, i) => (tuning.strings[i].pc + fret) % 12);
  }

  function maxBaseFor(family) {
    return 12 - Math.max.apply(null, family.offsets);
  }

  function positionsForChord(tuning, chordPcWanted) {
    const out = [];
    tuning.families.forEach(family => {
      for (let n = 0; n <= maxBaseFor(family); n += 1) {
        if (chordPc(tuning, family, n) === chordPcWanted) {
          out.push({ family, n, frets: shapeAt(family, n) });
        }
      }
    });
    return out.sort((a, b) => Math.max(...a.frets) - Math.max(...b.frets));
  }

  function svgEl(name, attrs, text) {
    const node = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.entries(attrs || {}).forEach(([key, value]) => node.setAttribute(key, value));
    if (text != null) node.textContent = text;
    return node;
  }

  function renderDiagram(tuning, chordName, familyName, frets) {
    const card = document.createElement("article");
    card.className = "chord-card";

    const heading = document.createElement("div");
    heading.className = "chord-card-heading";
    heading.innerHTML = "<strong>" + chordName + "</strong><span>" + familyName + "</span>";
    card.appendChild(heading);

    const pcs = notePcs(tuning, frets);
    const rootPc = NOTE_NAMES.indexOf(chordName);
    const positiveFrets = frets.filter(f => f > 0);
    const minFret = positiveFrets.length ? Math.min(...positiveFrets) : 1;
    const maxFret = Math.max(...frets);
    const startFret = minFret <= 4 ? 1 : Math.max(1, minFret - 1);
    const endFret = Math.max(startFret + 4, maxFret + 1);
    const rows = endFret - startFret + 1;

    const w = 228;
    const top = 40;
    const left = 46;
    const right = 194;
    const fretH = 38;
    const bottom = top + rows * fretH;
    const xs = [left, left + 49.3, left + 98.6, right];

    const svg = svgEl("svg", {
      viewBox: "0 0 " + w + " " + (bottom + 34),
      role: "img",
      "aria-label": chordName + " " + familyName + " chord diagram, frets " + frets.join("-"),
      class: "chord-svg"
    });

    tuning.strings.forEach((s, i) => {
      svg.appendChild(svgEl("text", { x: xs[i], y: 18, "text-anchor": "middle", class: "string-label" }, String(s.number)));
      svg.appendChild(svgEl("line", { x1: xs[i], y1: top, x2: xs[i], y2: bottom, class: "string-line" }));
    });

    for (let r = 0; r <= rows; r += 1) {
      const y = top + r * fretH;
      svg.appendChild(svgEl("line", {
        x1: left,
        y1: y,
        x2: right,
        y2: y,
        class: r === 0 && startFret === 1 ? "nut-line" : "fret-line"
      }));
      if (r < rows) {
        const fretNumber = startFret + r;
        svg.appendChild(svgEl("text", {
          x: 20,
          y: y + fretH / 2 + 4,
          "text-anchor": "middle",
          class: "fret-number"
        }, String(fretNumber)));
      }
    }

    frets.forEach((fret, i) => {
      const note = pcName(pcs[i]);
      const isRoot = pcs[i] === rootPc;
      if (fret === 0) {
        svg.appendChild(svgEl("circle", {
          cx: xs[i], cy: 29, r: 11,
          class: isRoot ? "note-dot root-note open-note" : "note-dot open-note"
        }));
        svg.appendChild(svgEl("text", {
          x: xs[i], y: 33, "text-anchor": "middle",
          class: "note-label"
        }, note));
      } else {
        const row = fret - startFret;
        const y = top + row * fretH + fretH / 2;
        svg.appendChild(svgEl("circle", {
          cx: xs[i], cy: y, r: 15,
          class: isRoot ? "note-dot root-note" : "note-dot"
        }));
        svg.appendChild(svgEl("text", {
          x: xs[i], y: y + 4, "text-anchor": "middle",
          class: "note-label"
        }, note));
      }
    });

    card.appendChild(svg);

    const meta = document.createElement("div");
    meta.className = "chord-card-meta";
    meta.innerHTML = "<code>" + frets.join("-") + "</code><span>" +
      pcs.map(pcName).join(" · ") + "</span>";
    card.appendChild(meta);

    return card;
  }

  function makeSelect(labelText, options, value) {
    const wrap = document.createElement("label");
    wrap.className = "chord-control";
    const span = document.createElement("span");
    span.textContent = labelText;
    const select = document.createElement("select");
    options.forEach(opt => {
      const o = document.createElement("option");
      o.value = opt.value;
      o.textContent = opt.label;
      if (String(opt.value) === String(value)) o.selected = true;
      select.appendChild(o);
    });
    wrap.append(span, select);
    return { wrap, select };
  }

  function initChordLookup(root, tuning) {
    const controls = document.createElement("div");
    controls.className = "chord-controls";
    const chordSelect = makeSelect(
      "Chord",
      NOTE_NAMES.map((name, pc) => ({ value: pc, label: name + " major" })),
      Number(root.dataset.defaultChord || 7)
    );
    controls.appendChild(chordSelect.wrap);

    const intro = document.createElement("p");
    intro.className = "chord-live-summary";
    intro.setAttribute("aria-live", "polite");

    const grid = document.createElement("div");
    grid.className = "chord-grid";

    root.append(controls, intro, grid);

    function render() {
      const pc = Number(chordSelect.select.value);
      const name = pcName(pc);
      const positions = positionsForChord(tuning, pc);
      intro.textContent = positions.length + " practical complete major-triad shapes for " + name +
        " through fret 12. Root notes are highlighted.";
      grid.replaceChildren(...positions.map(p =>
        renderDiagram(tuning, name, p.family.name, p.frets)
      ));
    }

    chordSelect.select.addEventListener("change", render);
    render();
  }

  function initShapeLookup(root, tuning) {
    const controls = document.createElement("div");
    controls.className = "chord-controls";

    const familySelect = makeSelect(
      "Shape family",
      tuning.families.map(f => ({ value: f.id, label: f.name })),
      root.dataset.defaultFamily || tuning.families[0].id
    );

    const positionSelect = makeSelect("Position", [], 0);
    controls.append(familySelect.wrap, positionSelect.wrap);

    const summary = document.createElement("p");
    summary.className = "chord-live-summary";
    summary.setAttribute("aria-live", "polite");

    const grid = document.createElement("div");
    grid.className = "chord-grid single";

    root.append(controls, summary, grid);

    function fillPositions() {
      const family = tuning.families.find(f => f.id === familySelect.select.value);
      positionSelect.select.replaceChildren();
      for (let n = 0; n <= maxBaseFor(family); n += 1) {
        const frets = shapeAt(family, n);
        const chord = pcName(chordPc(tuning, family, n));
        const opt = document.createElement("option");
        opt.value = String(n);
        opt.textContent = frets.join("-") + " → " + chord;
        positionSelect.select.appendChild(opt);
      }
      positionSelect.select.value = root.dataset.defaultPosition || "0";
      if (!positionSelect.select.value) positionSelect.select.selectedIndex = 0;
      render();
    }

    function render() {
      const family = tuning.families.find(f => f.id === familySelect.select.value);
      const n = Number(positionSelect.select.value || 0);
      const frets = shapeAt(family, n);
      const chord = pcName(chordPc(tuning, family, n));
      summary.textContent = family.name + " at " + frets.join("-") + " makes " + chord + " major.";
      grid.replaceChildren(renderDiagram(tuning, chord, family.name, frets));
    }

    familySelect.select.addEventListener("change", fillPositions);
    positionSelect.select.addEventListener("change", render);
    fillPositions();
  }

  document.querySelectorAll("[data-chord-visualizer]").forEach(root => {
    const tuning = TUNINGS[root.dataset.tuning];
    if (!tuning) return;
    const mode = root.dataset.mode || "chord";
    if (mode === "shape") initShapeLookup(root, tuning);
    else initChordLookup(root, tuning);
  });
})();