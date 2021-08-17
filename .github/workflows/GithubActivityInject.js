// add serializer for releases
serializers.ReleaseEvent = (item) => {
  return `🏷️ Released [${item.payload.tag_name}](${urlPrefix}/${
    item.repo.name
  }/releases/${item.payload.tag_name}) of ${toUrlFormat(item.repo.name)}`;
};

// only show one event of each type
processEvents = (events) => {
  const output = [];
  const usedTypes = [];

  // Filter out any boring activity
  const filtered = events.filter((event) =>
    serializers.hasOwnProperty(event.type)
  );

  filtered.forEach((event) => {
    if (!usedTypes.includes(event.type)) {
      usedTypes.push(event.type);
      output.push(serializers[item.type](item));
    }
  });
};
