function loop_size(node) {
  var first = node,
      second = node.next,
      size = 1;
  while (first != second) {  //find link
    first = first.next;
    second = second.next.next;
  }
  first = first.next;
  while (first != second) {  //count loop size
    ++size;
    first = first.next;
  }
  return size;
}