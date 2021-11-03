import React from 'react';
import classnames from 'classnames';
import styles from './index.less';
import { AppTabsContent } from '@antv/dipper-component';
import type { IWidgetProps } from '@antv/dipper-core';

function PanelTabContent(props: IWidgetProps<string>) {
  const { children = [] } = props;
  return (
    <div
      className={classnames({
        [styles.appPanelContent]: true,
        [styles.appPanelContentWithoutTabs]: children.length <= 1,
      })}
    >
      <AppTabsContent items={children || []} />
    </div>
  );
}

export default PanelTabContent;