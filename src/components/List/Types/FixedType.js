import React, { useEffect } from "react";

import { AutoSizer } from "react-virtualized";
import { FixedSizeList as List } from "react-window";

function FixedType({
  renderItem: RenderItem,
  data = [],
  onScroll,
  itemSize = 60,
  horizontal = false,
}) {
  const itemCount = data.length;

  useEffect(() => {}, [data]);

  const Item = ({ index, style }) => (
    <div {...{ style }}>
      <RenderItem item={data[index]} {...{ index }} />
    </div>
  );

  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          {...{
            onScroll,
            itemCount,
            height,
            width,
            itemSize,
          }}
          direction={horizontal ? "horizontal" : "vertical"}
        >
          {Item}
        </List>
      )}
    </AutoSizer>
  );
}

export default FixedType;