import React, {forwardRef} from 'react';

import type {TabProps} from '../../typings/nimbus';

const isMac = /Mac/.test(navigator.userAgent);

const Tab = forwardRef<HTMLLIElement, TabProps>((props, ref) => {
  const handleClick = (event: React.MouseEvent) => {
    const isLeftClick = event.nativeEvent.which === 1;

    if (isLeftClick && !props.isActive) {
      props.onSelect();
    }
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    const isMiddleClick = event.nativeEvent.which === 2;

    if (isMiddleClick) {
      props.onClose();
    }
  };

  const {isActive, isFirst, isLast, borderColor, hasActivity} = props;

  return (
    <>
      <li
        onClick={props.onClick}
        style={{borderColor}}
        className={`tab_tab ${isFirst ? 'tab_first' : ''} ${isActive ? 'tab_active' : ''} ${
          isFirst && isActive ? 'tab_firstActive' : ''
        } ${hasActivity ? 'tab_hasActivity' : ''}`}
        ref={ref}
      >
        {props.customChildrenBefore}
        <span
          className={`tab_text ${isLast ? 'tab_textLast' : ''} ${isActive ? 'tab_textActive' : ''}`}
          onClick={handleClick}
          onMouseUp={handleMouseUp}
        >
          <span title={props.text} className="tab_textInner">
            {props.text}
          </span>
        </span>
        <i className="tab_icon" onClick={props.onClose}>
          <svg className="tab_shape" viewBox="0 0 12 12" width="12" height="12">
            <circle cx="6" cy="6" r="5.5" fill="currentColor" opacity="0.8"/>
            <path d="M4 4 L8 8 M8 4 L4 8" stroke="white" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        </i>
        {props.customChildren}
      </li>

      <style jsx>{`
        .tab_tab {
          color: ${isMac ? '#5c5c5c' : '#ccc'};
          border-color: ${isMac ? 'transparent' : '#ccc'};
          border-bottom-width: ${isMac ? '0' : '1px'};
          border-bottom-style: ${isMac ? 'none' : 'solid'};
          border-left-width: ${isMac ? '0' : '1px'};
          border-left-style: ${isMac ? 'none' : 'solid'};
          list-style-type: none;
          flex-grow: 1;
          position: relative;
          background: ${isMac ? 'linear-gradient(to bottom, #f6f6f6 0%, #e8e8e8 100%)' : 'transparent'};
          border-radius: ${isMac ? '4px 4px 0 0' : '0'};
          margin: ${isMac ? '0 2px' : '0'};
          height: ${isMac ? '24px' : 'auto'};
          line-height: ${isMac ? '24px' : 'auto'};
        }

        .tab_tab:hover {
          color: #ccc;
        }

        .tab_first {
          border-left-width: 0;
          padding-left: 1px;
        }

        .tab_firstActive {
          border-left-width: 1px;
          padding-left: 0;
        }

        .tab_active {
          color: ${isMac ? '#000' : '#fff'};
          border-bottom-width: 0;
          background: ${isMac ? 'linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%)' : 'transparent'};
          box-shadow: ${isMac ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'};
          z-index: 1;
        }
        .tab_active:hover {
          color: ${isMac ? '#000' : '#fff'};
        }

        .tab_hasActivity {
          color: #50e3c2;
        }

        .tab_hasActivity:hover {
          color: #50e3c2;
        }

        .tab_text {
          transition: color 0.2s ease;
          height: ${isMac ? '24px' : '34px'};
          display: block;
          width: 100%;
          position: relative;
          overflow: hidden;
          font-family: ${isMac ? '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : 'inherit'};
          font-size: ${isMac ? '12px' : 'inherit'};
          font-weight: ${isMac ? '500' : 'inherit'};
        }

        .tab_textInner {
          position: absolute;
          left: ${isMac ? '12px' : '24px'};
          right: ${isMac ? '12px' : '24px'};
          top: 0;
          bottom: 0;
          text-align: ${isMac ? 'left' : 'center'};
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          padding-left: ${isMac ? '8px' : '0'};
          padding-right: ${isMac ? '8px' : '0'};
        }

        .tab_icon {
          transition:
            opacity 0.2s ease,
            color 0.2s ease,
            transform 0.25s ease,
            background-color 0.1s ease;
          pointer-events: none;
          position: absolute;
          right: ${isMac ? '4px' : '7px'};
          top: ${isMac ? '6px' : '10px'};
          display: inline-block;
          width: ${isMac ? '12px' : '14px'};
          height: ${isMac ? '12px' : '14px'};
          border-radius: ${isMac ? '50%' : '100%'};
          color: ${isMac ? '#86868b' : '#e9e9e9'};
          opacity: 0;
          transform: scale(0.95);
          background: ${isMac ? 'rgba(0,0,0,0.05)' : 'transparent'};
        }

        .tab_icon:hover {
          background-color: ${isMac ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.13)'};
          color: ${isMac ? '#1d1d1f' : '#fff'};
        }

        .tab_icon:active {
          background-color: ${isMac ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.1)'};
          color: ${isMac ? '#86868b' : '#909090'};
        }

        .tab_tab:hover .tab_icon {
          opacity: 1;
          transform: none;
          pointer-events: all;
        }

        .tab_shape {
          position: absolute;
          left: 4px;
          top: 4px;
          width: 6px;
          height: 6px;
          vertical-align: middle;
          fill: currentColor;
          shape-rendering: crispEdges;
        }
      `}</style>
    </>
  );
});

Tab.displayName = 'Tab';

export default Tab;
