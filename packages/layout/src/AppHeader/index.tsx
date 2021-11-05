// import { useModel } from '@alipay/bigfish';
import { Layout } from 'antd';
import { useMemo } from 'react';
import React from 'react';
import './index.less';
import { isDisplay } from '../utils/ui';
import { useConfigService } from '../hooks';
import { AppContent } from '../AppTemplate';

const { Header } = Layout;

export default function AppHeader() {
  const { globalConfig } = useConfigService();
  const { headerstyle, display, logo, title, children } =
    globalConfig.headerbar || {};

  const logoDom = useMemo(() => {
    if (!isDisplay(logo?.display)) {
      return null;
    }
    const imgDom = <img src={logo?.value} style={logo?.style} />;
    if (logo?.href) {
      return (
        <a href={logo?.href} target="_blank">
          {imgDom}
        </a>
      );
    }
    return imgDom;
  }, [logo?.display, logo?.href, logo?.value, logo?.style]);

  const titleDom = useMemo(() => {
    return (
      <span style={title?.style} className="appTitle">
        {title?.value}
      </span>
    );
  }, [title?.style, title?.value]);

  return isDisplay(display) ? (
    <Header
      className="appHeader"
      style={{
        backgroundColor: '#fff',
        padding: '0 24px',
        height: '48px',
        lineHeight: '48px',
        ...headerstyle,
      }}
    >
      <div className="appHeaderLeft">
        {isDisplay(logo?.display) && logoDom}
        {isDisplay(title?.display) && titleDom}

        {/*
        // @ts-ignore */}
        <AppContent items={children?.filter((c) => c.position === 'left')} />
      </div>
      <div>
        {/*
          // @ts-ignore */}
        <AppContent items={children?.filter((c) => c.position === 'center')} />
      </div>
      <div className="appHeaderRight">
        {/*
        // @ts-ignore */}
        <AppContent items={children?.filter((c) => c.position === 'right')} />
      </div>
    </Header>
  ) : (
    <></>
  );
}
