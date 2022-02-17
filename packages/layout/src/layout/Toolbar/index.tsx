import React from 'react';
import styles from './index.less';
import { useConfigService } from '../../hooks';
import { LayoutContent } from '../baseLayout';
import { getAppContentItem, isDisplay } from '../../util/ui';
import { IWidgetProps } from '@antv/dipper-core';

export default function MapToolbar() {
  const { globalConfig } = useConfigService();
  const { toolbar } = globalConfig;

  // TODO 根据配置
  return (
    <>
      {toolbar?.map((i) =>
        isDisplay(i?.display) ? (
          <div className={styles.appToolbar}>
            {/* 左侧组件 */}
            <div style={{ display: 'flex' }}>
              <LayoutContent items={getAppContentItem(i as IWidgetProps, 'left')} />
            </div>
            {/* 右侧组件 */}
            <div style={{ display: 'flex' }}>
              <LayoutContent items={getAppContentItem(i as IWidgetProps, 'right')} />
            </div>
          </div>
        ) : (
          <></>
        ),
      )}
    </>
  );
}
