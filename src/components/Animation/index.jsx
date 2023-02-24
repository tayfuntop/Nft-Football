import React from "react";
import { Modal } from 'antd';

import "./index.css";

const Animation = () => {
  return (
      <Modal
        open={true}
        zIndex={10}
        centered footer={null}
        width={100}
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, .9)"}}
      >
        <svg className="animation-modal" width="100" height="100" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.8401 6.51671C21.8027 5.13991 26.1133 5.13991 30.0759 6.51672C33.7104 7.78808 36.8597 10.1578 39.0882 13.2977L39.0882 13.2978C41.3171 16.4375 42.5146 20.1928 42.5151 24.0434C42.5151 24.0434 42.5151 24.0435 42.5151 24.0435V24.4624C42.4377 28.0994 41.2874 31.6323 39.2086 34.6181L39.208 34.619L39.2073 34.6199C36.9751 37.8446 33.7787 40.2788 30.0772 41.5742C26.3755 42.8693 22.3587 42.9589 18.6029 41.8298C14.8474 40.7008 11.546 38.4113 9.17225 35.2895C6.86558 32.2559 5.55018 28.5884 5.40031 24.7861L5.40051 24.0436C5.40155 20.1928 6.59892 16.4375 8.82773 13.2977C11.0562 10.1579 14.2057 7.78819 17.8401 6.51671ZM30.6166 4.96337C26.3038 3.46468 21.6121 3.46468 17.2994 4.96337L17.2986 4.96364L17.2978 4.96392C13.3413 6.34793 9.91253 8.92756 7.4865 12.3457C5.2157 15.5446 3.92858 19.3303 3.77196 23.2386L3.7456 23.2392V24.4801L3.7458 24.4889C3.83747 28.757 5.2788 32.8865 7.86298 36.285C10.4471 39.6835 14.0411 42.1759 18.1294 43.4049C22.218 44.6341 26.5907 44.5366 30.6204 43.1267C34.6494 41.7167 38.1288 39.0673 40.5588 35.5573C42.8243 32.3031 44.0771 28.4522 44.1597 24.4882L44.1599 24.4796V24.0433C44.1593 19.8516 42.8559 15.7637 40.4294 12.3457M30.6166 4.96337L30.6174 4.96364L30.6166 4.96337ZM30.6174 4.96364L30.6181 4.96391L30.6174 4.96364ZM30.6181 4.96391C34.5749 6.3478 38.0034 8.92755 40.4294 12.3457L30.6181 4.96391Z" fill="black" />
          <path d="M23.9515 17.1908L30.4702 21.9249L27.9812 29.5893H19.9248L17.4358 21.9249L23.9515 17.1908Z" fill="black" />
          <path d="M17.4359 6.12382L23.9518 10.8581L30.4705 6.12382L30.347 5.74017H30.3473C26.2094 4.30225 21.7079 4.30225 17.57 5.74017L17.4359 6.12382Z" fill="black" />
          <path d="M36.4849 19.9698L43.0117 24.7041L43.3379 24.471V24.0434C43.3444 19.8032 41.9541 15.6789 39.3824 12.3081H38.9822L36.4849 19.9698Z" fill="black" />
          <path d="M29.2123 42.3715L29.5384 42.6072C33.738 41.3427 37.3848 38.692 39.8838 35.0878L39.7603 34.7095H31.704L29.2123 42.3715Z" fill="black" />
          <path d="M8.02235 35.0881C10.523 38.69 14.1692 41.3395 18.3677 42.6046L18.6938 42.369L16.202 34.6937H8.14564L8.02235 35.0881Z" fill="black" />
          <path d="M4.56853 24.0434V24.4711L4.88932 24.7042L11.4133 19.9699L8.92427 12.2946H8.52398C5.9484 15.6688 4.55781 19.7989 4.56856 24.0435L4.56853 24.0434Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M23.1292 10.0357V18.0128H24.7739V10.0357H23.1292Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M37.0211 18.934L29.4341 21.3964L29.9418 22.9608L37.5288 20.4984L37.0211 18.934Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M26.8324 29.4079L31.5222 35.8587L32.8525 34.8915L28.1627 28.4407L26.8324 29.4079Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M19.7429 28.4407L15.0531 34.8915L16.3834 35.8587L21.0732 29.4079L19.7429 28.4407Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M10.3769 20.4983L17.9639 22.9607L18.4717 21.3963L10.8847 18.9339L10.3769 20.4983Z" fill="black" />
        </svg>
      </Modal>
  );
};

export { Animation };