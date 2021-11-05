import React from 'react';
import type { IWidgetProps } from '@antv/dipper-core';
import './index.less';

interface ILegendItem {
  color: string;
  value: number | number[];
}

export interface IRangeControlProps {
  items: ILegendItem[];
  targetName?: string;
  labelWidth?: string | number;
}

export function ClassifyColor({ options }: IWidgetProps<string>) {
  const { items, labelWidth = 100, targetName } = options as IRangeControlProps;

  return (
    <div className="legendClassifyControl">
      <h4>{targetName}</h4>
      <div className="colorBar">
        {items.map((item, colorIndex) => (
          <div key={colorIndex} className="item">
            <span className="color" style={{ backgroundColor: item.color }} />
            <span>
              {Math.floor(
                Array.isArray(item.value) ? item.value[0] : item.value,
              )}
            </span>
          </div>
        ))}
        {/* 分段图例标注 */}
        {Array.isArray(items[items.length - 1]) && (
          <div className="item">
            <span className="color" />
            <span>{(items[items.length - 1].value as number[])[1]}</span>
          </div>
        )}
      </div>
    </div>
  );
}
