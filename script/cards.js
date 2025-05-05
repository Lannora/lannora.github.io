interact('.draggable').draggable({
  inertia: true,
  modifiers: [interact.modifiers.restrictRect({ restriction: 'parent' })],
  listeners: {
    move (event) {
      const target = event.target
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

      target.style.transform = `translate(${x}px, ${y}px)`
      target.setAttribute('data-x', x)
      target.setAttribute('data-y', y)
    }
  }
})

interact('.resizable').resizable({
  edges: { left: true, right: true, bottom: true, top: true },
  listeners: {
    move (event) {
      let { x, y } = event.target.dataset

      x = parseFloat(x) || 0
      y = parseFloat(y) || 0

      Object.assign(event.target.style, {
        width: `${event.rect.width}px`,
        height: `${event.rect.height}px`,
        transform: `translate(${x}px, ${y}px)`
      })
    }
  },
  modifiers: [
    interact.modifiers.restrictEdges({ outer: 'parent' }),
    interact.modifiers.restrictSize({ min: { width: 150, height: 100 } })
  ],
  inertia: true
})
