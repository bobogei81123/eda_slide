var s = new sigma('cy');

// Then, let's add some data to display:
s.graph.read({
  nodes: [
  {
    id: 'n0',
    label: 'Hello',
    x: 0,
    y: 0,
    size: 10,
    bordercolor: '#fff'
  },
  {
    id: 'n1',
    label: 'World !',
    // Display attributes:
    x: 0.1,
    y: 0.1,
    size: 10,
  }],
  edges: [
  {
    id: 'e0',
    // Reference extremities:
    source: 'n0',
    target: 'n1',
    type: 'arrow'
  }
  ]
});
