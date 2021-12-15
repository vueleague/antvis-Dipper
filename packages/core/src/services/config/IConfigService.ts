import type EventEmitter from 'eventemitter3';
import type { IMapConfig, IPopupOption } from '@antv/l7';
import type { IWidgetProps, ControlPostions } from '../interface';
import type { IPanel } from '../panel/IPanelService';

export interface IConfig<IInitData = any> {
  initData: IInitData;
  viewData: {
    global?: Record<string, any>;
    widgets?: {
      [key: string]: {
        options?: Record<string, any> | Record<string, any>[]; // 初始化数据
        value?: Record<string, any> | Record<string, any>[]; // 结果数据
      };
    };
  };
  headerbar: {
    display?: boolean;
    headerstyle?: React.CSSProperties;
    url: string;
    logo?: Partial<{
      display: boolean;
      value: string;
      style: React.CSSProperties;
      href: string;
    }>;
    title: Partial<{
      value: string;
      display: boolean;
      style: React.CSSProperties;
    }>;
    children?: IWidgetProps<'left' | 'right' | 'center'>[];
  };
  panel: Partial<IPanel>;
  toolbar: {
    display: boolean;
    children: IWidgetProps<'left' | 'right'>[];
  };
  headerWidgets?: IWidgetProps<string>[]; // 导航栏配置
  map: Partial<IMapConfig>;
  popup: {
    // 信息框
    display?: boolean; // 是否显示
    enable?: boolean; // 是否生效
    options?: Partial<IPopupOption>;
    lngLat?:
      | number[]
      | {
          lng: number;
          lat: number;
        };
    children?: React.ReactNode;
  };
  controls: IWidgetProps<ControlPostions>[]; // 自定义组件配置
  defaultcontrols: IWidgetProps<ControlPostions>[]; // 地图自带组件
  legends: IWidgetProps<ControlPostions>[];
  layers: {
    type: string;
    options: any;
  }[];
  [key: string]: any;
}

export interface IConfigService<T> extends EventEmitter {
  config: Partial<IConfig<T>>;
  reset: () => void;
  init: (config: Partial<IConfig<T>> | undefined) => void;
  setConfig: (field: string, value: any) => void;
  getConfig: (key: string) => any;
  updateLegend: (id: string, value: any) => void;
  updateControl: (type: string, value: any) => void;
  setWidgetsOptions: (key: string, options: Record<string, any>) => void;
  getWidgetsValue: (key: string) => Record<string, any>;
  setWidgetsValue: (key: string, options: Record<string, any>) => void;
  getWidgetsOptions: (key: string) => Record<string, any>;
}