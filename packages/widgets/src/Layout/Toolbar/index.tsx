import React from 'react';
import styles from './index.less';
import { useConfigService } from '../../hooks';
import { CustomBaseLayout } from '../baseLayout';
import { getAppContentItem, isDisplay } from '../../util/ui';
import { IWidgetProps } from '@antv/dipper-core';

export default function MapToolbar() {
  const { globalConfig } = useConfigService();
  const { toolbar } = globalConfig;

  // TODO 根据配置
  return isDisplay(toolbar?.display) ? (
    <div className={styles.appToolbar}>
      {/* 左侧组件 */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CustomBaseLayout
          type="toolbar-left"
          childrens={getAppContentItem(toolbar as IWidgetProps, 'left')}
        />
      </div>
      {/* 右侧组件 */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CustomBaseLayout
          type="toolbar-right"
          childrens={getAppContentItem(toolbar as IWidgetProps, 'right')}
        />
      </div>
    </div>
  ) : null;
}