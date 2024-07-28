let tree = {
  id: 1,
  name: "Root",
  children: [
    {
      id: 2,
      name: "Child 1",
      children: [
        {
          id: 3,
          name: "Grandchild 1.1",
          children: [],
        },
        {
          id: 4,
          name: "Grandchild 1.2",
          children: [],
        },
      ],
    },
    {
      id: 5,
      name: "Child 2",
      children: [
        {
          id: 6,
          name: "Grandchild 2.1",
          children: [],
        },
      ],
    },
    {
      id: 7,
      name: "Child 3",
      children: [
        {
          id: 8,
          name: "Grandchild 3.1",
          children: [],
        },
        {
          id: 9,
          name: "Grandchild 3.2",
          children: [
            {
              id: 10,
              name: "Great-Grandchild 3.2.1",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

function findChild(node, id) {
  if (node.id === id) {
    return node;
  } else {
    for (let index = 0; index < node.children.length; index++) {
      let result = findChild(node.children[index], id);
      if (result) return result;
    }
  }
}

console.log(findChild(tree, 10));
