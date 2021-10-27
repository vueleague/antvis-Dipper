import React, { useMemo } from 'react';
import styles from './index.less';

import { Tooltip, Typography } from 'antd';
import { useConfigService, useLayerGroup } from '@antv/dipper-component';

const { Paragraph } = Typography;

interface IProps {
  title: string;
}

function SidebarHeader({ title }: IProps) {
  const { globalConfig } = useConfigService<any>();
  const { sceneCode, areaCode } = globalConfig.initData;
  const { selectFeatures, updateProperties } = useLayerGroup('grid');
  const titles = useMemo(() => {
    if (selectFeatures?.length === 1) {
      // @ts-ignore
      return selectFeatures[0]?.feature?.properties.name;
    }
    if (selectFeatures?.length > 1) {
      return selectFeatures
        ?.map((item: any) => item?.feature.properties.name)
        .join(',');
    }
    return title;
  }, [title, selectFeatures]);

  return (
    <div className={styles.appSidebarHeader}>
      <Tooltip overlay={titles} className={styles.appSidebarHeaderTitle}>
        <Paragraph
          ellipsis={{ rows: selectFeatures?.length > 1 ? 2 : 1 }}
          editable={
            selectFeatures?.length === 1
              ? {
                  onChange: () => {
                    console.log('change');
                  },
                }
              : false
          }
        >
          {titles}
        </Paragraph>
      </Tooltip>
    </div>
  );
}

export default SidebarHeader;
